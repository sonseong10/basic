# Project06-1

## Calender - Mont

한달을 화면에 출력하기.

## Point

- [x] 금일 정보는 다른날과 다르게 표현 해야합니다.
- [x] 버튼 클릭시 다음달 · 이전달 이동 합니다.
- [x] 주말(토요일,일요일)은 색상변경을 합니다.

### Solution

1. 금일 날짜 스타일 변경

```css
.today {
  border-radius: 5px;
  background-color: #ffc92c;
  font-weight: 700;
  color: #000;
}
```

2. 달 이동

```js
//지난달 이동
document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1)
  renderCalendar()
})

//다음달 이동
document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1)
  renderCalendar()
})
```

### Result

![calender-month](https://user-images.githubusercontent.com/68719427/108040740-057b7080-7081-11eb-91de-ef14a4e9fe5b.gif)
