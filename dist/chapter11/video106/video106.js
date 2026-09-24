"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const btnElement = document.getElementById("myBtn");
const inputElement = document.getElementById("name"); // ý là hãy bỏ đi phần check type đi nhé
// as ... là kiểu ép kiểu đó
btnElement?.addEventListener("click", () => {
    alert(inputElement.value);
});
