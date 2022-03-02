## Timeline

> https://nomadcoders.co/nextjs-fundamentals/lobby

> Pages

---

## Next js Intro

<br>

---

### Library vs Framework

<br>

---

### next/router

```
file name = url name

ex)
    file name = about.js
    url = /about
```

> component는 반영되지 않음

> **유저에게 보여주고 싶은 게 있다면, page 폴더에서 export default function을 해야함**

> 예외사항! <br> index.js는 반영되지 않음

---

<br>

### client-side-rendering

```
브라우저가 js를 가져와서 client-side의 js가 모든 UI를 만듬
```

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

```
ex)
    <Link href='/'>
      <a>Home</a>
    </Link>

```

---

<br>

### next/router

> react-router-dom이 필요없어!

---

<br>

### next.js in css

> module.css <br>
> 유저가 봤을 때 class 이름이 무작위로 됨

<br>

> `<style jsx>` <br>
> module.css보다 class 이름이 기이하게 됨

---

<br>

### custom App

> \_app.js

> \_app.js는 청사진 같은 파일 <br>
> 가장 먼저 실행하는 파일이다.
