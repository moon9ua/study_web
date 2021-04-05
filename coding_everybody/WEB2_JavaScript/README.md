# WEB2 - JavaScript

### 등장 배경
* 동적으로 사용자와 상호작용하는 웹 페이지를 만들기 위해.
* HTML로 웹 페이지를 만든 후, JavaScript를 이용해 사용자와 상호작용하게 만든다.

### HTML과 JavaScript의 차이?
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>JavaScript</h1>
    <script>
      document.write(1+1);
    </script>
    <h1>html</h1>
    1+1
  </body>
</html>
```
* html은 1+1과 같은 것을 할 수 없지만, JavaScript는 가능.
* JavaScript 코드는 `<script>` 태그로 실행할 수 있다.

### 이벤트
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <input type="button" value="hi" onclick="alert('hello1')">
    <input type="text" onchange="alert('hello2')">
    <input type="text" onkeydown="alert('key down!')">
  </body>
</html>
```
* `onclick`, `onchange`, `onkeydown`과 같은 것을 이벤트라고 한다.
* `javascript keydown event attribute` 검색

### 데이터 타입
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
    * `"str".length`
    * `"str".toUpperCase`
    * `"str".indexOf()`
    * `"str".trim`

### 변수와 대입 연산자
* variable vs constant

### 웹브라우저 제어