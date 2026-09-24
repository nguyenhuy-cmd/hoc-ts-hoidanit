"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cat {
    constructor(name, age_) {
        this.name = name;
        this.age_ = age;
    }
    // Setter: để gán giá trị
    set age(value) {
        this.age_ = value;
    }
    // Getter: để lấy giá trị
    get age() {
        return this.age_;
    }
    makeSound() {
        console.log(`meo meo meo `);
    }
}
const myCat = new Cat("mèo", 1);
const myCat2 = myCat.age; // get
myCat.age = 2;
class catCon extends Cat {
    makeSound() {
        super.makeSound(); // Dùng để gọi 2 phương thức giống nhau của cả con và cha
        console.log(`mé mé mé `);
    }
}
const myCat3 = new catCon("mèo con", 2);
myCat3.makeSound();
// 1. Đâu là cha đâu là con: 
