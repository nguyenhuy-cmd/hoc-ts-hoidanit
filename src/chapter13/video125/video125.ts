/* Generic Function(hàm generic)(<T>): hàm có thể hoạt động với nhiều kiểu dữ liệu khác nhau
mà vẫn luôn đảm bảo an toàn kiểu*/
export{}

function testNumber(value: number) {
    return value;
}
function testString(value: string){
    return value; 
}
function testGeniric<T>(value: T){
    return value
}
const a = testGeniric<string>(`Hello`);
const b = testGeniric<number>(5);

function getFirstElementInArray<T>(arr: T[]){
    return arr[0]
}