## create-next-app

올.. cra처럼 이런게 있더라..?

## 음.. 에러가 많네..?

next/babel을 찾을 수 없다는 에러

eslint 때문인가?

> ㄴㄴ

---

## next/babel 에러 해결법

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

## img 태그 쓰지 않음

next/image가 있음
