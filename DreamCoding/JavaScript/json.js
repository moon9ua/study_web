let json = JSON.stringify(true); // 기본 자료형인 불리안도 가능.
console.log(json);

json = JSON.stringify(['apple', 'banana']); // 배열
console.log(json); // ''가 아닌 ""로.

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birth: new Date(),
    symbol: Symbol('id'),
    jump: () => {
        console.log(`${rabbit.name} can jump!`); // 그냥 name으로 하면 에러.
    },
}
json = JSON.stringify(rabbit);
console.log(json); // Symbol, 함수는 제외된다.

json = JSON.stringify(rabbit, ['name', 'size']);
console.log(json); // 이름만.

json = JSON.stringify(rabbit, (key, value) => { // 콜백함수 이용.
    return key === 'name' ? 'gmoon' : value;
});
console.log(json); // 이름 변환.



console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    return key === 'birth' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); // 에러! obj에는 함수가 없다!

console.log(rabbit.birth); // Date 객체
console.log(rabbit.birth.getDate()); // 메서드 사용 가능.

console.log(obj.birth); // Date 객체
console.log(obj.birth.getDate()); // 메서드 사용 가능.