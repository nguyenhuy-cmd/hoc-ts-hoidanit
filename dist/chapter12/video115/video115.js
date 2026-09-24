"use strict";
/* Access Modifiers-Giới hạn truy cập là 1 từ khóa dùng để kiểm soát hành vi truy cập đến
thuộc tính hoặc phương thức bên trong class*/
/*
Tác dụng:
+ Ẩn thông tin nội bộ
+ Bảo vệ dữ liệu
+ Kiểm soát cách đối tượng bị truy cập hoặc chỉnh sửa
*/
/*
- Các loại Access Modifiers :
+ public: mặc định, ai cx có thể truy cập: mọi nơi;
+ private: chỉ truy cập được bên trong class: bên trong class đó;
+ protected: truy cập được trong class và class con: class đó và class kế thừa;
*/
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    makeSound() {
        console.log(`Kêu......`);
    }
}
const cho = new Animal("cho", 1);
console.log(`Đây là con ${cho.name}`);
