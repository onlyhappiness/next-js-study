### next?

```
next is a react frontend development web framework create by vercel that enables functionality such as server-side rendering and static site generation
```

---

### Server-Side-Rendering?

```
Unlike a traditional React app where the entire application is loaded and rendered on the client, Next.js allows the first page load to be rendered by the server, which is great fo SEO & performance
```

---

### Other Next.js Benefits

1. Easy page routing

2. API routes

3. Out of box TypeScript & Sass

4. Static site generation (next export)

5. Easy deployment

---

<br>

### create-next-app

> https://nextjs.org/docs/getting-started

---

### Error..?

next/babel을 찾을 수 없다는 에러

eslint 때문인가?

> ㄴㄴ

---

### next/babel 에러 해결법

> 1 .babelrc 파일 생성

```
{
  "presets": ["next/babel"],
  "plugins": []
}
```

> 2 .eslintrc 파일 이거 넣어

```
{
  "extends": ["next/babel"]
}
```

---

### img 태그 쓰지 않음

- next/image가 있음
