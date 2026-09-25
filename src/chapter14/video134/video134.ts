/*Tạo module trong TS: một file TS đc coi là module khi trong file có sử dụng:
+ export(Xuất ra ngoài
+ import(nhập từ file khác vào)*/
export{}
const sum = (a: number, b: number) => {
    return a + b;
}
const huy = "Huy"

export{ sum, huy }