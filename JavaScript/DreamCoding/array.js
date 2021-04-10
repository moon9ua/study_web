const arr1 = new Array();
const arr2 = [1, 2];



const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[5]); // undefined



// for
console.clear();
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for of
for (let fruit of fruits) {
    console.log(fruit);
}

// forEach
// fruits.forEach(function(fruit, index) {
//     console.log(fruit, index);
// });



console.clear();

fruits.push('peach', 'mango');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift('berry', 'lemon');
console.log(fruits);

fruits.shift();
console.log(fruits);
// shift, unshift는 매우 느림!

// fruits.splice(1); // 개수 지정하지 않으면 뒤를 모두 지움.
fruits.splice(1, 1); // 시작 인덱스, 몇 개 지울지.
console.log(fruits);

fruits.splice(2, 1, 'melon', 'rice');
console.log(fruits);

const fruit2 = ['hello', 'world'];
const newarr = fruits.concat(fruit2);
console.log(newarr);



console.clear();
console.log(fruits);
console.log(fruits.indexOf('melon'));
console.log(fruits.indexOf('hello'));
console.log(fruits.includes('melon'));
console.log(fruits.includes('hello'));

console.clear();
fruits.push('banana');
console.log(fruits);
console.log(fruits.indexOf('banana'));
console.log(fruits.lastIndexOf('banana'));

