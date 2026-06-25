# AI Usage Report

## 1. Em có sử dụng AI không?
Có.

## 2. AI hỗ trợ phần nào?
Tư vấn chuyển đổi định hướng phong cách giao diện sang chủ đề E-Sport giải đấu (Gaming Dark Mode), hỗ trợ tạo mảng Mock Data gồm 8 sự kiện game trực quan và cung cấp giải thuật kiểm tra biến an toàn (`if check`) chống lỗi crash script trên cấu trúc trang đa tệp HTML độc lập.

## 3. Prompt đã sử dụng
• "Hãy viết một mảng gồm đúng 8 đối tượng giải đấu game e-sport có các trường id, title, category, level, price, image, description bằng JS."
• "Viết file xử lý JS liên kết chung cho nhiều trang sao cho khi sang các trang không chứa form hay bảng thì không bị báo lỗi đứng script."

## 4. Em đã chỉnh sửa gì sau khi AI sinh code?
Em đã thực hiện phân tách mã nguồn JavaScript thành hai tệp chuyên biệt (`data.js` và `main.js`), chuyển đổi toàn bộ tông màu Bootstrap mặc định sang dải màu tối đậm chất Gaming (`bg-dark`, `text-light`, `bg-black`), và căn chỉnh lại các đường dẫn URL hình ảnh trực tuyến để chống lỗi tuyệt đối trên môi trường GitHub Pages.

## 5. Phần nào em tự viết?
• Thiết lập khung layout và phân chia mã nguồn cho toàn bộ 4 file giao diện HTML độc lập (`index.html`, `courses.html`, `register.html`, `registrations.html`).
• Viết mã CSS tùy biến hiệu ứng hover phát sáng màu vàng neon cho các Card giải đấu trong file `style.css`.
• Tạo kho lưu trữ (Repository) trên nền tảng GitHub và kích hoạt public GitHub Pages thành công.

## 6. Em học được gì?
Nắm bắt kỹ năng thao tác và kiểm soát vòng đời nạp thẻ DOM trên mô hình website kiến trúc đa trang, làm chủ quy trình ép kiểu chuỗi JSON lưu trữ dữ liệu thông qua LocalStorage, và hiểu sâu cách phối hợp các class tiện ích có sẵn của Bootstrap để tạo giao diện responsive chuyên nghiệp.