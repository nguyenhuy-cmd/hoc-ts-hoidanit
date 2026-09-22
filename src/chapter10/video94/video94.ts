// Object Types trong TS
export{}

const person: {
    name: string;
    age: number;
    address: string;
} = {
    name: "Huy",
    age: 25,
    address: "Hà nội"
}

const persons = (people: {
    name: string;
    age: number;
    address: string;
}) => {
    console.log(`Tên: ${people.name}, Tuổi: ${people.age}, Địa chỉ: ${people.address}`);
}

// Dùng dấu ? để có thể điền hoặc không
const student:{
    name: string;
    age: number;
    address?: string;
} = {
    name: "Huy",
    age: 23
}
