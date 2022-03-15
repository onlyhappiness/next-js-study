### Index

1. [Next가 뭐에욥? (´･ω･`)?](#1.-next?)

2. <a href="https://github.com/onlyhappiness/next-js-study/tree/main/next-intro">Next에 대해 조금 더 알아보자!</a>

<br>

---

<br>

### 1.next

<br>

#### next가 뭐에욥? (´･ω･`)?

```
next is a react frontend development web framework
create by vercel that enables functionality
such as server-side rendering and static site generation
```

<br>

#### Server-Side-Rendering?

```
Unlike a traditional React app
where the entire application is loaded and rendered on the client,
Next.js allows the first page load to be rendered by the server,
which is great fo SEO & performance
```

---

#### Other Next.js Benefits

1. Easy page routing

2. API routes

3. Out of box TypeScript & Sass

4. Static site generation (next export)

5. Easy deployment

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
이거 써보셈

<br>

> 1 .babelrc 파일 생성

```json
{
  "presets": ["next/babel"],
  "plugins": []
}
```

<br>

> 2 .eslintrc 파일 이거 넣어

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
