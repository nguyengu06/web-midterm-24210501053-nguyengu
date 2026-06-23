// [Tiêu chí 9] Lấy mảng học viên từ LocalStorage, nếu trống thì tạo mảng rỗng []
let studentList = JSON.parse(localStorage.getItem("game_students")) || [];

// Nhận diện các thẻ HTML qua ID trên cây DOM
const cardContainer = document.getElementById("card-container");
const inputSearch = document.getElementById("input-search");
const selectCategory = document.getElementById("select-category");
const selectLevel = document.getElementById("select-level");
const formElement = document.getElementById("registration-form");
const tableBodyElement = document.getElementById("table-body");
const selectCourseForm = document.getElementById("student-course");

// [Tiêu chí 3] Hàm duyệt mảng dữ liệu để in danh sách Card ra màn hình
function renderEventCards(dataList) {
    if (!cardContainer) return; // Nếu trang hiện tại không có vùng chứa card thì dừng lại ngay
    
    cardContainer.innerHTML = ""; // Xóa sạch dữ liệu cũ trước khi vẽ lại
    
    if (dataList.length === 0) {
        cardContainer.innerHTML = `<div class="col-12 text-center text-muted my-5"><p class="fs-5">❌ Không tìm thấy giải đấu nào phù hợp!</p></div>`;
        return;
    }

    dataList.forEach(item => {
        const cardHtml = `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card h-100 bg-secondary bg-opacity-25 text-light border-secondary event-card-hover">
                    <img src="${item.image}" class="card-img-top object-fit-cover" alt="${item.title}" style="height: 160px;">
                    <div class="card-body d-flex flex-column p-3">
                        <div class="d-flex justify-content-between mb-2">
                            <span class="badge bg-warning text-dark fw-bold">${item.category}</span>
                            <small class="text-info">${item.level}</small>
                        </div>
                        <h6 class="card-title fw-bold text-white flex-grow-1 lh-sm">${item.title}</h6>
                        <div class="d-flex justify-content-between align-items-center mt-3 pt-2 border-top border-secondary">
                            <span class="text-danger fw-bold fs-6">${item.price}</span>
                            <button class="btn btn-sm btn-outline-warning" onclick="handleOpenModal(${item.id})">Chi tiết</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        cardContainer.insertAdjacentHTML("beforeend", cardHtml);
    });
}

// [Tiêu chí 4 & 5] Hàm lọc kết hợp đồng thời (Tên + Thể loại + Cấp độ)
function applyMultiFilter() {
    if (!inputSearch || !selectCategory || !selectLevel) return;

    const searchWord = inputSearch.value.toLowerCase().trim();
    const chosenCategory = selectCategory.value;
    const chosenLevel = selectLevel.value;

    const filteredResult = EVENTS_DATA.filter(event => {
        const matchSearch = event.title.toLowerCase().includes(searchWord);
        const matchCategory = (chosenCategory === "all") || (event.category === chosenCategory);
        const matchLevel = (chosenLevel === "all") || (event.level === chosenLevel);
        return matchSearch && matchCategory && matchLevel;
    });

    renderEventCards(filteredResult);
}

// Gắn sự kiện lắng nghe người dùng nhập/chọn bộ lọc (Chỉ chạy khi thẻ đó tồn tại)
if (inputSearch) inputSearch.addEventListener("input", applyMultiFilter);
if (selectCategory) selectCategory.addEventListener("change", applyMultiFilter);
if (selectLevel) selectLevel.addEventListener("change", applyMultiFilter);

// [Tiêu chí 6] Hàm đổ dữ liệu chi tiết vào Modal Bootstrap
function handleOpenModal(id) {
    const selectedObj = EVENTS_DATA.find(e => e.id === id);
    if (!selectedObj) return;

    document.getElementById("modal-title").innerText = selectedObj.title;
    document.getElementById("modal-image").src = selectedObj.image;
    document.getElementById("modal-category").innerText = selectedObj.category;
    document.getElementById("modal-level").innerText = selectedObj.level;
    document.getElementById("modal-price").innerText = selectedObj.price;
    document.getElementById("modal-description").innerText = selectedObj.description;

    const bootstrapModalInstance = new bootstrap.Modal(document.getElementById('detailModal'));
    bootstrapModalInstance.show();
}

// Tự động nạp tên 8 giải đấu vào thẻ Select của Form đăng ký
function loadCourseOptionsToForm() {
    if (!selectCourseForm) return;
    selectCourseForm.innerHTML = `<option value="">-- Chọn giải đấu muốn tham gia --</option>`;
    EVENTS_DATA.forEach(event => {
        selectCourseForm.insertAdjacentHTML("beforeend", `<option value="${event.title}">${event.title}</option>`);
    });
}

// [Tiêu chí 8] Kiểm tra lỗi dữ liệu Form khi người dùng nhấn nút Gửi (Validation)
if (formElement) {
    formElement.addEventListener("submit", function (e) {
        e.preventDefault(); // Ngăn hành động tải lại trang của trình duyệt
        
        const inputNameNode = document.getElementById("student-name");
        const inputEmailNode = document.getElementById("student-email");
        let isValid = true;

        // Xóa sạch viền đỏ cảnh báo cũ
        [inputNameNode, inputEmailNode, selectCourseForm].forEach(node => {
            if (node) node.classList.remove("is-invalid");
        });

        // 1. Kiểm tra trống trường Tên
        if (inputNameNode && inputNameNode.value.trim() === "") {
            inputNameNode.classList.add("is-invalid");
            document.getElementById("error-name").innerText = "Tên game thủ không được bỏ trống.";
            isValid = false;
        }

        // 2. Kiểm tra trống và đúng cấu trúc định dạng Email bằng Regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (inputEmailNode && inputEmailNode.value.trim() === "") {
            inputEmailNode.classList.add("is-invalid");
            document.getElementById("error-email").innerText = "Email bắt buộc phải điền đầy đủ.";
            isValid = false;
        } else if (inputEmailNode && !emailPattern.test(inputEmailNode.value.trim())) {
            inputEmailNode.classList.add("is-invalid");
            document.getElementById("error-email").innerText = "Cấu trúc Email sai quy định (Ví dụ: tên@gmail.com).";
            isValid = false;
        }

        // 3. Kiểm tra xem đã chọn giải đấu chưa
        if (selectCourseForm && selectCourseForm.value === "") {
            selectCourseForm.classList.add("is-invalid");
            document.getElementById("error-course").innerText = "Bạn chưa chọn giải đấu thi đấu.";
            isValid = false;
        }

        // [Tiêu chí 9] Nếu toàn bộ dữ liệu điền đúng -> Lưu vào mảng và đẩy xuống LocalStorage
        if (isValid) {
            const studentPayload = {
                id: "PLAYER_" + Date.now(), // Tạo ID duy nhất bằng dấu mốc thời gian thực
                fullName: inputNameNode.value.trim(),
                emailAddress: inputEmailNode.value.trim(),
                courseTitle: selectCourseForm.value
            };

            studentList.push(studentPayload);
            localStorage.setItem("game_students", JSON.stringify(studentList)); // Chuyển mảng thành chuỗi JSON để lưu trữ lâu dài
            
            formElement.reset(); // Làm sạch các ô nhập dữ liệu trên giao diện
            alert("Ghi danh thi đấu thành công! Hệ thống đã ghi nhận thông tin.");
            
            if (tableBodyElement) renderStudentTable(); // Nếu có bảng hiển thị cùng trang thì vẽ lại luôn
        }
    });
}

// [Tiêu chí 10] Hàm lấy dữ liệu từ LocalStorage đổ ra cấu trúc Bảng quản lý lớp
function renderStudentTable() {
    if (!tableBodyElement) return;
    tableBodyElement.innerHTML = "";
    
    if (studentList.length === 0) {
        tableBodyElement.innerHTML = `<tr><td colspan="4" class="text-center text-muted py-3 small">Chưa có tuyển thủ nào đăng ký danh sách.</td></tr>`;
        return;
    }

    studentList.forEach((student, index) => {
        const rowHtml = `
            <tr class="text-light">
                <td class="fw-bold text-warning">${index + 1}</td>
                <td>
                    <div class="fw-bold text-white">${student.fullName}</div>
                    <small class="text-muted" style="font-size: 0.75rem;">${student.emailAddress}</small>
                </td>
                <td><span class="badge bg-dark border border-secondary text-warning">${student.courseTitle}</span></td>
                <td class="text-center">
                    <button class="btn btn-sm btn-outline-danger px-2 py-0 fs-6" onclick="handleDeleteStudent('${student.id}')">&times; Hủy</button>
                </td>
            </tr>
        `;
        tableBodyElement.insertAdjacentHTML("beforeend", rowHtml);
    });
}

// [Tiêu chí 10] Chức năng xóa bản ghi tuyển thủ ra khỏi danh sách
function handleDeleteStudent(uniqueId) {
    if (confirm("Hành động này sẽ hủy đăng ký tham gia giải đấu. Bạn có chắc không?")) {
        studentList = studentList.filter(item => item.id !== uniqueId); // Lọc bỏ đối tượng có ID vừa bấm xóa
        localStorage.setItem("game_students", JSON.stringify(studentList)); // Lưu đè mảng mới xuống LocalStorage
        renderStudentTable(); // Gọi hàm vẽ lại bảng giao diện mới nhất
    }
}

// Chạy khởi phát đồng bộ toàn bộ hệ thống khi cấu trúc file HTML được nạp xong
window.addEventListener("DOMContentLoaded", () => {
    renderEventCards(EVENTS_DATA);
    loadCourseOptionsToForm();
    renderStudentTable();
});