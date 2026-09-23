const user = {
    name: "Huy",
    age: 23,
    address: "Việt Nam",
    language: "Hà Nội",
    sayHi: () => console.log(`Hi`)
};
//user.language = "EL"; bị lỗi vì ở trên có readonly
const user2 = {
    name: "Huy",
    age: 23,
    language: "Hồ Chí Minh",
    sayHi: () => console.log(`Ba`)
};
const myDog = {
    name: "Buggy",
    breed: "Chó cảnh"
};
export {};
