/* ==========================================================================
   presentation.js — chế độ trình chiếu của bản sao craftlink-presentation
   --------------------------------------------------------------------------
   Bản trình chiếu demo TỪNG TRANG ĐỘC LẬP, khác với bản gốc như sau:
     1. Mọi liên kết trỏ sang trang .html KHÁC đều bị chặn lại và hiện toast
        giải thích — người trình chiếu không bị nhảy sang trang khác.
     2. Liên kết trỏ về CHÍNH trang đang mở (logo, mục menu đang active...)
        cũng không tải lại trang, tránh mất trạng thái đang demo.
     3. Các chức năng nội bộ (tìm kiếm, lọc, giỏ hàng, yêu thích, tab,
        hủy đơn...) KHÔNG bị ảnh hưởng — main.js giữ nguyên logic.
     4. Liên kết href="#" (chân trang) để nguyên: main.js đã có toast riêng.

   File này được nhúng SAU main.js ở cả 8 trang, nên có thể dùng hàm
   showToast() đã định nghĩa sẵn trong main.js.
   ========================================================================== */

// Tên file của trang đang mở, ví dụ "index.html"
const PRESENTATION_CURRENT_PAGE = location.pathname.split("/").pop();

document.addEventListener("click", function (event) {
  const link = event.target.closest("a[href]");
  if (!link) {
    return; // bấm vào chỗ không phải liên kết
  }

  const href = link.getAttribute("href");

  // Liên kết href="#" — main.js đang xử lý và báo toast riêng rồi
  if (href === "#") {
    return;
  }

  // Chỉ quan tâm liên kết nội bộ trỏ tới file .html
  if (href.endsWith(".html")) {
    event.preventDefault(); // chặn hành vi chuyển trang mặc định

    const targetPage = href.split("/").pop();
    if (targetPage !== PRESENTATION_CURRENT_PAGE) {
      // Sang trang khác: chặn và giải thích rõ đây là bản demo độc lập
      showToast("Liên kết sang trang khác đã tắt — bản trình chiếu demo từng trang độc lập.");
    }
    // Trỏ về chính trang đang mở: không làm gì cả (không tải lại trang)
  }
});
