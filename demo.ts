console.log("Hello TS");
//tsc demo.ts: biên dịch TS sang javaScript

// node demo.ts Chạy trực tiếp 1 file TS bằng Node.js

// npm init -y: Tạo ra file package.json - để quản lí package và script

// npm install --save-dev --save-exact typescript@5.8.3: cài đặt TS cục bộ

// npx tsc --init: Cấu hình TS: tsconfig.json

// Tại file .gitignore để không lưu phần node_modules vào github

// npx tsc:  dịch từ ts sang js

/*
Ý nghĩa của các file/folder trong dự án thực hành:   

package.json : thể hiện các thư viện cài đặt, cấu hình script để chạy dự án   

package-lock.json: cấu hình chi tiết version, mối quan hệ... của các thư viện cài đặt   

.gitignore: cấu hình các file/folder không đẩy lên git (remote repository)   

tsconfig.json: cấu hình cách dịch code từ typescript sang javascript   

node_modules: thư viện cài đặt trong dự án   

src: thư mục lưu code typescript   

dist: thư mục dịch code, chứa code javascript   

index.html: file html chạy dự án   

*/