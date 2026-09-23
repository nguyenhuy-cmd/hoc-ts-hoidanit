// Enum/Literal type dùng để giới hạn giá trị của một biến trong một tập hợp cố định;

/*1.Sử dụng Literal type: là cách dùng chính xác một giá trị cụ thể (như một chuỗi "GET", 
một con số 404, hoặc boolean true) để làm kiểu dữ liệu, thay vì dùng kiểu tổng quát như string, number hay boolean.
*/
type TRole = "USER" | "SUPERADMIN";
const otherUser: TRole = "USER";

/*2.Enums là một cấu trúc dữ liệu cho phép gom nhóm một tập hợp các hằng số có tên gọi rõ ràng lại 
với nhau, sử dụng từ khóa enum.*/
enum roleEnum {
    USER,// 0
    ADMIN,//1
    SUPERADMIN//2
}
const myRole: roleEnum = roleEnum.ADMIN;
console.log(`>>>Check enum: ${myRole}`);
// Cách để chuyển Enum thành string
enum roleEnums{
    USER = "user",
    ADMIN = "admin"
} 
const myRoles: roleEnums = roleEnums.ADMIN;
console.log(`Check enums: ${myRoles}`);
