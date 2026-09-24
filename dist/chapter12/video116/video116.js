"use strict";
// Tính đóng gói trong hướng đối tượng(getter/setter)
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
