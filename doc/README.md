> https://nextjs.org/docs

## 기본 기능

<br>
<br>

### 1. 페이지

---

- pre-rendering

```
next.js는 모든 페이지를 미리 렌더링한다고 한다.
즉, Next.js는 javascript가 실행되기 전에 HTML로 미리 생성하는 것 같다.
미리 렌더링을 통해 더 나은 성능과 SEO를 가져올 수 있다.
```

<br>
<br>

- Static Generation vs SSR (정적 생성과 서버 사이드 렌더링)

<br>

위 둘의 차이는 페이지를 생성할 때 있다.

> 공식 문서에서는 정적 생성을 권장하고 있다.

```
정적 생성 - HTML을 빌드 시 생성

서버 사이드 렌더링 - HTML을 각 요청에 대해 생성
```

<br>

<h5>Static Generation without data (데이터 없는 정적 생성)</h5>

```js
function About() {
  return <div>About</div>;
}

export default About;
```

> 데이터를 가져올 필요가 없다.<br> 이 경우에는, next.js는 빌드 시 HTML 파일을 생성

<br>
<br>

<h5>Static Generation with data (데이터를 사용하는 정적 생성)</h5>

1. getStaticProps

2. getStaticPaths

```

```
