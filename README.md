# Nhà Hàng Bếp Quê - Hương Vị Cơm Nhà 🍲

Trang Landing Page Single Page tối ưu **Mobile-First** cho nhà hàng ẩm thực Việt Nam gia đình.

## Điểm Nổi Bật
- **Giao diện & Tông màu**: Cam đất (`#c2410c`), Vàng kim ấm (`#ca8a04`), Nâu gỗ ấm cúng (`#44261a`, `#26130b`) kích thích vị giác và mang cảm giác gia đình sum vầy.
- **Tối ưu Mobile-First**: Nút bấm to rõ, full-width CTA trên màn hình nhỏ, thẻ món ăn dạng cuộn/lưới mượt mà từ 375px trở lên.
- **4 Khối chức năng chính**:
  1. **Hero Section**: Logo "BẾP QUÊ", hotline gọi nhanh, headline "Hương Vị Ấm Nồng - Chuẩn Cơm Nhà Nấu", banner ảnh đặc sản, 2 CTA Full-Width (Gọi Đặt Bàn & Chỉ Đường Google Maps).
  2. **Menu Tiêu Biểu**: Top 6 món bán chạy (Cá Lóc Kho Tộ, Lẩu Cù Lao, Gà Hấp Lá Chanh, Sườn Non Rim, Canh Chua Cá Hú, Gỏi Ngó Sen) kèm giá, tag Best Seller và nút "Xem Menu Đầy Đủ Qua Zalo".
  3. **Điểm Nổi Bật & Không Gian**: 4 ưu thế (Bãi đậu ô tô, Phòng lạnh tiệc riêng, Nguyên liệu sạch mỗi ngày, Nhận đặt tiệc) cùng bộ sưu tập ảnh quán.
  4. **Thông Tin Liên Hệ & Footer**: Địa chỉ, Hotline, giờ hoạt động, bản đồ Google Maps nhúng trực quan, cùng form/modal đặt bàn nhanh online.
  5. **Floating Action Buttons (FAB)**: Cố định góc dưới màn hình gồm nút Gọi Ngay & Nhắn Tin Zalo giúp khách đặt bàn chỉ với 1 chạm.

## Hướng Dẫn Chạy Dự Án

### 1. Cài đặt thư viện:
```bash
npm install
```

### 2. Khởi chạy môi trường phát triển (Dev Server):
```bash
npm run dev
```
Truy cập: `http://localhost:5173`

### 3. Build kiểm tra sản phẩm:
```bash
npm run build
```

## Hướng Dẫn Triển Khai Lên Vercel
1. Đẩy code lên GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: init landing page Bep Que"
   git branch -M main
   git remote add origin <URL_REPO_CUA_BAN>
   git push -u origin main
   ```
2. Đăng nhập vào [Vercel](https://vercel.com) -> Chọn **Add New Project** -> Chọn repository vừa tạo.
3. Vercel sẽ tự động nhận diện framework là **Vite** với Build Command: `vite build` và Output Directory: `dist`. Bấm **Deploy** là hoàn tất!
