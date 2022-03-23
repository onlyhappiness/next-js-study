## Page

<br>

> https://nextjs.org/docs

<br>

### pre-rendering

---

```
next.js는 모든 페이지를 미리 렌더링한다고 한다.
즉, Next.js는 javascript가 실행되기 전에 HTML로 미리 생성하는 것 같다.
미리 렌더링을 통해 더 나은 성능과 SEO를 가져올 수 있다.
```

<br>
<br>

### Static Generation vs SSR (정적 생성과 서버 사이드 렌더링)

---

<br>

위 둘의 차이는 페이지를 생성할 때 있다.

> 공식 문서에서는 정적 생성을 권장하고 있다.

```
정적 생성 - HTML을 빌드 시 생성

서버 사이드 렌더링 - HTML을 각 요청에 대해 생성
```

<br>

#### Static Generation without data (데이터 없는 정적 생성)

---

```js
function About() {
  return <div>About</div>;
}

export default About;
```

> 데이터를 가져올 필요가 없다.<br> 이 경우에는, next.js는 빌드 시 HTML 파일을 생성

<br>
<br>

#### Static Generation with data (데이터를 사용하는 정적 생성)

---

<br>

FIXME: 이 둘의 차이는 좀 더 알아보자

1. getStaticProps

   > https://nextjs.org/docs/basic-features/data-fetching/get-static-props

2. getStaticPaths
   > https://nextjs.org/docs/basic-features/data-fetching/get-static-paths

<br>
<br>

##### 페이지의 내용이 데이터에 따라 달라질 경우

---

```js
// TODO: 페이지가 렌더링 되기전에
// API를 통해 posts를 불러옴
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((posts) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

// 이 함수는 빌드 시 호출된다.
export async function getStaticProps() {
  const res = await fetch('https://localhost:3000/blabla');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
```

> pre-rendering 을 통해 데이터를 가져오려면
> <br> **export** 된 **async** 함수를 써야한다.

<br>
<br>

##### 페이지의 경로가 데이터에 따라 달라질 경우

---

> page/post/[id].js

```js
// 이 함수는 빌드 시 호출됨
export async function getStaticPaths() {
  const res = await fetch('https://localhost:3000/blabla');
  const posts = await res.json();

  // 게시울을 기반으로 pre-rendering할 경로를 가져옴
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  // 빌드 시 이 경로로 pre-rendering
  // { fallback: false }는 다른 경로는 404임을 의미
  return { paths, fallback: false };
}
```

<br>

> 게시물에 대한 데이터틑 가져와 페이지를 pre-rendering을 하는데 사용할 수 있도록 해야한다.

```js
function Post({ post }) {
  // Render post...
}

export async function getStaticPaths() {
  // ...
}

// 빌드 시 호출
export async function getStaticProps({ params }) {
  // params는 post 'id'가 포함
  // 만약 경로가 /posts/1 같으면, params.id는 1이다.
  const res = await fetch(`https://.../posts/${params.id}`);
  const post = await res.json();

  return { props: { post } };
}

export default Post;
```

<br>
<br>

### SSR (서버 사이드 렌더링)

---

1. getServerSideProps

```js
function Page({ data }) {
  // Render Data
}

// 모든 요청을 호춯
export async function getServerSideProps() {
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
```

> `getServerSideProps`는 `getStaticProps`와 비슷
> <br>차이점은 `getServerSideProps`는 빌드 시간이 아니라 모든 요청에 ​​대해 실행된다는 것
