### Index

---

1. [Next가 뭐에욥? (´･ω･`)?](#1.-next?)

2. <a href="https://github.com/onlyhappiness/next-js-study/tree/main/next-intro#readme">Next에 대해 조금 더 알아보자!</a>

3. <a href="https://github.com/onlyhappiness/next-js-study/tree/main/doc/Page">Next-page</a>

<br>

### 1.next

---

현재 인기 있는 next.js에 대해 알아보자.

<br>
<br>

#### next가 뭐에욥? (´･ω･`)?

```
next는 vercel이 만든 react 프론트엔드 웹 프레임워크이다.

(SSR과 정적 사이트 생성과 같은 기능을 제공하는)
```

> 또한, next는 이러한 기능을 지원하고 있다.

- Pre-Rendering, SSG, SSR

- 페이지 기반 라우팅, 동적 라우팅 (next/router)

- 자동 컴파일 및 번들링

- 반응 빠른 새로 고침

- 정적 파일 제공 `./public`에 매핑 된다.

- **다른 기능들은 천천히 공부하면서 더 알아보자**

<br>
<br>

#### Server-Side-Rendering?

---

```

페이지 로드될 때, 서버에서 데이터 랜더링 되는 작업.

서버에서 사용자에게 보여줄 페이지를 모두 구성하여 사용자에게 페이지를 보여주는 방식

```

> SSR에 대해 좀 더 자세히 알고 싶다면
> <a href="https://nextjs.org/learn/foundations/how-nextjs-works/rendering">여기</a>를 참고할 것

<br>
<br>

#### 그럼 왜 써요?

---

<br>

next를 쓰는 가장 큰 이유는 위에서 기술한 SSR 때문이다.

그러면, SSR과 CSR의 차이는 뭘까?

TODO: 다음에 더 공부하고 기술 할 예정

<br>
<br>

#### 그렇다면 CSR이랑 SSR, SPA의 차이점은 뭐에욥? ...(\*￣０￣)ノ

---

<br>

1. CSR (Client-Side-Rendering)

> 데이터가 없는 HTML을 로드 한 이후에 데이터를 요청해서 받아오는 방식

<br>

2. SSR (Server-Side-Rendering)

> 위에 적었징? :-3

<br>

3. SPA (Single-Page-Application)

> 전체 페이지를 하나의 페이지에 담아 동적으로 화면을 구성

> 서버에서 첫 요청시 한 페이지만 불러오고 페이지 이동 시 기존 페이지의 내부를 수정해서 보여주는 방식

<br>
<br>

#### create-next-app

---

```javascript
yarn create next-app
```

요거 쓰면 바로 설치해서 바로 쓸 수 있음.

> https://nextjs.org/docs/getting-started

<br>

![so-easy](https://user-images.githubusercontent.com/79133968/158399374-f05ef39a-25ff-4da8-a3d9-724f79398329.jpg)

<br>
<br>

#### 어어?! next에서 run dev 했는데 에러나옴!!

---

<br>
next/babel 에러 해결법! <br>
이렇게 해보자
<br>

> 1 .babelrc 파일 생성

```json
{
  "presets": ["next/babel"],
  "plugins": []
}
```

<br>

> 2 .eslintrc 파일에 <br>
> 다음과 같이 작성한다.

```json
{
  "extends": ["next/babel"]
}
```

<br>
<br>

#### next.js를 어디서 사용하고 있을까?

---

<br>

https://jobs.netflix.com/

https://www.tiktok.com/en

> 트위치, 깃허브, 나이키, 마블 등등..

<br>
