# PML Flower — Flower marketing site (VN)

Website marketing hoa theo mùa bằng tiếng Việt. Catalog quản lý bằng **Sanity**. Không thanh toán online — khách thêm bó vào danh sách và gửi yêu cầu đặt (email / Zalo).

## Chạy local

```bash
pnpm install
pnpm dev
```

- Storefront: http://localhost:3000  
- Sanity Studio: http://localhost:3000/studio  

Chưa có `NEXT_PUBLIC_SANITY_PROJECT_ID` thì site dùng **nội dung mẫu** trong `sanity/lib/fallback.ts`.

## Kết nối Sanity

1. Tạo project tại [sanity.io/manage](https://www.sanity.io/manage)
2. Copy `.env.example` → `.env.local` và điền `NEXT_PUBLIC_SANITY_PROJECT_ID`
3. Mở `/studio`, đăng nhập, tạo documents:
   - **Bó hoa** (`product`)
   - **Mẹo chăm sóc** (`careNote`)
   - **Cài đặt website** (`siteSettings`) — 1 document
   - **Trang chủ** (`homePage`) — 1 document
   - **Trang xưởng hoa** (`studioPage`) — 1 document

## Routes

| Path | Mục đích |
|------|----------|
| `/` | Trang chủ |
| `/cua-hang` | Catalog + lọc dịp |
| `/hoa/[slug]` | Chi tiết bó |
| `/xuong-hoa` | Câu chuyện xưởng |
| `/cham-soc` | Chăm sóc hoa |
| `/lien-he` | Liên hệ + form đặt |
| `/danh-sach` | Danh sách đặt hoa |
| `/studio` | CMS Sanity |
