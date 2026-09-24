"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Lion {
    constructor() {
        // Miêu tả đặc điểm
        this.name = "Sư tử";
        this.color = "Vàng";
    }
    // Miêu tả hành vi
    sleep() {
        console.log(`Sư từ kêy`, this.name);
    }
}
// Miêu tả cụ thể = object
// clone: new 
const sutu1 = new Lion(); // clone
sutu1.color = "Vàng nâu";
sutu1.name = "Sư tử 1";
sutu1.sleep();
console.log(`-------------------------------`);
const sutu2 = new Lion();
sutu2.name = "Sư tử 2";
sutu2.color = "Trắng";
sutu2.sleep();
