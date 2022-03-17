## Timeline

#### 2.3 Server Side Rendering

> https://nomadcoders.co/nextjs-fundamentals/lobby

---

<br>

#### next/head

- 검색에 최적화

---

<br>

### next/router

#### 1. 파일이름 = url 이름

```
  file name = url name
```

```
  file name = about.js
  url = /about
```

> 만약 파일 이름이 about.js 라면 <br> url 주소도 /about이 된다.

> component는 url 주소에 반영되지 않음

<br>

> **예외사항!** <br>
> index.js도 반영되지 않음

<br>

> **유저에게 보여주고 싶은 게 있다면, <br> page 폴더에서 export default function을 해야함**

<br>

#### 2. 페이지 이동

> react-router-dom이 필요없어!

```js
const router = useRouter();
```

> 요거 쓰면 됨!

<br>

---

<br>

### pre-rendering

> js와 react.js가 로딩되지 않았더라도 콘텐츠를 볼 수 있음

> 단, js와 react.js를 불러오지 못하면 컨텐츠만 볼 수 있음

---

<br>

### next/link

> href 기능을 대신 해줌

<br>

```js
<Link href='/'>
  <a>Home</a>
</Link>
```

---

<br>

### next.js 에서는 css 어떻게 사용할까?

#### 1. module.css

<br>

> module.css <br>
> 유저가 봤을 때 class 이름이 무작위로 됨

<br>

#### 2. `<style jsx>`

<br>

> `<style jsx>` <br>
> module.css보다 class 이름이 더 기이하게 됨

---

<br>

### custom App

#### \_app.js

> \_app.js는 청사진 같은 파일 <br>
> 가장 먼저 실행하는 파일이다.

---

<br>

### next.config.js

#### 1. redirects

<br>

> 말 그대로 redirect <br><br> url 주소를 바꾼다.

```
// redirects 설정
  async redirects() {
    return [
      {
        //  /contact로 접근 시 /form으로 이동
        source: '/contact',
        destination: '/form',
        permanent: false,
      },
      {
        // 이렇게 사용 하기도 한다.
        source: '/old/:path*',
        destination: '/new/:path*',
        permanent: false,
      }
    ];
  },
```

<br>

> next.config.js의 code를 수정하면 나오는 문구

```
Found a change in next.config.js. Restart the server to see the changes in effect.
```

> 말 그대로 서버 재시작하면 된다.

<br>

#### 2. rewrite

<br>

> redirect 많이 혼동될 것으로 예상 <br><br> 다르게 유저에게는 바뀐 url을 보여주지만 사실 url이 바뀐 건 아니다.

> **다시 말해, redirect와 비슷하나 <br> 유저가 url 변화를 볼 수 없다.**

<br>

```
// rewrite 설정
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  }
```

<br>

---

<br>

### SSR(Server-Side-Rendering) 구현

```
export async function getServerSideProps() {
  이 자리에 어떤 코드를 쓰던지 간에
  이 코드는 server쪽에서만 작동함.

  오직 백엔드에서만 작동
}
```

만약 데이터를 불러와야 하는 상황이라면 자주 사용할 것으로 생각한다.

데이터를 먼저 서버에서 실행시켜서 화면에 보여준다.

> SSR을 사용하게 되면 2가지 선택지가 생긴다 <br>

> 1. 데이터가 유효할 때 화면이 보여지게 되는 게 좋은지? <br> (SSR) <br>
> 2. loading 화면을 보여준 다음에 데이터를 받는 것이 좋은지? <br> (데이터를 불러오기 전까지 loading)

> 각각의 장단점을 잘 따져서 올바르게 사용하자

<br>

---

<br>

#### as가 난다요?

```js
<Link
  href={{
    pathname: `/movies/${movie.id}`,
    query: {
      title: movie.original_title,
    },
  }}
  as={`/movies/${movie.id}`}
>
  <a>{movie.original_title}</a>
</Link>
```

---

<br>

#### [...params].js

> router query를 배열로 보낸다.

```
ex)
  params: Array(2)
    0: "Spider-Man: No Way Home"
    1: "634649"
```

> 이렇게 보내도 해당 url이 나옴
