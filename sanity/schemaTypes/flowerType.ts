import { defineField, defineType } from 'sanity'

export const flowerType = defineType({
  name: 'flowerType',
  title: 'Loài hoa (từ điển)',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Tên loài', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Đường dẫn',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      title: 'Ảnh loài hoa',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'meaning', title: 'Ý nghĩa', type: 'text', rows: 2 }),
    defineField({ name: 'description', title: 'Mô tả thêm', type: 'text', rows: 3 }),
    defineField({
      name: 'season',
      title: 'Mùa đẹp',
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
      name: 'careLevel',
      title: 'Mức chăm',
      type: 'string',
      options: {
        list: [
          { title: 'Dễ', value: 'Dễ' },
          { title: 'Vừa', value: 'Vừa' },
          { title: 'Khó', value: 'Khó' },
        ],
      },
    }),
    defineField({ name: 'lifespan', title: 'Tuổi thọ (ví dụ: 7–10 ngày)', type: 'string' }),
    defineField({ name: 'careTip', title: 'Mẹo chăm', type: 'text', rows: 3 }),
    defineField({
      name: 'tint',
      title: 'Màu nền (hex) khi chưa có ảnh',
      type: 'string',
      description: 'Ví dụ: #f2c7c7',
    }),
  ],
})
