// Sử dụng nhiều Type Variable
function merge<T,U>(a: T,b: U){
    return [a,b];
}

const a = merge<number, number>(1, 2);
const b = merge<string, number>("Huy", 2);
const c = merge<number, boolean>(1, true);