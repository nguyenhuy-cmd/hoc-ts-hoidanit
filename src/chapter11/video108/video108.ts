export { }
interface IBlog {
    id: number,
    title: string,
    author: string,
    content: string
}
const fetchBlog = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    //Cách 1 để ép kiểu:const data = await res.json() as IUser[];
    const data: IBlog[] = await res.json();// Cách 2blogs
    console.log(data);
    const tbody = document.querySelector("#blogs tbody");
    if (tbody) {
        data.forEach((data) => {
            tbody.innerHTML += `
      <tr>
        <td>${data.id}</td>
        <td>${data.title}</td>
        <td>${data.author}</td>
        <td>${data.content}</td>
      </tr>
    `;
        });
    }
}

fetchBlog();