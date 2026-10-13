# CraftLink — Bản trình chiếu (craftlink-presentation)

Đây là **bản sao độc lập** của đồ án CraftLink (môn CSE122 — Thương mại điện tử), phục vụ việc **demo và thuyết trình**. Mỗi trang mở được riêng lẻ bằng cách nhấp đúp vào file `.html`, không cần cài đặt gì thêm.

CraftLink là sàn thương mại điện tử cho đồ thủ công mỹ nghệ **tùy chỉnh theo yêu cầu**, nơi người mua duyệt sản phẩm, yêu thích, thêm vào giỏ, đặt hàng và gửi yêu cầu chỉnh sửa trực tiếp cho nghệ nhân.

## Bản này khác gì bản gốc?

| | Bản gốc (cse122-craftlink) | Bản trình chiếu (thư mục này) |
|---|---|---|
| Mục đích | Sản phẩm nộp bài | Demo từng trang khi thuyết trình |
| Liên kết giữa các trang | Chuyển trang bình thường | **Bị chặn** — hiện toast giải thích |
| Khóa localStorage | `craftlink_cart`, … | `craftlink_presentation_cart`, … (tách dữ liệu demo) |
| File thêm mới | — | `js/presentation.js` |

Ngoài 2 điểm trên, **mã HTML/CSS/JS của 8 trang giữ nguyên 100%** so với bản gốc.

## Công nghệ

- HTML5, CSS3, JavaScript thuần (ES5-style, không framework, không thư viện)
- Không backend, không máy chủ — dữ liệu demo nằm trong `js/data.js` và localStorage của trình duyệt

## Cấu trúc thư mục

```
craftlink-presentation/
├── index.html                  # P7  Danh sách sản phẩm (trang chính)
├── product-detail.html         # P8  Chi tiết sản phẩm
├── customize.html              # P9  Tùy biến sản phẩm + brief AI
├── artisan-suggestions.html    # P10 Gợi ý nghệ nhân
├── cart.html                   # P11 Giỏ hàng
├── favorites.html              # P12 Danh sách yêu thích
├── orders.html                 # Danh sách đơn hàng
├── order-details.html          # Chi tiết đơn hàng
├── css/                        # style.css dùng chung + 6 file CSS riêng theo trang
├── js/
│   ├── data.js                 # Dữ liệu mẫu 8 sản phẩm + nghệ nhân
│   ├── main.js                 # Toàn bộ logic tương tác (16 phần có chú thích)
│   └── presentation.js         # Chế độ trình chiếu (chặn liên kết chéo trang)
└── assets/images/              # 18 ảnh sản phẩm, nghệ nhân
```

## Cách mở demo

Nhấp đúp vào bất kỳ file `.html` nào (khuyến nghị Edge hoặc Chrome) — trang mở trực tiếp qua `file://`, không cần chạy server. Trang chính để bắt đầu là `index.html`.

## Chế độ trình chiếu (`js/presentation.js`)

Khi demo, mỗi trang là một màn trình chiếu độc lập, nên file này chặn 3 loại liên kết:

1. **Liên kết sang trang `.html` khác** → chặn chuyển trang, hiện toast: *"Liên kết sang trang khác đã tắt — bản trình chiếu demo từng trang độc lập."*
2. **Liên kết trỏ về chính trang đang mở** (logo, mục menu đang active) → không làm gì cả, tránh tải lại trang làm mất trạng thái demo.
3. **Liên kết `href="#"`** → vẫn do `main.js` xử lý như bản gốc (toast "Bản demo chưa hỗ trợ chức năng này").

Giao diện (header, menu, breadcrumb) **giữ nguyên hình dáng** — chỉ hành vi chuyển trang thay đổi.

## Hướng dẫn demo từng trang

### 1. `index.html` — Danh sách sản phẩm
Tìm kiếm (không dấu vẫn được), lọc theo danh mục / phong cách / thời gian thực hiện / mức giá (thanh trượt), sắp xếp (phổ biến, giá tăng, giá giảm, đánh giá), dòng tóm tắt bộ lọc, nút "Xóa bộ lọc".
*Kịch bản:* gõ "coc" → còn 1 kết quả → xóa tìm kiếm → kéo thanh giá xuống 250.000₫ → còn 5 sản phẩm → "Xóa bộ lọc" → đủ 8 sản phẩm → đổi sắp xếp "Giá: Tăng dần".

### 2. `product-detail.html` — Chi tiết sản phẩm
Thư viện ảnh (bấm ảnh nhỏ đổi ảnh lớn), tăng/giảm số lượng, thêm vào giỏ, nút tim yêu thích.
*Kịch bản:* đổi 2–3 ảnh → tăng số lượng lên 2 → "Thêm vào giỏ hàng" → bấm tim (đổi màu).

### 3. `customize.html` — Tùy biến sản phẩm
Điền mô tả yêu cầu (kèm ảnh tham chiếu nếu muốn) → bấm **"AI Brief Builder"** → trạng thái "AI đang phân tích yêu cầu…" ~1,2 giây (mô phỏng) → panel "Kết quả brief đề xuất bởi AI" với các nút **Sửa / Từ chối / Tạo lại / Lưu**.
*Kịch bản:* điền mô tả → tạo brief → "Từ chối" (panel ẩn + toast) → "Tạo lại" → "Lưu" (brief lưu vào localStorage, toast nói rõ bản demo chưa gửi máy chủ).

### 4. `artisan-suggestions.html` — Gợi ý nghệ nhân
Danh sách nghệ nhân được "AI" đề xuất. "Bỏ qua" ẩn thẻ; "Tạo lại" hiện lại tất cả (mô phỏng, chưa có máy chủ AI thật).

### 5. `cart.html` — Giỏ hàng
Tăng/giảm số lượng (tối đa 99), xóa sản phẩm, tự tính tạm tính + tổng; giỏ trống hiện lời nhắn riêng. Nút "Tiến hành đặt hàng" bị presentation.js chặn (demo độc lập từng trang).

### 6. `favorites.html` — Danh sách yêu thích
Lưới các sản phẩm đã bấm tim (đọc từ localStorage), nút "Bỏ yêu thích" gỡ từng sản phẩm; liên kết sang chi tiết/tùy biến bị presentation.js chặn; danh sách trống hiện lời nhắn riêng.

### 7. `orders.html` — Danh sách đơn hàng
Bảng 4 đơn mẫu, lọc theo tab trạng thái, tìm kiếm theo mã đơn/tên nghệ nhân, lọc thời gian; nút "Hủy" có hộp xác nhận rồi đổi trạng thái thành "Đã hủy" (chỉ trên bản demo).

### 8. `order-details.html` — Chi tiết đơn hàng
Xem thông tin đơn; ô "Yêu cầu chỉnh sửa" + nút "Gửi yêu cầu chỉnh sửa" **lưu nháp vào trình duyệt** và toast nói rõ *chưa gửi đến nghệ nhân* (chưa có backend). Mở lại trang còn thấy nháp cũ.

## localStorage — bộ nhớ trình duyệt, KHÔNG phải cơ sở dữ liệu

Dữ liệu (giỏ hàng, yêu thích, bản nháp) được lưu bằng `localStorage` — bộ nhớ của **chính trình duyệt trên máy này**. Không có gì được gửi đi đâu cả; xóa dữ liệu trình duyệt hoặc mở bằng trình duyệt khác sẽ mất hết. Các khóa đều có tiền tố riêng để không lẫn dữ liệu với bản gốc:

| Khóa | Lưu gì |
|---|---|
| `craftlink_presentation_cart` | Giỏ hàng |
| `craftlink_presentation_favorites` | Danh sách id sản phẩm yêu thích |
| `craftlink_presentation_brief_draft` | Brief đã chấp nhận ở trang tùy biến |
| `craftlink_presentation_revision_draft` | Nháp yêu cầu chỉnh sửa đơn hàng |

**Reset dữ liệu demo:** mở DevTools (F12) → tab Application → Local Storage → xóa 4 khóa trên, hoặc chạy trong Console:
```js
Object.keys(localStorage).filter(k => k.startsWith("craftlink_presentation_")).forEach(k => localStorage.removeItem(k));
```
Sau khi xóa, mở lại trang là dữ liệu mẫu được nạp lại như ban đầu.

## Giới hạn trung thực của bản demo

- Chưa có backend/máy chủ: không có đăng nhập thật, thanh toán thật hay đơn hàng được gửi đi đâu.
- Phần "phân tích AI" ở trang tùy biến và trang gợi ý nghệ nhân là **mô phỏng bằng JavaScript** (trễ 1,2 giây), không gọi dịch vụ AI thật.
- Mọi thông báo đều nói rõ hành vi thật của bản demo, không giả vờ hoàn thành giao dịch.

## Liên kết

- Repository bản gốc: https://github.com/hungxuan0411-cloud/Nguyen-Xuan-Hung_cse122-craftlink
- Repository bản trình chiếu: `Nguyen-Xuan-Hung_cse122-craftlink-presentation` (tách biệt hoàn toàn với bản gốc)
