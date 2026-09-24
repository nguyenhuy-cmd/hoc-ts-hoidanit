/* Tính trừu tượng là khả năng ẩn đi các chi tiết triển khai phức tạp bên trong và 
chỉ hiển thị ra những tính năng cốt lõi, cần thiết cho người dùng bên ngoài(Tính trừu tượng
là 1 lớp không thể khởi tạo trực tiếp, chỉ đc kế thừa bởi các lớp con)*/

export{}
abstract class Animal {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    abstract makeSound(): void;

    test(){
        console.log(`Do a test`);
    }
}
class Dog extends Animal{
    makeSound(): void {
        console.log(`Gâu gâu`);
    }
}
const myDog = new Dog("Cho");
myDog.test();
myDog.makeSound();
/* Nếu quan tâm đến tất cả các thuộc tính của class(vd: name: string) thì nên chọn abstract còn nếu chỉ 
quan tâm đến hành động thì dùng (vd như makeSound()) thì nên dùng dùng interface*/ 
// Và abstract chỉ quan hệ được 1-1
// Chúng ta nên ưu tiên interface trước nhé 