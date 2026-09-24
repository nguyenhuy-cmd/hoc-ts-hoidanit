// Sử dụng TS với fetch API
export{}
interface IUser{
    id: number,
    email: string,
    name: string
}
const fetchUsers = async() => {
    const res = await fetch("http://localhost:8000/users");
    //Cách 1 để ép kiểu:const data = await res.json() as IUser[];
    const data: IUser[] = await res.json();// Cách 2blogs
    console.log(data);
}
fetchUsers();