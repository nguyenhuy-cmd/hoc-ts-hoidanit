export{}

// function trong TS
export { }
function saidHi(name: string) {
    console.log("Said Hi", name);
}
saidHi("Huy");

// Tự động suy luận cho type
function sum(a: number, b: number){
    return a + b;
}
const mySum = sum(5, 7);
console.log(mySum);
