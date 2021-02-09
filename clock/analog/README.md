# Project 05

## Analog Clock

아이디어 출처: [Link Site](https://www.cssscript.com/demo/neumorphic-analog-clock/)

## Point

- [x] setInterval() 사용법 익히기
- [x] Date() 사용법 익히기

### 사용한 이미지 출처

[Link Site](https://www.cssscript.com/demo/neumorphic-analog-clock/)

### Solution

`new Date()` 사용

```js
const now = new Date()
```

회전각도 구하기

```JS
const seconds = now.getSeconds()
const secondsDegrees = (seconds / 60) * 360
secondHand.style.transform = `rotate(${secondsDegrees}deg)`
```

## Result

![clock](https://user-images.githubusercontent.com/68719427/107342359-765fdd00-6b03-11eb-9cc2-1ce3edf9afde.gif)
