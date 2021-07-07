const name = 'gmoon';
const age = 4; // 기본 자료형은 값이 하나씩 들어감.

const obj1 = {}; // object literal
const obj2 = new Object();

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const gmoon = { name:'gmoon', age:4 };
print(gmoon);

gmoon.hasJob = true; // 속성 추가가 가능.
console.log(gmoon.hasJob); // 출력: true

delete gmoon.hasJob; // 속성 삭제도 가능.
console.log(gmoon.hasJob); // 출력: undefined



console.log(gmoon.name);
console.log(gmoon['name']); // computed property. 주의할 점은, key는 string 타입으로!
gmoon['hasJob'] = true;
console.log(gmoon.hasJob);

/*
* 코딩할 때는 .을 쓰고, 원하는 key의 값을 받을 때는 후자를 씀.
*/
function printValue(obj, key) {
    console.log(obj.key); // 안됨!
    console.log(obj[key]);
}
printValue(gmoon, 'name');



const person1 = { name:'bob', age:2 };
const person2 = { name:'steve', age:3 };
const person3 = { name:'dave', age:4 };
const person4 = makePerson('gmoon', 30);

function makePerson(name, age) {
    return {
        // name: name,
        // age: age

        name,
        age, // 이렇게 써도 됨.
    }
}



console.log('name' in gmoon);



console.clear();
for (key in gmoon) {
    console.log(key);
}

const array = [1,2,4,5];
for (value of array) {
    console.log(value);
}
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// } // 이것을 줄인 것.



console.clear();
const user = { name:'gmoon', age:20 };
const user2 = user;
user2.name = 'coder';
console.log(user);

// 예전 방식
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);

console.clear();
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);