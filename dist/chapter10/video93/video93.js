"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Union Types là cách cho phép một biến, tham số hoặc thuộc tính có thể mang một trong nhiều kiểu dữ liệu khác nhau.
let tenVaTuoi = 23;
tenVaTuoi = "Huy";
function tuDo(a) {
    if (typeof (a) === "string") {
        a.toLocaleUpperCase;
    }
    console.log(`My user ${a}`);
}
tuDo("Huy");
tuDo(24);
