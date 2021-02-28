# Project 10

## TODO List

## Point

- [x] Vanilla JS로 동적 요소를 생성하는 과정을 이해합니다.

- [x] createElement() 사용법을 이해합니다.

### Solution

**동적 요소 생성**

- createElement(): 지정한 tagName의 HTML 요소를 만들어 반환합니다.

```js
let element = document.createElement(tagName[, options]);
```

동적 요소 class 부여

- setAttribute(): 지정된 요소의 속성 값을 설정합니다. 속성이 이미 있으면 값이 업데이트됩니다. 그렇지 않으면 지정된 이름과 값으로 새 속성이 추가됩니다.

```js
Element.setAttribute(name, value)
```

**Event**

리스트안에 있는 모든 버튼과 내용에 이벤트 적용을 구현 해야합니다.

```js
// Bad
const deleteBtn = document.querySelectorAll("button")
deleteBtn.forEach((item) = {
  item.addEventListener("click", ()=>{
    //Delete list item...
  })
})
```

해당 방법은 모든 삭제하는 버튼에 각각 요소에 이벤트를 부여하는 방식으로 이벤트 부여가 만약 수만개인 경우 좋은 접근법이 아닙니다.

```js
// Good
const list = document.querySelector("ul") {
  ul.addEventListener("click",(event)=>{
    if(event.tartget.tagName == "BUTTON") {
      //Delete list item...
    }
  })
}
```

이 방식은 부모에게 이벤트를 적용하고 if문을 통해 이벤트를 발생해야 하는 요소를 정하는 방식입니다. 이를 통해 이벤트는 한 번만 부여되지만, 결과는 동일하게 모든 버튼에 이벤트를 적용할 수 있습니다.

**UUID**

삭제 버튼을 누르면 해당하는 리스트 요소를 제거 해야 합니다. 버튼에 이벤트는 클릭 시 모든 리스트가 삭제됩니다. 따라서, 버튼에 삭제해야 하는 고유한 리스트를 알려줘야 합니다.

```js
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
```

> UUID: [More wikipedia](https://ko.wikipedia.org/wiki/%EB%B2%94%EC%9A%A9_%EA%B3%A0%EC%9C%A0_%EC%8B%9D%EB%B3%84%EC%9E%90)

고유한 ID를 만들었다면, HTML요소에 ID를 적용 합니다.

**data-**

데이터 속성을 통해 HTML 요소에 추가 정보를 저장할 수 있도록 해줍니다.

```js
let id = uuidv4()
listItem.setAttribute("data-id", id)
```

> data-\*: [More MDN](https://developer.mozilla.org/ko/docs/Learn/HTML/Howto/Use_data_attributes)

## Result

![todolist](https://user-images.githubusercontent.com/68719427/109406009-fa95d980-79b8-11eb-95bd-24df6ede8b4f.gif)
