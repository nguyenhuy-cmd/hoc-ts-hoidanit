"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Toán tử this nghĩa là tham chiếu tới thuộc tính, qua this bạn có thể tham chiếu cả thuộc tính lẫn phương thức
//Xây dựng Chung chung
class SinhVien {
    // Phương thức(hành vi)
    sleep() {
        console.log(`Đi ngủ:`, this.name);
    }
}
//obj(clone => chi tiết)
const sv1 = new SinhVien();
sv1.name = "Huy";
sv1.id = 1;
sv1.sleep();
console.log(`-----------------------`);
const sv2 = new SinhVien();
sv2.name = "Cường";
sv2.id = 2;
sv2.sleep();
