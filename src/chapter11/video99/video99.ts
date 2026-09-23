// null và undefine trong TS
export{}
// null là kiểu dữ liệu đại diện cho việc cố tình để trống / không có giá trị.
// undefine là kiểu dữ liệu đại diện cho việc biến đã được khai báo nhưng chưa được gán bất kỳ giá trị nào.

type TName = string | null;

type TAge = number | undefined;
let name: TName = null;
name = "Huy"

let age: TAge = undefined;
age = 25;

const printName = (myName: string | null) => {
    myName?.toUpperCase();//  Chuyển thường thành in hoa
    console.log(`Tên là ${myName}`);
}