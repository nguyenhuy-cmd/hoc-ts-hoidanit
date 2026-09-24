// Interface và Implements trong TS
/*super() trong TypeScript (và JavaScript) được dùng trong kế thừa (inheritance) 
giữa các class, có nghĩa là: gọi lại constructor của class cha. */
/*Interface là 1 công cụ dùng để định nghĩa khuôn mẫu cho 1 đối tượng obj */
//class extends thì kế thừa đc 1 còn interface thì kế thừa đc nhiều 
export{}
interface IAnimal{
    makeSound(): void;
}
interface IFlyable{
    doFly(): void;
}
class Bird implements IAnimal, IFlyable{
    name: string | undefined;
    makeSound(){
        console.log(`Chíp chíp`);
    }
    doFly(){
        console.log(`Chim bay bằng cánh`);
        
    }
}
class Person {
    gender: string | undefined;
}
class NhanVien{
    id: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
}

class LapTrinhVien extends NhanVien{
    skill: string;

    constructor(skill: string, name: string, id: number){
        super(id, name);
        this.skill = skill;

    }
}
const myBird = new Bird();
myBird.makeSound();
myBird.doFly();