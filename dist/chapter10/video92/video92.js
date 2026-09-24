"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function saidHi(name) {
    console.log("Said Hi", name);
}
saidHi("Huy");
// Tự động suy luận cho type
function sum(a, b) {
    return a + b;
}
const mySum = sum(5, 7);
console.log(mySum);
