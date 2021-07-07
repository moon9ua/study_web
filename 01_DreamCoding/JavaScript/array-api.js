{
    const fruits = ['apple', 'banana', 'orange'];
    const ret = fruits.join(' '); // 기본값은 ','
    console.log(ret);
}

{
    const fruits = 'apple, banana, orange';
    const ret = fruits.split(',');
    console.log(ret);
}

{
    const arr = [1,2,3];
    const ret = arr.reverse();
    console.log(ret);
}

{
    const arr = [1,2,3,4,5];
    const ret = arr.splice(0, 2);
    console.log(arr); // [3,4,5]
    console.log(ret); // [1,2]
    // 원 배열도 변화하기 때문에, 원하는 답은 이게 아니다.
}

{
    const arr = [1,2,3,4,5];
    const ret = arr.slice(2);
    console.log(arr);
    console.log(ret);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 90),
];

{
    const ret = students.find(function(student, index) {
        return student.score === 90;
    });
    console.log(ret); // E는 리턴되지 않음.
}

{
    const ret = students.filter((student) => student.enrolled);
    console.log(ret);    
}

{
    const ret = students.map((student) => student.score);
    console.log(ret);
}

{
    console.clear();
    const ret = students.some((student) => student.score < 50);
    console.log(ret);
    const ret2 = !students.every((student) => student.score >= 50);
    console.log(ret2);
}

{
    const ret = students.reduce((prev, curr) => {
        // console.log('====');
        // console.log(prev);
        // console.log(curr);
        return prev + curr.score;
    }, 0);
    console.log(ret);
}

{
    const ret = students
                .map(student => student.score)
                .filter(score => score >= 50)
                .join();
    console.log(ret);
}

{
    const ret = students
                .map(student => student.score)
                .sort((a,b) => a-b)
                .join();
    console.log(ret);
}