//Bài tập

type TStudent = {
    id: number;
    name: string;
    email: string;
    isPremium: boolean;
    contact: string | number
}

const student1: TStudent = {
    id: 1,
    name: "Huy",
    email: "huy@gmail.com",
    isPremium: true,
    contact: 355494014,
}
const student2: TStudent = {
    id: 2,
    name: "Cường",
    email: "cuong@gmail.com",
    isPremium: true,
    contact: 355494015,
}

type TCourse = {
    courseId: number;
    title: string;
    price: number;
    students: TStudent[];  // Tái sử dụng kiểu TStudent
}

const khoaHoc: TCourse = {
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
}

function registerStudentToCourse(student: TStudent, course: TCourse){
    course.students.push(student);
    return course;
}

function printCourseInfo(course: TCourse) {
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
const updateCourse = registerStudentToCourse(student1,khoaHoc)
printCourseInfo(updateCourse);