/*Default Generic Type: cho phép bạn gán 1 kiểu mặc định cho tham số kiểu trong generic*/
export{}
function printValue<T = string>(value: T) {
    return value;
}

const a = printValue("Hello")

interface ITest<T = string | number>{
    data: T;
}
const b: ITest = {
    data: 123
}
const c: ITest = {
    data: "Hello"
}
