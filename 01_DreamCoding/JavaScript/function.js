// function printhello()
// {
//     console.log('hello');
// }
// printhello();

// function print_msg(msg) {
//     console.log(msg);
// }
// print_msg("hello");

// function change_name(obj) {
//     obj.name = 'coder';
// }
// const gmoon = { name: 'gmoon' };
// change_name(gmoon);
// console.log(gmoon);

// function show_msg(msg, from = 'unknown') {
//     console.log(`${msg} by ${from}`);
// }
// show_msg('hi!');

// function print_all(...args) {
//     // for (let i = 0; i < args.length; i++)
//     //     console.log(args[i]);
    
//     // for (arg of args)
//     //     console.log(arg);

//     args.forEach((arg) => console.log(arg));
// }
// print_all('hello', 'world', '!!!');


// let g_msg = 'grobal';
// function print_msg() {
//     let msg = 'hello';
//     console.log(g_msg);
//     console.log(msg);
// }
// print_msg();
// // console.log(msg); // 에러


// function sum(a,b) {
//     return a + b;
// }
// const ret = sum(1,2);


// function upgrade(user) {
//     if (user.point > 10) {
//         // long logic...
//     }
// } // bad function

// function upgrade(user) {
//     if (user.point <= 10) {
//         return ;
//     }
//     // long logic...
// } // good function


// const print = function() { // 익명 함수.
//     console.log('print');
// }
// print();


// function ran(ans, yes, no) {
//     if (ans === 'love you') {
//         yes();
//     } else {
//         no();
//     }
// }

// // 익명 함수
// const yes = function () {
//     console.log('yes!');
// }

// // named 함수
// // 디버깅에 좋다.
// const no = function print() {
//     console.log('no!');
// }

// ran('wrong', yes, no);
// ran('love you', yes, no);


// const simple = () => console.log('simple print!');
// const add = (a, b) => a + b;
// simple();
// console.log(add(1, 2));


(function hello() {
    console.log('IIFE');
})();