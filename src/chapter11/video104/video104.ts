// Phân biệt Type Aliases và Interface
export{} 
/*
1. Tiêu chí: Cách khai báo
- type (Type Alias): type User = { name: string; age: number }
- interface (Giao diện): interface User { name: string; age: number }

2. Tiêu chí: Dùng cho kiểu object
- type (Type Alias): Có (hỗ trợ)✅
- interface (Giao diện): Có (hỗ trợ)✅

3. Tiêu chí: Kết hợp kiểu (Union / Intersection)
- type (Type Alias): Hỗ trợ✅
  type Status = "success" | "error"
  hoặc type A = B & C
- interface (Giao diện): Không hỗ trợ❌

4. Tiêu chí: Hỗ trợ primitive / tuple
- type (Type Alias): Dùng cho mọi kiểu: string, number[], [number, string]...
- interface (Giao diện): Chỉ dùng cho object

5. Tiêu chí: Kế thừa / mở rộng kiểu khác
- type (Type Alias): Dùng & để kết hợp nhiều kiểu (intersection)
- interface (Giao diện): Dùng extends để kế thừa

6. Tiêu chí: Declaration Merging
- type (Type Alias): ❌Không hỗ trợ – khai báo lại sẽ lỗi
- interface (Giao diện):✅ Hỗ trợ – có thể định nghĩa cùng tên nhiều lần và tự động gộp lại

7. Tiêu chí: Dễ mở rộng sau này
- type (Type Alias): Khó mở rộng (phải tạo lại type)
- interface (Giao diện): Có thể mở rộng bằng cách extends hoặc merge nhiều lần
*/