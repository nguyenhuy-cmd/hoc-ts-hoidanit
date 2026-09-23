export{}
// Intersection Type là cho phép kết hợp nhiều kiểu type lại thành 1 kiểu mới;
type TUsername = string | number;  // Dùng union type => dùng dấu ngoặc
let userName: TUsername = "Huy";
userName = 123;

type TStudent = {
    id: number;
    name: string
}
type TCode = {
    address: string;
    language: string
}

// Dùng Intersection
type TProgram = TCode & TStudent;
const hoidanit: TProgram = {
    id: 1,
    name: "Huy",
    address: "Việt Nam",
    language: "Tiếng việt"
}   