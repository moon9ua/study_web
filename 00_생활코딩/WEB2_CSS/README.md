# WEB2 - CSS

### CSS 등장 배경
* HTML로는 웹 페이지를 꾸미는 데에 한계가 있기 때문.
    1. HTML 태그(ex. `h1`, `li`)는 대게 정보를 담고 있지만, 디자인 태그(ex. `<font>`)는 정보로서의 가치가 없다.
    2. 100개의 태그에 대해 한번에 디자인을 바꾸고 싶을 때, 디자인 태그를 사용할 경우 100번 입력해야 한다. (ex. a 태그의 색을 red로 바꾸고 싶으면, a 태그 내용마다 font 태그를 추가 및 수정해야 한다.)

### 주석 처리
```html
<!--
주석 처리 할 내용
-->
```

### CSS 용어 정리
```html
a {
    color: red;
}
```
* `a`: selector(선택자)
* `color: red;`: declaration(선언, 효과)
* `color`: property(속성)
* `red`: property value

### 태그를 사용한 CSS
```html
<head>
<title>WEB1 - Welcome</title>
<meta charset="utf-8">
<style>
    a {
    color:red;
    }
</style>
</head>

<!-- <h1><a href="index.html"><font color="red">WEB</font></a></h1>
<ol>
    <li><a href="1.html"><font color="red">HTML</font></a></li>
    <li><a href="2.html"><font color="red">CSS</font></a></li>
    <li><a href="3.html"><font color="red">JavaScript</font></a></li>
</ol> -->
```
* `<style>` 부분이 CSS이다. 모든 a 태그에 대해 스타일을 지정한다는 내용.
* 주석의 HTML과 같은 기능을 한다. 즉, CSS를 사용하면 font 태그를 4번 중복해서 사용할 필요가 없어진다. 또한 글의 내용에는 디자인에 관련된 내용이 아예 들어가지 않게 된다.

### 속성을 사용한 CSS
```html
<h1><a href="index.html">WEB</font></a></h1> 
<ol>
    <li><a href="1.html">HTML</font></a></li>
    <li><a href="2.html" style="color=green; text-decoration:underline">CSS</font></a></li>
    <li><a href="3.html">JavaScript</font></a></li>
</ol>
```
* CSS 항목만 밑줄과 함께 초록색으로 표시된다.
* 요약하자면, CSS는 style 태그와 style 속성을 사용한다. 내용은 세미콜론으로 구분한다.

### CSS 속성
* 글씨 크기를 키우고 싶다면? `css text size property` 등으로 검색해볼 수 있다.

### CSS 선택자
```html
  <style>
    h1 {
      font-size:50px;
      text-align:center;
    }
    #active {
      color: red;
    }
    a {
      color:black;
      text-decoration: none;
    }
    .saw {
      color: gray;
    }
  </style>
</head>
<body>
  <h1><a href="index.html">WEB</a></h1>
  <ol>
    <li><a href="1.html" class="saw">HTML</a></li>
    <li><a href="2.html" class="saw active" id="active">CSS</a></li>
    <li><a href="3.html" class="saw">JavaScript</a></li>
  </ol>
```
* 선택자 사이에는 우선순위가 있다.
    1. id 선택자 (`#active`) > 클래스 선택자 (`.saw`) > 태그 선택자 (`a`, `h1`)  
    2. 동일한 선택자라면, 마지막에 선언된 선택자가 적용.
    * 왜? id는 유일하게 선언 가능. 중복되지 않는 값이므로 우선시. 즉, 구체적인 요소의 우선순위가 높다.  
* `css selector`로 검색하면 다양한 자료가 나온다.

### 박스모델
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="uft-8">
        <title></title>
        <style>
            /* block level element */
            h1 {
                border-width: 5px;
                border-color: red;
                border-style: solid;
                /* display: inline; */
                /* 인라인처럼 바꿀 수 있다 */
            }

            /* inline element */
            a {
                border-width: 5px;
                border-color: red;
                border-style: solid;
            }

            /* h1, a {
                border:5px solid red;
            } */
            /* 이런 식으로 중복을 피할 수 있다. */
        </style>
    </head>
    <body>
        <h1>test</h1><a href="https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4:%EB%8C%80%EB%AC%B8">테스트</a>입니다!
    </body>
</html>
```
```html
<style>
    h1 {
        border: 5px solid red;
        padding: 20px;
        margin: 20px;
        display: block;
        width: 100px;
    }
</style>
```
* 웹 페이지에서 `우클릭-검사`를 누르면 css에 대한 내용도 나온다.

### 박스모델 만들어보기
```html
<style>
  h1 {
    font-size:50px;
    text-align:center;
    border-bottom: 1px solid gray;
    margin: 0;
    padding: 10px;
  }
  ol {
    border-right: 1px solid gray;
    width: 80px;
    margin: 0;
    padding: 20px;
  }
  body {
    margin: 0;
  }
</style>
```

### 그리드란?
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <style>
            div {
                border: 5px solid gray;
            }
            #grid {
                border: 5px solid pink;
                display: grid;
                /* grid-template-columns: 150px 1fr; */
                grid-template-columns: 1fr 5fr;
            }
        </style>
    </head>
    <body>
        <div id="grid">
            <div>NAVIGATION</div>
            <div>HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.</div>
        </div>
    </body>
</html>
```
* https://caniuse.com/

### 그리드 사용해보기
```css
#grid {
  display: grid;
  grid-template-columns: 150px 1fr;
}
#grid ol {
  padding-left: 33px;
}
#article {
  padding: 25px;
}
```

### 미디어쿼리란?
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        div{
            border: 5px solid green;
            font-size: 60px
        }
        @media(max-width:600px)
        {
            div{
                display: none;
            }
        }
    </style>
</head>
<body>
    <div>
        Responsive
    </div>
</body>
</html>
```
폭이 600px 이하가 되면 div가 사라지는 예제

### 반응형 웹
* 화면의 크기에 따라 달라지는 디자인
```css
@media(max-width:800px) {
  #grid {
    display: block;
  }
  ol {
    border-right: none;
  }
}
```

### .css 파일
```html
<head>
  <title>WEB1 - CSS</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="style.css">
</head>
```
긴 style 태그 대신 파일을 불러오도록 할 수 있다. 이렇게 하면, 여러 페이지에 적용된 스타일을 한번에 변경할 수 있다.
