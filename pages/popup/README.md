# Project 03

## Popup

팝업창 만들기

## Point

- [x] 화면전체 클릭을 막는 모달창 만들기

### Solution

1. 팝업창 열고 닫기

```js
// 오픈 버튼
popupOpen.addEventListener("click", () => {
  blind.classList.add("open")
})

//팝업창 안에 있는 닫기 버튼
popupClose.addEventListener("click", () => {
  blind.classList.remove("open")
})
```

2. 외부 클릭 막기

```css
.blind {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  transform: translateY(-100vh);
}
```

> Notice 화면 클릭을 막기위해 left: 0; top: 0; right: 0; bottom: 0 ; 방식을 활용 가능하며 z-index 등 다양한 사용법이 있다.

## Result

![ezgif com-gif-maker](https://user-images.githubusercontent.com/68719427/107334011-8a9edc80-6af9-11eb-9738-2fc17c4dce78.gif)
