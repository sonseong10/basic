# Project 08

## Progress Bar

로그인이나, 쇼핑몰에서 결재등 서버 통신이 필요한 경우 화면이동을 막아야 합니다 이외에도 차트를 보여줘야하는경우 해당 프로젝트를 참고 해 주세요.

## Point

- [x] 가로, 도넛, 세로 모양의 로딩바를 만들어야 합니다.
- [x] 숫자를 통한 진행률을 표시합니다.

## Solution

1. 도넛모양 로딩바 제작

> 애니메이션을 절반으로 나눠 상하, 하상 애니메이션을 제작해 **animation-delay**로 마치 회전하는 효과를 만들었습니다.

```css
@keyframes down {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: rotate(180deg);
  }
}

.donut .right .value-bar {
  animation: up 2s linear both;
  animation-delay: 2s;
}

@keyframes up {
  to {
    transform: rotate(180deg);
  }
}
```

2. 숫자를 통한 진행률

> setInterval()을 통한 n초후 마다 count를 증가시켜 화면에 업데이트 합니다.

```js
setInterval([Callback], Time)
```

## Result

![progress](https://user-images.githubusercontent.com/68719427/108047763-83437a00-7089-11eb-9fa1-18180d96ef53.gif)
