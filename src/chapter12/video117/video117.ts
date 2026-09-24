/* Kế thừa trong TS: nó cho phép một lớp con có thể kế thừa các thuộc tính và phương thức của
lớp cha.*/
export{}
class Cat {
    name: string;
    private age_: number;

    constructor(name: string, age_: number){
        this.name = name;
        this.age_ = age;
    }
    
    // Setter: để gán giá trị
    set age(value: number){// kiểm soát việc ghi/sửa của private
        this.age_ = value;
    }

    // Getter: để lấy giá trị
    get age(){// kiểm soát việc đọc của private
        return this.age_;
    }

    makeSound(){
        console.log(`meo meo meo `);
    }
}

const myCat = new Cat("mèo", 1);
const myCat2 = myCat.age;// get
myCat.age = 2;

class catCon extends Cat{
    color: string | undefined;

    makeSound(){
        super.makeSound();// Dùng để gọi 2 phương thức giống nhau của cả con và cha
        console.log(`mé mé mé `);
    }
}
const myCat3 = new catCon("mèo con", 2);
myCat3.makeSound();

// 1. Đâu là cha đâu là con: 