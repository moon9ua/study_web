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
* 무료(student developer pack 한정)이고 유명한 github pages를 사용해보자.
* https://opentutorials.org/course/3084/18891
* 무료 정적 웹 호스팅
    * https://bitballoon.com
    * http://neocities.org
    * Azure Blob
    * Google Cloud Storage
    * Amazon S3

### 웹 서버
* apache를 사용해보자.
* https://opentutorials.org/course/3084/18894
* 맥에는 기본적으로 apache가 설치되어 있다.
    * 터미널에서 `sudo apachectl start` 명령어를 통해 실행.
    * `localhost`나 `localhost:80`으로 접속한다. (기본적으로 80을 쓰기로 약속했으므로, localhost는 localhost:80과 같다.)
    * 웹 페이지에 (아무 것도 하지 않았을 시) "It works!" 문구가 뜬다.
    * 터미널에서 `sudo apachectl stop` 명령어를 통해 중지.
    * 주소로 다시 접속해보면 사이트에 연결할 수 없다고 뜬다.
    * https://blog.acronym.co.kr/531
* bitnami를 이용해서 웹 서버를 설치할 수 있다.
    * 맥의 기본 apache와 구별을 위해, `localhost:8080` 포트를 사용한다. `127.0.0.1:8080`도 같은 의미. (127.0.0.1은 내 컴퓨터를 의미하는 주소)
    * mampstack/apache2/htdocs/ 디렉토리에 내 프로젝트 파일을 넣으면, `localhost:8080/index.html`을 통해 내 웹 페이지에 접속할 수 있다.
* 내 IPv4 주소(192.168.0.X)로 접속해도 같다. 127.0.0.1은 모든 컴퓨터에서 자기 자신을 의미하는 주소이고, IPv4 주소는 컴퓨터마다 다른 듯.
* 스마트폰(다른 컴퓨터)의 웹 브라우저에서 `192.168.0.X:8080/index.html`로 접속하면, 나의 프로젝트 웹 페이지가 보인다. (같은 네트워크에 접속 중이어야 함!)

### 동영상 삽입, 댓글, 채팅, 방문자 분석기
* [ ] https://opentutorials.org/course/3084/18598
