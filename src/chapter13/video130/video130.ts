/*Generic Constructor(ràng buộc Generic):  ép người dùng chỉ có thể dùng những kiểu  mình 
cho dùng mà thôi */
export{}
function logLength<T extends {length: number}>(value: T): void{
    console.log(value.length);
}
logLength("Huy");
logLength([1,2,3]);
//logLength(123) sai vì 1 số không có length

// 2. Các rằng buộc hay sử dụng
//Ràng buoocj với Interface
interface IUser {
    id: number;
    name: string;
}
function testInterface<T extends IUser>(value: T){
    console.log(value);
}

testInterface({id: 1, name: "Huy"});
//testInterface({id: 1}); sai vì không đủ thuộc tính cuat interface

// Ràng buộc class
class Animal {
    move(){
        console.log(`Moving....`);
    }
}
class dog extends Animal{
    bard(){
        console.log(`Woof!`);
    }
}
function testClass<T extends Animal>(value: T){
    console.log(value);
}

const a = new dog();
const b = new Animal();
testClass(a);// Đúng
testClass(b);// Đúng

// Ràng buộc keyof
function getProperty<T, K extends keyof T>(obj: T, key: K){
    return obj[key];
}
const user = {user: "Huy", age: 23}
getProperty(user, "user")