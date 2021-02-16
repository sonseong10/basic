# Project 05-1

## Digital Clock

디지털 시계 만들기

### Point

- [x] 오전(AM)·오후(PM)을 나타내야 합니다.
- [x] 만약 '5분'이면 '05분'으로 앞에 '0'을 표시해야 합니다.

### solution

1. 오전(AM)·오후(PM)을 나타내는 방법.

```js
let hrs = date.getHours()
let period = undefined

hrs >= 12 ? (period = "PM") : (period = "AM")
```

2. 일의 자리 숫자 앞에 '0' 추가 하기.

```js
let hrs = date.getHours()
let mins = date.getMinutes()
let secs = date.getSeconds()

hrs = hrs < 10 ? "0" + hrs : hrs
mins = mins < 10 ? "0" + mins : mins
secs = secs < 10 ? "0" + secs : secs
```

## Result

![DigtalClock](https://user-images.githubusercontent.com/68719427/108031766-c2b39b80-7074-11eb-9bd5-550f652a4eaf.gif)
