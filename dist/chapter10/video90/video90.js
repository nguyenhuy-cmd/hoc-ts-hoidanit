// Kiểu dữ liệu any và unknown
// any nghĩa là bỏ qua phần check type
let name = "Huy";
name = 23;
/* unknown nghĩa là là một kiểu dữ liệu đại diện cho bất kỳ giá trị nào,
  tương tự như any, nhưng an toàn hơn rất nhiều (type-safe), yêu cầu phải
  kiểm tra type trước khi thao tác với biến số đấy*/
let khongbiet = "Huy";
//Muốn sử dụng được phải kiểm tra
if (typeof (khongbiet) === "string") {
    khongbiet.toUpperCase();
}
export {};
