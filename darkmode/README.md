# Project 01

## Dark Mode

Dark Mode를 지원하는 웹이 증가하면서 버튼을 클릭으로 다크모드 온/오프 기능 만들기

### Point

- [x] HTML: Sementic Markup을 할 수 있다.
- [x] JS: HTML 요소 JS로 접근하기, 이벤트 핸들링을 이해한다.
- [x] CSS 레이아웃 구성하기, 목적에 맞게 파일 분리 할 수 있다.

### Solution

1. `<dl>`태그를 사용

> 단순히 `<div>`가 아닌 리스트 구성을 위해 `<ul>, <ol>, <dl>` 중에 적절한 `<dl>` 태그를 사용 했습니다.

[dl tag MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/dl)

2. 기능 구현 방법

> 버튼을 클릭 했을때 `<body>`태그에 dark라는 클레스가 있다면 제거 없다면 추가 하는 방식 사용

```js
const body = document.body
const modeBtn = document.querySelector("#mode--btn")

modeBtn.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark")
    modeBtn.textContent = "Dark"
  } else {
    body.classList.add("dark")
    modeBtn.textContent = "White"
  }
  modeBtn.blur()
})
```

3. CSS파일을 분리 사용하기

> style.css는 요소들의 스타일을 적용하기 위해서 사용하고 dark.css는 오직 Darkmode일때만 적용되는 스타일 이기때문에 분리하여 사용하는게 유지보수에 좋다고 판단 했습니다.

## Result

![dark_mode](https://user-images.githubusercontent.com/68719427/104282133-eb82c700-54f1-11eb-8274-d8674ced7532.gif)
