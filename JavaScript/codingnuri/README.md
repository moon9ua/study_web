# codingnuri 자바스크립트 자습서
[codingnuri 자바스크립트 자습서](https://codingnuri.com/javascript-tutorial/index.html)를 공부한 내용입니다.

### hello world
* JavaScript 코드는 다음과 같이 실행해볼 수 있다.
    * html 코드 내에 `<script>` 태그를 사이에 코딩.
    * 웹 브라우저의 검사 페이지에 콘솔에서 코딩.
```javascript
document.write('hello world!');

// 이렇게 주석처리!

/*
이렇게도
가능합니다!
*/
```

### 자료형
* 기본 자료형
    * 문자열
    * 숫자
    * 불린
* 복합 자료형
    * 객체
    * 배열
    * 함수
* 특수 자료형
    * null
    * undefined

### 문자열
* 문자열은 있지만 문자 자료형은 없다.
* 문자열 생성
    ```javascript
    var str1 = "111";
    var str2 = String("222");
    var str3 = new String("333");
    var str4 = str2.valueOf();

    console.log(typeof str1); // string
    console.log(typeof str2); // string
    console.log(typeof str3); // object
    console.log(typeof str4); // string
    ```
* `str.length`
* `str.charAt(int)`, `str[int]`
* `str.toUpperCase()`, `str.toLowerCase()`
* `str.indexOf(str)`, `str.indexOf(str, int)`, `str.lastIndexOf(str)`
* `str.substring(int, (int))`, `str.substr(int, (int))`

...

* https://codingnuri.com/javascript-tutorial/javascript-strings.html