// Tính đóng gói trong hướng đối tượng(getter/setter)
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
