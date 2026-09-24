// Class và Object trong TS
/*
Gồm:
+ Đặc điểm(thuộc tính)
+ Hành vi đặc trưng
*/
/*
- Khái niệm;
+ Class chính là "đối tượng tổng quát" của real-word được mô phỏng(là bản thiết kế , mô tả khái quát)
+ Object là các thực tế chi tiết của class đấy
*/
export{}

class Lion {
    // Miêu tả đặc điểm
    name: string = "Sư tử";
    color: string = "Vàng";

    // Miêu tả hành vi
        sleep(){
            console.log(`Sư từ kêy`, this.name);
        }

}
// Miêu tả cụ thể = object
// clone: new 
const sutu1 = new Lion();// clone
sutu1.color = "Vàng nâu";
sutu1.name = "Sư tử 1";
sutu1.sleep();
console.log(`-------------------------------`);
const sutu2 = new Lion();
sutu2.name = "Sư tử 2";
sutu2.color = "Trắng";
sutu2.sleep();
