# 생활코딩 > WEB > WEB1 - HTML & Internet

### hello world! 웹 페이지 작성하고 열기
* hello.html 확장자 파일 작성
    ```
    hello world
    ```
* 웹 브라우저에서 `ctrl+o` 또는 `cmd+o`로 hello.html 열기

### 태그
* `<strong>hello</strong>`의 strong과 같은 것을 **태그**라고 부른다. 중첩해서 사용할 수도 있다.
* `<html>`: head와 body를 감싸는 태그
    * `<head>`: 본문을 설명하는 태그
        * `<title>`: 웹 페이지의 제목 지정. 탭에 표시되는 것이 이것.
        * `<meta charset="utf-8">`
    * `<body>`: 본문
        * `<strong>`: 글씨 굵게
        * `<u>`: 밑줄
        * `<h1>`: 헤더. 1~6까지 있다.
        * `<p>`: 단락을 구분 (css를 통해 간격을 조정할 수 있다.)
        * `<br>`: 줄바꿈. `<p>`가 이를 대체하여 주로 쓰인다. 닫는 태그가 없다.
        * `<img src="...">`: 이미지 삽입. src와 같은 것을 **속성(attribute)**이라 한다.
        * `<ul>`, `<ol>`, `<li>`: li는 목차 생성. ul은 목차 구분. ol은 숫자형 목차 구분. 서로 부모 자식 관계이다.
        * `<a href="..." target="..." title="...">`: 링크
* `<!doctype html>`: 문서의 시작에 html로 만들어졌음을 알린다.

### 페이지 소스보기
* 웹 브라우저에서 오른클릭 후 '페이지 소스보기' 선택
* 모르는 태그는 "HTML ~ tag"로 검색해보자.

### 많이 사용되는 태그
* https://advancedwebranking.com/html/ 웹 사이트에 사용되는 태그의 통계
* 주로 25개 정도의 태그를 사용한다.

### 부모 태그와 자식 태그
* 다음과 같은 태그를 부모 태그, 자식 태그라고 한다.
    ```
    <parent>
        <child></child>
    <parent>
    ```

### 최초의 웹 페이지
* http://info.cern.ch/
* 1960년대 등장

### 서버와 클라이언트
* https://opentutorials.org/course/3084/18890

### 웹 호스팅
* 무료이고 유명한 github의 pages를 이용해보자.
