# Project 02

## Navigation bar

기초적인 네비게이션 만들기

### Point

- [x] 마우스오버로 하단메뉴를 드롭다운 형식으로 보여주기.
- [x] 가상요소로 hover 효과 만들기

### Solution

1. 마우스 이벤트 활용

```js
dropDown.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.classList.add("show")
  })
  e.addEventListener("mouseout", () => {
    e.classList.remove("show")
  })
})
```

2. 가상요소로 hover 효과

```css
.gnb li > .menu::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  display: block;
  width: 0;
  height: 2px;
  border-radius: 5px;
  background-color: #1d1d1d;
  transition: all 300ms linear;
}

.gnb li > .menu:hover:after {
  width: 100%;
}
```

## Result

![header](https://user-images.githubusercontent.com/68719427/107333959-7b1f9380-6af9-11eb-9ea7-26156fe6ad65.gif)
