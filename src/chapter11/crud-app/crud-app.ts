// ==========================================
// CRUD Dashboard - TypeScript
// Kết nối với backend JSON Server tại http://localhost:3000
// Quản lý 3 resource: Users, Posts, Comments
//
// === KHÁC BIỆT VỚI PHIÊN BẢN JAVASCRIPT ===
// 1. Khai báo Interface/Type cho mỗi resource → an toàn kiểu dữ liệu
// 2. Tất cả hàm đều có kiểu tham số và kiểu trả về
// 3. DOM elements được ép kiểu (type assertion) → tránh lỗi null
// 4. Hàm apiCall sử dụng Generic <T> → tái sử dụng cho mọi kiểu dữ liệu
// ==========================================

// ==========================================
// 1. KHAI BÁO INTERFACES (Kiểu dữ liệu)
// ==========================================

// Interface mô tả cấu trúc của một User
// Mỗi user có id, name, email, age, address
interface IUser {
    id: number;
    name: string;
    email: string;
    age: number;
    address: string;
}

// Interface mô tả cấu trúc của một Post (Bài viết)
// userId là khóa ngoại liên kết tới User
interface IPost {
    id: number;
    title: string;
    content: string;
    userId: number;
}

// Interface mô tả cấu trúc của một Comment (Bình luận)
// postId là khóa ngoại liên kết tới Post
interface IComment {
    id: number;
    body: string;
    postId: number;
}

// Type alias cho tên tab - chỉ chấp nhận 3 giá trị
// Giúp TypeScript kiểm tra tại thời điểm biên dịch
type TabName = "users" | "posts" | "comments";

// Type alias cho loại toast notification
type ToastType = "success" | "error" | "info";

// Type alias cho hành động trong modal
type ModalAction = "add" | "edit" | "delete";

// ==========================================
// 2. CẤU HÌNH & BIẾN TOÀN CỤC
// ==========================================

// Địa chỉ API của backend JSON Server
const API_BASE: string = "http://localhost:3000";

// Tab hiện tại đang được chọn (kiểu TabName đảm bảo chỉ có 3 giá trị hợp lệ)
let currentTab: TabName = "users";

// Lưu trữ dữ liệu đã fetch - mỗi mảng có kiểu cụ thể
let allUsers: IUser[] = [];
let allPosts: IPost[] = [];
let allComments: IComment[] = [];

// Biến lưu id đang chỉnh sửa (null nếu đang thêm mới)
// number | null: có thể là số hoặc null
let editingId: number | null = null;

// ==========================================
// 3. HÀM GỌI API CHUNG VỚI GENERIC
// ==========================================

/**
 * Hàm gọi API tổng quát sử dụng Generic <T>
 *
 * GIẢI THÍCH GENERIC:
 * <T> là "kiểu tham số" - cho phép hàm hoạt động với nhiều kiểu dữ liệu khác nhau
 * Ví dụ: apiCall<IUser[]>("/users") → trả về Promise<IUser[]>
 *         apiCall<IPost>("/posts", "POST", data) → trả về Promise<IPost>
 *
 * @param endpoint - Đường dẫn API
 * @param method - Phương thức HTTP
 * @param body - Dữ liệu gửi đi (optional)
 * @returns Promise<T> - Promise trả về kiểu T
 */
const apiCall = async <T>(
    endpoint: string,
    method: string = "GET",
    body: object | null = null
): Promise<T> => {
    try {
        // Cấu hình request với kiểu RequestInit (kiểu có sẵn của TypeScript)
        const options: RequestInit = {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        // Nếu có body → chuyển sang JSON string
        if (body) {
            options.body = JSON.stringify(body);
        }

        // Gửi request - fetch trả về Promise<Response>
        const response: Response = await fetch(`${API_BASE}${endpoint}`, options);

        if (!response.ok) {
            throw new Error(`Lỗi API: ${response.status} ${response.statusText}`);
        }

        // Parse response → kiểu T (nhờ Generic)
        const data: T = await response.json();
        return data;
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);

        // Ép kiểu error sang Error để truy cập thuộc tính message
        const errorMessage = error instanceof Error ? error.message : "Lỗi không xác định";
        showToast(`❌ ${errorMessage}`, "error");
        throw error;
    }
};

// ==========================================
// 4. USERS CRUD - VỚI KIỂU DỮ LIỆU CỤ THỂ
// ==========================================

// Fetch tất cả users → trả về mảng IUser[]
const fetchUsers = async (): Promise<IUser[]> => {
    allUsers = await apiCall<IUser[]>("/users");
    return allUsers;
};

// Tạo user mới - tham số là Omit<IUser, "id"> (bỏ field id vì server tự tạo)
const createUser = async (userData: Omit<IUser, "id">): Promise<IUser> => {
    const newUser = await apiCall<IUser>("/users", "POST", userData);
    showToast("✅ Tạo user thành công!", "success");
    return newUser;
};

// Cập nhật user - cần id (number) và dữ liệu mới
const updateUser = async (id: number, userData: Omit<IUser, "id">): Promise<IUser> => {
    const updated = await apiCall<IUser>(`/users/${id}`, "PUT", userData);
    showToast("✅ Cập nhật user thành công!", "success");
    return updated;
};

// Xóa user theo id
const deleteUser = async (id: number): Promise<void> => {
    await apiCall<object>(`/users/${id}`, "DELETE");
    showToast("🗑️ Đã xóa user!", "success");
};

// ==========================================
// 5. POSTS CRUD
// ==========================================

const fetchPosts = async (): Promise<IPost[]> => {
    allPosts = await apiCall<IPost[]>("/posts");
    return allPosts;
};

const createPost = async (postData: Omit<IPost, "id">): Promise<IPost> => {
    const newPost = await apiCall<IPost>("/posts", "POST", postData);
    showToast("✅ Tạo bài viết thành công!", "success");
    return newPost;
};

const updatePost = async (id: number, postData: Omit<IPost, "id">): Promise<IPost> => {
    const updated = await apiCall<IPost>(`/posts/${id}`, "PUT", postData);
    showToast("✅ Cập nhật bài viết thành công!", "success");
    return updated;
};

const deletePost = async (id: number): Promise<void> => {
    await apiCall<object>(`/posts/${id}`, "DELETE");
    showToast("🗑️ Đã xóa bài viết!", "success");
};

// ==========================================
// 6. COMMENTS CRUD
// ==========================================

const fetchComments = async (): Promise<IComment[]> => {
    allComments = await apiCall<IComment[]>("/comments");
    return allComments;
};

const createComment = async (commentData: Omit<IComment, "id">): Promise<IComment> => {
    const newComment = await apiCall<IComment>("/comments", "POST", commentData);
    showToast("✅ Thêm bình luận thành công!", "success");
    return newComment;
};

const updateComment = async (id: number, commentData: Omit<IComment, "id">): Promise<IComment> => {
    const updated = await apiCall<IComment>(`/comments/${id}`, "PUT", commentData);
    showToast("✅ Cập nhật bình luận thành công!", "success");
    return updated;
};

const deleteComment = async (id: number): Promise<void> => {
    await apiCall<object>(`/comments/${id}`, "DELETE");
    showToast("🗑️ Đã xóa bình luận!", "success");
};

// ==========================================
// 7. RENDER FUNCTIONS
// ==========================================

/**
 * Render danh sách Users
 * Tham số users có kiểu IUser[] → TypeScript tự gợi ý các thuộc tính
 */
const renderUsers = (users: IUser[]): void => {
    // Ép kiểu HTMLElement → HTMLDivElement để truy cập innerHTML
    const container = document.getElementById("contentArea") as HTMLDivElement;

    if (!users || users.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">👥</div>
                <h3>Chưa có user nào</h3>
                <p>Nhấn "Thêm mới" để tạo user đầu tiên</p>
            </div>
        `;
        return;
    }

    let html: string = `
        <table class="data-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Email</th>
                    <th>Tuổi</th>
                    <th>Địa chỉ</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
    `;

    // forEach với kiểu rõ ràng: user là IUser, index là number
    users.forEach((user: IUser, index: number) => {
        const initial: string = user.name ? user.name.charAt(0).toUpperCase() : "?";
        const delay: number = index * 0.05;

        html += `
            <tr style="animation-delay: ${delay}s">
                <td><span class="tag tag-info">#${user.id}</span></td>
                <td>
                    <div class="user-name">
                        <div class="avatar">${initial}</div>
                        <span>${user.name}</span>
                    </div>
                </td>
                <td>${user.email}</td>
                <td>${user.age}</td>
                <td>${user.address}</td>
                <td>
                    <div class="actions">
                        <button class="btn-action btn-edit" data-id="${user.id}" data-action="edit" title="Sửa">✏️</button>
                        <button class="btn-action btn-delete" data-id="${user.id}" data-action="delete" title="Xóa">🗑️</button>
                    </div>
                </td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
    attachActionListeners();
};

/**
 * Render danh sách Posts
 * Sử dụng Array.find() để tìm tên tác giả từ allUsers
 */
const renderPosts = (posts: IPost[]): void => {
    const container = document.getElementById("contentArea") as HTMLDivElement;

    if (!posts || posts.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📝</div>
                <h3>Chưa có bài viết nào</h3>
                <p>Nhấn "Thêm mới" để tạo bài viết đầu tiên</p>
            </div>
        `;
        return;
    }

    let html: string = `
        <table class="data-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tiêu đề</th>
                    <th>Nội dung</th>
                    <th>Tác giả</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
    `;

    posts.forEach((post: IPost, index: number) => {
        // find trả về IUser | undefined → cần kiểm tra null
        const author: IUser | undefined = allUsers.find((u: IUser) => u.id === post.userId);
        const authorName: string = author ? author.name : "Không rõ";

        const shortContent: string = post.content && post.content.length > 60
            ? post.content.substring(0, 60) + "..."
            : post.content;

        const delay: number = index * 0.05;

        html += `
            <tr style="animation-delay: ${delay}s">
                <td><span class="tag tag-info">#${post.id}</span></td>
                <td><strong>${post.title}</strong></td>
                <td class="text-truncate">${shortContent}</td>
                <td><span class="tag tag-accent">👤 ${authorName}</span></td>
                <td>
                    <div class="actions">
                        <button class="btn-action btn-edit" data-id="${post.id}" data-action="edit" title="Sửa">✏️</button>
                        <button class="btn-action btn-delete" data-id="${post.id}" data-action="delete" title="Xóa">🗑️</button>
                    </div>
                </td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
    attachActionListeners();
};

/**
 * Render danh sách Comments
 */
const renderComments = (comments: IComment[]): void => {
    const container = document.getElementById("contentArea") as HTMLDivElement;

    if (!comments || comments.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">💬</div>
                <h3>Chưa có bình luận nào</h3>
                <p>Nhấn "Thêm mới" để tạo bình luận đầu tiên</p>
            </div>
        `;
        return;
    }

    let html: string = `
        <table class="data-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nội dung</th>
                    <th>Bài viết</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
    `;

    comments.forEach((comment: IComment, index: number) => {
        // Tìm bài viết liên kết - trả về IPost | undefined
        const post: IPost | undefined = allPosts.find((p: IPost) => p.id === comment.postId);
        const postTitle: string = post ? post.title : "Không rõ";

        const delay: number = index * 0.05;

        html += `
            <tr style="animation-delay: ${delay}s">
                <td><span class="tag tag-info">#${comment.id}</span></td>
                <td>${comment.body}</td>
                <td><span class="tag tag-accent">📝 ${postTitle}</span></td>
                <td>
                    <div class="actions">
                        <button class="btn-action btn-edit" data-id="${comment.id}" data-action="edit" title="Sửa">✏️</button>
                        <button class="btn-action btn-delete" data-id="${comment.id}" data-action="delete" title="Xóa">🗑️</button>
                    </div>
                </td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
    attachActionListeners();
};

// ==========================================
// 8. STATS UPDATE
// ==========================================

const updateStats = (): void => {
    /**
     * Hàm animate đếm số - kiểu tham số rõ ràng
     */
    const animateCount = (elementId: string, target: number): void => {
        const el = document.getElementById(elementId) as HTMLHeadingElement;
        const duration: number = 600;
        const start: number = parseInt(el.textContent || "0") || 0;
        const startTime: number = performance.now();

        const step = (currentTime: number): void => {
            const elapsed: number = currentTime - startTime;
            const progress: number = Math.min(elapsed / duration, 1);
            const easeOut: number = 1 - Math.pow(1 - progress, 3);
            const current: number = Math.round(start + (target - start) * easeOut);

            el.textContent = current.toString();

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };

    animateCount("statUsers", allUsers.length);
    animateCount("statPosts", allPosts.length);
    animateCount("statComments", allComments.length);
};

// ==========================================
// 9. TAB NAVIGATION
// ==========================================

const switchTab = (tab: TabName): void => {
    currentTab = tab;

    // Xóa class active khỏi tất cả tab
    document.querySelectorAll(".tab-btn").forEach((btn: Element) => {
        btn.classList.remove("active");
    });

    // Thêm active cho tab đang chọn
    const activeTab = document.querySelector(`[data-tab="${tab}"]`) as HTMLButtonElement;
    if (activeTab) {
        activeTab.classList.add("active");
    }

    // Record<TabName, string>: đối tượng với key là TabName, value là string
    const titles: Record<TabName, string> = {
        users: "👥 Quản lý Users",
        posts: "📝 Quản lý Posts",
        comments: "💬 Quản lý Comments"
    };

    const titleEl = document.getElementById("contentTitle") as HTMLHeadingElement;
    titleEl.textContent = titles[tab];

    // Render dữ liệu tương ứng
    switch (tab) {
        case "users":
            renderUsers(allUsers);
            break;
        case "posts":
            renderPosts(allPosts);
            break;
        case "comments":
            renderComments(allComments);
            break;
    }
};

// ==========================================
// 10. MODAL MANAGEMENT
// ==========================================

/**
 * Mở modal - sử dụng union type cho action
 * data có thể là IUser, IPost, IComment hoặc null
 */
const openModal = (action: ModalAction, data: IUser | IPost | IComment | null = null): void => {
    const modal = document.getElementById("modal") as HTMLDivElement;
    const modalTitle = document.getElementById("modalTitle") as HTMLHeadingElement;
    const modalBody = document.getElementById("modalBody") as HTMLDivElement;
    const modalFooter = document.getElementById("modalFooter") as HTMLDivElement;

    editingId = data ? data.id : null;

    if (action === "delete") {
        // === Xác nhận xóa ===
        modalTitle.textContent = "⚠️ Xác nhận xóa";
        modalBody.innerHTML = `
            <div class="confirm-content">
                <div class="confirm-icon">⚠️</div>
                <h4>Bạn có chắc chắn muốn xóa?</h4>
                <p>Hành động này không thể hoàn tác. Dữ liệu sẽ bị xóa vĩnh viễn.</p>
            </div>
        `;
        modalFooter.innerHTML = `
            <button class="btn-cancel" id="btnCancel">Hủy</button>
            <button class="btn-save btn-danger" id="btnConfirmDelete">Xóa</button>
        `;

        const confirmBtn = document.getElementById("btnConfirmDelete") as HTMLButtonElement;
        confirmBtn.addEventListener("click", async (): Promise<void> => {
            if (editingId !== null) {
                await handleDelete(editingId);
            }
            closeModal();
        });

    } else {
        // === Thêm mới / Chỉnh sửa ===
        const isEdit: boolean = action === "edit";
        modalTitle.textContent = isEdit ? "✏️ Chỉnh sửa" : "＋ Thêm mới";

        let formHtml: string = "";

        switch (currentTab) {
            case "users": {
                // Ép kiểu data sang IUser khi tab là users
                const userData = data as IUser | null;
                formHtml = `
                    <div class="form-group">
                        <label for="inputName">Tên</label>
                        <input type="text" id="inputName" placeholder="Nhập tên..." value="${isEdit && userData ? userData.name : ""}">
                    </div>
                    <div class="form-group">
                        <label for="inputEmail">Email</label>
                        <input type="email" id="inputEmail" placeholder="Nhập email..." value="${isEdit && userData ? userData.email : ""}">
                    </div>
                    <div class="form-group">
                        <label for="inputAge">Tuổi</label>
                        <input type="number" id="inputAge" placeholder="Nhập tuổi..." value="${isEdit && userData ? userData.age : ""}">
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Địa chỉ</label>
                        <input type="text" id="inputAddress" placeholder="Nhập địa chỉ..." value="${isEdit && userData ? userData.address : ""}">
                    </div>
                `;
                break;
            }

            case "posts": {
                const postData = data as IPost | null;
                // map trả về string[] → join thành chuỗi HTML
                const userOptions: string = allUsers.map((u: IUser): string =>
                    `<option value="${u.id}" ${isEdit && postData && postData.userId === u.id ? "selected" : ""}>${u.name}</option>`
                ).join("");

                formHtml = `
                    <div class="form-group">
                        <label for="inputTitle">Tiêu đề</label>
                        <input type="text" id="inputTitle" placeholder="Nhập tiêu đề..." value="${isEdit && postData ? postData.title : ""}">
                    </div>
                    <div class="form-group">
                        <label for="inputContent">Nội dung</label>
                        <textarea id="inputContent" placeholder="Nhập nội dung...">${isEdit && postData ? postData.content : ""}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="inputUserId">Tác giả</label>
                        <select id="inputUserId">
                            <option value="">-- Chọn tác giả --</option>
                            ${userOptions}
                        </select>
                    </div>
                `;
                break;
            }

            case "comments": {
                const commentData = data as IComment | null;
                const postOptions: string = allPosts.map((p: IPost): string =>
                    `<option value="${p.id}" ${isEdit && commentData && commentData.postId === p.id ? "selected" : ""}>${p.title}</option>`
                ).join("");

                formHtml = `
                    <div class="form-group">
                        <label for="inputBody">Nội dung bình luận</label>
                        <textarea id="inputBody" placeholder="Nhập bình luận...">${isEdit && commentData ? commentData.body : ""}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="inputPostId">Bài viết</label>
                        <select id="inputPostId">
                            <option value="">-- Chọn bài viết --</option>
                            ${postOptions}
                        </select>
                    </div>
                `;
                break;
            }
        }

        modalBody.innerHTML = formHtml;
        modalFooter.innerHTML = `
            <button class="btn-cancel" id="btnCancel">Hủy</button>
            <button class="btn-save" id="btnSave">Lưu</button>
        `;

        const saveBtn = document.getElementById("btnSave") as HTMLButtonElement;
        saveBtn.addEventListener("click", (): void => {
            handleSave();
        });
    }

    const cancelBtn = document.getElementById("btnCancel") as HTMLButtonElement;
    cancelBtn.addEventListener("click", closeModal);

    modal.classList.add("show");
};

const closeModal = (): void => {
    const modal = document.getElementById("modal") as HTMLDivElement;
    modal.classList.remove("show");
    editingId = null;
};

// ==========================================
// 11. HANDLE SAVE
// ==========================================

const handleSave = async (): Promise<void> => {
    try {
        switch (currentTab) {
            case "users": {
                // Ép kiểu DOM elements → HTMLInputElement để truy cập .value
                const nameInput = document.getElementById("inputName") as HTMLInputElement;
                const emailInput = document.getElementById("inputEmail") as HTMLInputElement;
                const ageInput = document.getElementById("inputAge") as HTMLInputElement;
                const addressInput = document.getElementById("inputAddress") as HTMLInputElement;

                const name: string = nameInput.value.trim();
                const email: string = emailInput.value.trim();
                const age: number = parseInt(ageInput.value) || 0;
                const address: string = addressInput.value.trim();

                if (!name || !email) {
                    showToast("⚠️ Vui lòng nhập tên và email!", "error");
                    return;
                }

                // Omit<IUser, "id">: kiểu IUser nhưng bỏ field id
                const userData: Omit<IUser, "id"> = { name, email, age, address };

                if (editingId !== null) {
                    await updateUser(editingId, userData);
                } else {
                    await createUser(userData);
                }

                await fetchUsers();
                renderUsers(allUsers);
                break;
            }

            case "posts": {
                const titleInput = document.getElementById("inputTitle") as HTMLInputElement;
                const contentInput = document.getElementById("inputContent") as HTMLTextAreaElement;
                const userIdInput = document.getElementById("inputUserId") as HTMLSelectElement;

                const title: string = titleInput.value.trim();
                const content: string = contentInput.value.trim();
                const userId: number = parseInt(userIdInput.value) || 0;

                if (!title || !content) {
                    showToast("⚠️ Vui lòng nhập tiêu đề và nội dung!", "error");
                    return;
                }

                const postData: Omit<IPost, "id"> = { title, content, userId };

                if (editingId !== null) {
                    await updatePost(editingId, postData);
                } else {
                    await createPost(postData);
                }

                await fetchPosts();
                renderPosts(allPosts);
                break;
            }

            case "comments": {
                const bodyInput = document.getElementById("inputBody") as HTMLTextAreaElement;
                const postIdInput = document.getElementById("inputPostId") as HTMLSelectElement;

                const body: string = bodyInput.value.trim();
                const postId: number = parseInt(postIdInput.value) || 0;

                if (!body) {
                    showToast("⚠️ Vui lòng nhập nội dung bình luận!", "error");
                    return;
                }

                const commentData: Omit<IComment, "id"> = { body, postId };

                if (editingId !== null) {
                    await updateComment(editingId, commentData);
                } else {
                    await createComment(commentData);
                }

                await fetchComments();
                renderComments(allComments);
                break;
            }
        }

        closeModal();
        updateStats();
    } catch (error) {
        console.error("Lỗi khi lưu:", error);
    }
};

// ==========================================
// 12. HANDLE DELETE
// ==========================================

const handleDelete = async (id: number): Promise<void> => {
    try {
        switch (currentTab) {
            case "users":
                await deleteUser(id);
                await fetchUsers();
                renderUsers(allUsers);
                break;
            case "posts":
                await deletePost(id);
                await fetchPosts();
                renderPosts(allPosts);
                break;
            case "comments":
                await deleteComment(id);
                await fetchComments();
                renderComments(allComments);
                break;
        }
        updateStats();
    } catch (error) {
        console.error("Lỗi khi xóa:", error);
    }
};

// ==========================================
// 13. ACTION LISTENERS
// ==========================================

const attachActionListeners = (): void => {
    // querySelectorAll trả về NodeListOf<Element>
    const actionBtns: NodeListOf<Element> = document.querySelectorAll(".btn-action");

    actionBtns.forEach((btn: Element): void => {
        btn.addEventListener("click", (): void => {
            // getAttribute trả về string | null → cần kiểm tra
            const idStr: string | null = btn.getAttribute("data-id");
            const action: string | null = btn.getAttribute("data-action");

            if (!idStr || !action) return;

            const id: number = parseInt(idStr);

            // Tìm item data tương ứng
            let itemData: IUser | IPost | IComment | undefined;

            switch (currentTab) {
                case "users":
                    itemData = allUsers.find((u: IUser) => u.id === id);
                    break;
                case "posts":
                    itemData = allPosts.find((p: IPost) => p.id === id);
                    break;
                case "comments":
                    itemData = allComments.find((c: IComment) => c.id === id);
                    break;
            }

            if (!itemData) return;

            if (action === "edit") {
                openModal("edit", itemData);
            } else if (action === "delete") {
                openModal("delete", itemData);
            }
        });
    });
};

// ==========================================
// 14. TOAST NOTIFICATIONS
// ==========================================

const showToast = (message: string, type: ToastType = "info"): void => {
    const container = document.getElementById("toastContainer") as HTMLDivElement;

    const toast: HTMLDivElement = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = message;

    container.appendChild(toast);

    // setTimeout: tự động ẩn sau 3 giây
    setTimeout((): void => {
        toast.classList.add("fadeOut");
        setTimeout((): void => toast.remove(), 400);
    }, 3000);
};

// ==========================================
// 15. KHỞI TẠO ỨNG DỤNG
// ==========================================

const initApp = async (): Promise<void> => {
    try {
        // Promise.all<T[]>: chạy song song nhiều Promise
        await Promise.all([
            fetchUsers(),
            fetchPosts(),
            fetchComments()
        ]);

        updateStats();
        switchTab("users");
        showToast("🎉 Kết nối server thành công!", "success");

    } catch (error) {
        const container = document.getElementById("contentArea") as HTMLDivElement;
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🔌</div>
                <h3>Không thể kết nối server</h3>
                <p>Hãy chắc chắn backend JSON Server đang chạy tại <strong>${API_BASE}</strong></p>
                <p style="margin-top: 8px; font-size: 0.85rem;">
                    Chạy lệnh: <code>cd backend-json-server && npm start</code>
                </p>
            </div>
        `;
    }
};

// ==========================================
// 16. GẮN SỰ KIỆN
// ==========================================

document.addEventListener("DOMContentLoaded", (): void => {

    // Chuyển tab
    document.querySelectorAll(".tab-btn").forEach((btn: Element): void => {
        btn.addEventListener("click", (): void => {
            const tab = btn.getAttribute("data-tab") as TabName;
            if (tab) switchTab(tab);
        });
    });

    // Click stat card
    document.querySelectorAll(".stat-card").forEach((card: Element): void => {
        card.addEventListener("click", (): void => {
            const tab = card.getAttribute("data-stat") as TabName;
            if (tab) switchTab(tab);
        });
    });

    // Nút thêm mới
    const addBtn = document.getElementById("btnAdd") as HTMLButtonElement;
    addBtn.addEventListener("click", (): void => {
        openModal("add");
    });

    // Đóng modal
    const closeBtn = document.getElementById("btnModalClose") as HTMLButtonElement;
    closeBtn.addEventListener("click", closeModal);

    // Click ngoài modal
    const modalOverlay = document.getElementById("modal") as HTMLDivElement;
    modalOverlay.addEventListener("click", (e: Event): void => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Phím Escape
    document.addEventListener("keydown", (e: KeyboardEvent): void => {
        if (e.key === "Escape") {
            closeModal();
        }
    });

    // Khởi tạo ứng dụng
    initApp();
});
