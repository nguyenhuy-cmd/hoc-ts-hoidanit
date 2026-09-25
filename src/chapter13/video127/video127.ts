/*Generic type - Kiểu dữ liệu tổng quát: 1 tính năng trong TS cho phép bạn tạo ra kiểu dữ 
liệu linh hoạt và tái sử dụng, bằng cách sử dụng tham số kiểu thay vì gán cố định 1 kiểu 
cụ thể*/
export{}
type MyArrString = string[];
type MyArrNumber = number[];
type MyArray<T> = T[];
type MyObj<T> = {
    data: T;
    abc: T;
}

const a: MyArray<number> = [1,2,3,4,5];
const b: MyArray<string> = ["Hello", "Hi"];

const c: MyObj<string> = {
    data: "Hi",
    abc: "Ba"
}

