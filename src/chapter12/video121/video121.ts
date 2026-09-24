// Bài tập:
export{}
type Role = "student" | "teacher"
class User{
    name: string;
    private _email: string;

    constructor(name: string, email: string, protected role: Role){
        this.name = name;
        this._email = email;
        this.role = role;  
    }
        get email(){
            return this._email;
        }

        set email(value: string){
            this._email = value;
        }
        get info(){
            return this.name;
        }

        printUserInfo(){
            // Phương thức mặc định cho User, các class con sẽ ghi đè (override) nó
            console.log(`[User] Tên: ${this.name}, Vai trò: ${this.role}`);
        }
}
class Teacher extends User{
    course: string[];
    constructor(name: string, email: string, course: string[]){
        super(name, email, "teacher");
        this.course = course;
    }
    addCourse(courseName: string){
        this.course.push(courseName)
    }
    printUserInfo(){
        console.log(`[Teacher] ${this.name} - Courses Taught: ${this.course}`);
    }
}

class Student extends User{
    enrolledCourses: string[];

    constructor(name: string, email: string, enrolledCourses: string[], protected role: Role = "student"){
        super(name, email, "student");
        this.enrolledCourses = enrolledCourses;
        
    }
    enroll(courseName: string): void{
        this.enrolledCourses.push(courseName)
    }

    printUserInfo(){
        console.log(`[Student] ${this.name} - Enrolled: ${this.enrolledCourses}`);
        
    }
}
function printUserInfo(user: User){
    user.printUserInfo();
}

const hoidanit = new Student("Hoidanit", "hoidanit@email.com", []);
hoidanit.enroll("TypeScript Pro");

const eric = new Teacher("Eric", "eric@email.com", []);
eric.addCourse("React");

printUserInfo(hoidanit);
// Output: [Student] Hoidanit - Enrolled Courses: TypeScript Pro

printUserInfo(eric);
// Output: [Teacher] Eric - Courses Taught: React


