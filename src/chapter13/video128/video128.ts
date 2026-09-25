/*Generic Classes(lớp Generic): lớp trong Generic được định nghĩa với tham số kiểu, cho phép
bạn tạo các đối tượng với nhiều kiểu dữ liệu khác nhaumà không cần viết lại logic */
export{}
class MagicBox<T>{
    content: T;
    constructor(content: T){
        this.content = content;
    }
}
const a = new MagicBox<string>(`Hello`)
class NumberBox {
    content: number;

    constructor(content: number){
        this.content = content;
    }
}
class StringBox {
    content: string;

    constructor(content: string){
        this.content = content;
    }
}