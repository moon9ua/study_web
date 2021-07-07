// 1. Use strict
'use strict';

// 2. Variable
// let (ES6에 추가)
// let name = 'gmoon';
// console.log(name);
// name = 'hello';
// console.log(name);

// var은 block scope가 없다.
// var은 hoisting 되므로 사용하지 않는다.
// var hoisting: 어디에 선언했건, 선언을 맨 위로 끌어 올려주는 것.
// age = 4;
// var age;

// 3. Constants
// const day = 7;
// const maxnum = 5;

// 4. Variable types
// const count = 17;
// const size = 17.1;
// console.log(`value: ${count}, type: ${typeof count}`);
// console.log(`value: ${size}, type: ${typeof size}`);

// const symbol1 = Symbol('id');
// const symbol2 = Symbol('id');
// console.log(symbol1 == symbol2); // false
// const gsymbol1 = Symbol.for('id');
// const gsymbol2 = Symbol.for('id');
// console.log(gsymbol1 == gsymbol2); // true
// console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// const ellie = { name: 'ellie', age: 20 };
// ellie.age = 21;

// 5. dynamic typing
// let text = 'hello';
// console.log(`value: ${text}, type: ${typeof text}`);
// text = 1;
// console.log(`value: ${text}, type: ${typeof text}`);
// text = '7' + 5;
// console.log(`value: ${text}, type: ${typeof text}`);
// text = '8' / '2';
// console.log(`value: ${text}, type: ${typeof text}`);
