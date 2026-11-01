import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Khách nói về chúng tôi',
  type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Lời kể', type: 'text', rows: 3, validation: (r) => r.required() }),
    defineField({ name: 'author', title: 'Tên khách', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'context', title: 'Bối cảnh (dịp / mùa)', type: 'string' }),
    defineField({
      name: 'featured',
      title: 'Nổi bật',
      type: 'boolean',
      description: 'Bỏ qua — hiện đang hiển thị toàn bộ theo thứ tự tạo.',
      initialValue: false,
    }),
  ],
})
