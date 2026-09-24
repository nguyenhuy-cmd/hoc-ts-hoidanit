"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = null;
name = "Huy";
let age = undefined;
age = 25;
const printName = (myName) => {
    myName?.toUpperCase(); //  Chuyển thường thành in hoa
    console.log(`Tên là ${myName}`);
};
