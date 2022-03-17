### Index

1. [Next가 뭐에욥? (´･ω･`)?](#1.-next?)

2. <a href="https://github.com/onlyhappiness/next-js-study/tree/main/next-intro#readme">Next에 대해 조금 더 알아보자!</a>

<br>

---

### 1.next

<br>

#### next가 뭐에욥? (´･ω･`)?

```
next는 vercel이 만든 react 프론트엔드 웹 프레임워크이다.

(SSR과 정적 사이트 생성과 같은 기능을 제공하는)
```

<br>

#### Server-Side-Rendering?

```
만약 데이터를 불러오는 작업이 있을 경우,

클라이언트에서 데이터 렌더링되는 기존의 react 앱과 다르게

next는 페이지 로드될 때 데이터를 서버에서 랜더링이 된다.

이와 같이 페이지 로드될 때, 서버에서 데이터 랜더링 되는 작업을

Server-Side-Rendering이라고 부르는 듯 하다.
```

> SSR에 대해 좀 더 자세히 알고 싶다면
> <a href="https://nextjs.org/learn/foundations/how-nextjs-works/rendering">여기</a>를 참고할 것

---

<br>

#### next.js의 장점

1. 페이지 이동이 쉽다! (next/router)

2. SSR, CSR을 지원한다!

3. 배포하기 쉽다! (vercel)

---

<br>

#### create-next-app

<br>

> https://nextjs.org/docs/getting-started

<br>

```javascript
yarn create next-app
```

요거 쓰면 바로 설치해서 바로 쓸 수 있음.

<br>

![so-easy](https://user-images.githubusercontent.com/79133968/158399374-f05ef39a-25ff-4da8-a3d9-724f79398329.jpg)

---

<br>

#### 어어?! next에서 run dev 했는데 에러나옴!!

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

---

<br>

#### next.js를 어디서 사용하고 있을까?

> https://jobs.netflix.com/

> https://www.tiktok.com/en

> 트위치, 깃허브, 나이키, 마블 등등..

<br>
