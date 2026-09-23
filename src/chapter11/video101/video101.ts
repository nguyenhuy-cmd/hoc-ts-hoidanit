export{}
// tuple là một loại mảng đặc biệt có độ dài cố định và thứ tự kiểu dữ liệu của từng phần tử được xác định trước. 

type TStudent = [string, number?];// Dùng ? để báo rằng có thể dùng hoặc không
const nameStudent: TStudent = ["Huy", 23];
const nameStudent1: TStudent = ["Huy"];
