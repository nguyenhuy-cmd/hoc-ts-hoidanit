/* Tính đa hình trong TS: khả năng các đối tượng thuộc các class khác nhau có thể phản hồi 
cùng 1 thông điệp(gọi cùng 1 tên hàm )  theo những cách khác nhau*/ 
export{}
interface IAnimal {
    makeSound(): void;
}

class Dog implements IAnimal{
    makeSound(): void {
        console.log(`Gâu gâu`);
    }
}
class Cat implements IAnimal{
    makeSound(): void {
        console.log(`Meo meo`);
    }
}
const myDog = new Dog();
const myCat = new Cat();

const myAnimal: IAnimal[] = [myCat, myDog]// Chính là tính đa hình 

myAnimal.forEach((item, index) => {
    item.makeSound()// nó sẽ gọi ở lớp con
});

