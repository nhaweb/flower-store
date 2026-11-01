import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Bó hoa',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Tên', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'tagline', title: 'Thành phần / mô tả ngắn', type: 'string' }),
    defineField({ name: 'description', title: 'Mô tả', type: 'text', rows: 4 }),
    defineField({
      name: 'price',
      title: 'Giá (VNĐ)',
      type: 'number',
      validation: (r) => r.required().min(0),
    }),
    defineField({
      name: 'image',
      title: 'Ảnh chính',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'gallery',
      title: 'Thư viện ảnh',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'stems',
      title: 'Các loại hoa',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'occasions',
      title: 'Dịp',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Sinh nhật', value: 'sinh-nhat' },
          { title: 'Kỷ niệm', value: 'ky-niem' },
          { title: 'Cảm ơn', value: 'cam-on' },
          { title: 'Tình yêu', value: 'tinh-yeu' },
          { title: 'Trang trí nhà', value: 'trang-tri' },
          { title: 'Theo mùa', value: 'theo-mua' },
        ],
      },
    }),
    defineField({
      name: 'season',
      title: 'Mùa',
      type: 'string',
      options: {
        list: [
          { title: 'Xuân', value: 'xuan' },
          { title: 'Hạ', value: 'ha' },
          { title: 'Thu', value: 'thu' },
          { title: 'Đông', value: 'dong' },
          { title: 'Cả năm', value: 'ca-nam' },
        ],
      },
    }),
    defineField({
      name: 'accentColor',
      title: 'Màu nền card (hex)',
      type: 'string',
      initialValue: '#f6e0d7',
    }),
    defineField({ name: 'featured', title: 'Nổi bật trên trang chủ', type: 'boolean', initialValue: false }),
    defineField({ name: 'available', title: 'Đang nhận đặt', type: 'boolean', initialValue: true }),
    defineField({ name: 'careTip', title: 'Mẹo chăm sóc ngắn', type: 'text', rows: 2 }),
  ],
  preview: {
    select: { title: 'name', media: 'image', subtitle: 'price' },
    prepare({ title, media, subtitle }) {
      return {
        title,
        media,
        subtitle: subtitle ? `${Number(subtitle).toLocaleString('vi-VN')}đ` : '',
      }
    },
  },
})
