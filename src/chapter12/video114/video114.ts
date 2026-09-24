/* Constructor - hàm tạo là 1 phương thức đặc biệt trong class, được tự động gọi khi một
đối tượng mới được tạo ra từ class đó nói cách khác là để khởi tạo giá trị cho cái class,
khởi tạo giá trị cho cái thực thể của chính mình hay khởi tạo thông tin chi tiết cho 1 biến obj 
của chúng ta*/
class SinhVien {
    id: number;
    name: string;

    // Constructor(hàm tạo)
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
    sleep(){
        console.log(`Đi ngủ: ${this.name}`);
    }
}
const sv1 = new SinhVien(1,"Huy" );
console.log(`ID: ${sv1.id}, Tên: ${sv1.name}`);
