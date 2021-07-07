// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     speak() {
//         console.log(`${this.name}: hello!`);
//     }
// }
// const gmoon = new Person('gmoon', 20);
// console.log(gmoon);
// gmoon.speak();



// class User {
//     constructor(first, last, age) {
//         this.first = first;
//         this.last = last;
//         this.age = age;
//     }
//     get age() {
//         return this._age; // _를 안쓰면 call stack 초과!
//     }
//     set age(value) {
//         // if (value < 0) {
//         //     throw Error('age can not be negative!');
//         // }
//         this._age = value < 0 ? 0 : value;
//     }
// }
// const user1 = new User('Steve', 'Job', -1);
// console.log(user1);



// class Experiment {
//     public = 2;
//     #private = 0;
// }
// const ex = new Experiment();
// console.log(ex.public);
// console.log(ex.private);



// class Article {
//     static publisher = 'Dream Coding';
//     constructor(num) {
//         this.num = num;
//     }
//     static print_publisher() {
//         console.log(Article.publisher);
//     }
// }

// const ar1 = new Article(1);
// const ar2 = new Article(2);
// console.log(ar1.publisher); // undefined
// console.log(Article.publisher); // 출력됨. static은 class 자체에 정의.



class Shape {
    constructor(w, h, c) {
        this.w = w;
        this.h = h;
        this.c = c;
    }
    draw() {
        console.log(`drawing ${this.c} color of`);
    }
    getArea() {
        return (this.w * this.h);
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('A');
    }
    getArea() { // 오버라이딩
        return (this.w * this.h / 2);
    }
}

const rec = new Rectangle(20, 20, 'blue');
rec.draw();
console.log(rec.getArea());
const tri = new Triangle(20, 20, 'red');
tri.draw();
console.log(tri.getArea());

console.log(rec instanceof Rectangle);
console.log(tri instanceof Rectangle);
console.log(tri instanceof Shape);
console.log(tri instanceof Object);