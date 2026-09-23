"use strict";
// Enum/Literal type dùng để giới hạn giá trị của một biến trong một tập hợp cố định;
const otherUser = "USER";
/*2.Enums là một cấu trúc dữ liệu cho phép gom nhóm một tập hợp các hằng số có tên gọi rõ ràng lại
với nhau, sử dụng từ khóa enum.*/
var roleEnum;
(function (roleEnum) {
    roleEnum[roleEnum["USER"] = 0] = "USER";
    roleEnum[roleEnum["ADMIN"] = 1] = "ADMIN";
    roleEnum[roleEnum["SUPERADMIN"] = 2] = "SUPERADMIN"; //2
})(roleEnum || (roleEnum = {}));
const myRole = roleEnum.ADMIN;
console.log(`>>>Check enum: ${myRole}`);
// Cách để chuyển Enum thành string
var roleEnums;
(function (roleEnums) {
    roleEnums["USER"] = "user";
    roleEnums["ADMIN"] = "admin";
})(roleEnums || (roleEnums = {}));
const myRoles = roleEnums.ADMIN;
console.log(`Check enums: ${myRoles}`);
