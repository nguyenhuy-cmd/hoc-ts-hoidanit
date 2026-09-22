export{}
// Type Aliases là cách bạn tự đặt một cái tên mới cho bất kỳ kiểu dữ liệu nào, sử dụng từ khóa type
type TStuden = {
    id: number;
    name: string
}

const student2: TStuden = {
    id: 123,
    name: "Huy",
}

const printfInfo = (st: TStuden) => {
    console.log(st.id, st.name);
}
printfInfo(student2);