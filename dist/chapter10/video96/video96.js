"use strict";
//Bài tập
const student1 = {
    id: 1,
    name: "Huy",
    email: "huy@gmail.com",
    isPremium: true,
    contact: 355494014,
};
const student2 = {
    id: 2,
    name: "Cường",
    email: "cuong@gmail.com",
    isPremium: true,
    contact: 355494015,
};
const khoaHoc = {
    courseId: 1,
    title: "Khóa học 1",
    price: 10000,
    students: [
        {
            id: 1,
            name: "Huy",
            email: "huy@gmail.com",
            isPremium: true,
            contact: 355494014,
        }
    ]
};
function registerStudentToCourse(student, course) {
    course.students.push(student);
    return course;
}
function printCourseInfo(course) {
    // In ra tên khóa học và số học viên đã đăng ký
    console.log(`Tên khóa học: ${course.title}`);
    console.log(`Số học viên đã đăng kí: ${course.students.length}`);
    // Nếu chưa có học viên → in "Chưa có học viên nào."
    if (course.students.length === 0) {
        console.log("Chưa có học viên nào.");
    }
    // Nếu có học viên → liệt kê tên từng học viên
    if (course.students.length > 0) {
        course.students.forEach((student) => {
            console.log(`- ${student.name}`);
        });
    }
}
const updateCourse = registerStudentToCourse(student1, khoaHoc);
printCourseInfo(updateCourse);
