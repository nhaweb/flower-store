import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Cài đặt website',
  type: 'document',
  fields: [
    defineField({ name: 'brandName', title: 'Tên thương hiệu', type: 'string', initialValue: 'PML Flower' }),
    defineField({ name: 'tagline', title: 'Slogan', type: 'string' }),
    defineField({ name: 'phone', title: 'Số điện thoại', type: 'string' }),
    defineField({ name: 'zalo', title: 'Link Zalo', type: 'url' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'address', title: 'Địa chỉ', type: 'text', rows: 2 }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
    defineField({
      name: 'hours',
      title: 'Giờ mở cửa',
      type: 'string',
      initialValue: 'Thứ 2 – Chủ nhật · 8:00 – 20:00',
    }),
    defineField({
      name: 'deliveryNote',
      title: 'Ghi chú giao hoa',
      type: 'text',
      rows: 2,
    }),
  ],
})
