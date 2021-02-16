# Project 07

## Weather

Open API [openweathermap](https://openweathermap.org/)을 활용하여 간단한 오늘날씨를 출력합니다.

## Point

- [x] API 사용법을 알 수 있습니다.
- [x] API를 필요한 데이터만 사용하며 알맞게 변경 할 수 있습니다.

## Solution

1. API 사용법을 알 수 있습니다.

[Link openweathermap](https://openweathermap.org/)을 통해 날씨정보를 받아와야 합니다.

```js
fetch().then(){} // fetch을 활용 URI를 통해 데이터를 받아옵니다.
```

[Link Fetch MDN](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)

2. API를 필요한 데이터만 사용하며 알맞게 변경

> 온도가 영하인 경우 글자색을 파란색으로 변경합니다.

```js
function lowTemp(temp) {
  const tempText = document.querySelector("#temp")
  temp <= 0 ? tempText.classList.add("cold") : tempText.classList.remove("cold")
  tempText.textContent = temp
}
```

## Result

![weather](https://user-images.githubusercontent.com/68719427/108043164-1c6f9200-7084-11eb-8f01-50d2af15cdb5.png)
