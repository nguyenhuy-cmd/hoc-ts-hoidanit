//Bài tập

type student = {
    id: number;
    name: string;
    email: string;
    isPremium: boolean;
    contact: string | number
}

const student1: student = {
    id: 1,
    name: "Huy",
    email: "huy@gmail.com",
    isPremium: true,
    contact: 355494014,
}
const student2: student = {
    id: 2,
    name: "Cường",
    email: "cuong@gmail.com",
    isPremium: true,
    contact: 355494015,
}

type khoaHoc = {
    courseId: number;
    title: string;
    price: number;
    students: {
        id: number;
        name: string
        age: number;
    };
}

const khoaHoc2: khoaHoc = {
    courseId: 1,
    title: "Khóa học 1",
    price: 10000,
    students: {
        id: 1,
        name: "Huy",
        age: 23
    }
}

