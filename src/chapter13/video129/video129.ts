/*Generic Interface  là 1 interface có sử dụng tham số kiểu để giúp cấu trúc dữ liệu linh 
hoạt hơn - có thể đại diện cho nhiều kiểu dữ liệu khác nhau mà vẫn giữ sự an toàn về kiểu*/

export{}
interface IData<T> {
    data: T;
}
const a: IData<string> = {
    data: "Huy"
}

const b: IData<number> = {
    data: 1
}
//================================
interface IApi<T>{
    status: number;
    data: T;
}
interface IUser{
    id: number;
    name: string;
    email: string;
}
const fetchUser = async() => {
    const res = await fetch("http://localhost:8000/users");

    const dataApi = await res.json() as IUser[];// nói cho chúng ta biết data có dạng là IUser
    const result: IApi<IUser[]> = {
        status: 200,
        data: dataApi
    }
    result.data.map((item) => item.email)
}
