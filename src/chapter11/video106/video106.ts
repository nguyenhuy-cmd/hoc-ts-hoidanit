/* Type Assertions(ép kiểu type) là khẳng định kiểu / ép kiểu) trong TypeScript là cơ chế cho phép bạn nói với trình biên dịch rằng:
"Tôi hiểu rõ về kiểu của biến này hơn hệ thống kiểm tra kiểu, hãy coi biến này mang kiểu dữ liệu mà tôi chỉ định."*/
export{}
const btnElement = document.getElementById("myBtn");
const inputElement = document.getElementById("name") as HTMLInputElement; // ý là hãy bỏ đi phần check type đi nhé
// as ... là kiểu ép kiểu đó

btnElement?.addEventListener("click", () => {
    alert(inputElement.value);
});
