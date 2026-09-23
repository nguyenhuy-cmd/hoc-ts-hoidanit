
/* Interface là 1 hợp đồng dùng để mô tả cấu trúc của một đối tượng. Nó định nghĩa những thuộc
tính và phương thức mà 1 object cần phải có, nhưng không chứa logic thực thi.*/
export{}
interface IPerson{
    name: string;
    age: number;
    address?: string// dùng dấu ? thể hiện có thuộc tính hoặc không có cũng đc 
    readonly language: string// readonly nghĩa là chỉ được đọc chứ không đc sửa
    sayHi: () => void// Định nghĩa 1 function bên trong interface
}
const user: IPerson = {
    name: "Huy",
    age: 23,
    address: "Việt Nam",
    language: "Hà Nội",
    sayHi: ()=> console.log(`Hi`)
    
}
//user.language = "EL"; bị lỗi vì ở trên có readonly
const user2: IPerson = {
    name: "Huy",
    age: 23,
    language: "Hồ Chí Minh",
    sayHi:() => console.log(`Ba`)
}

// Có thể dùng kế thừa
interface Animai {
    name: string
}
interface Dog extends Animai{
    breed: string
}
const myDog: Dog = {
    name: "Buggy",
    breed: "Chó cảnh"
} 