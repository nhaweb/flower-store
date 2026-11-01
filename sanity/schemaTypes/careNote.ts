import { defineField, defineType } from 'sanity'

export const careNote = defineType({
  name: 'careNote',
  title: 'Mẹo chăm sóc',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Thứ tự', type: 'number', validation: (r) => r.required() }),
    defineField({ name: 'title', title: 'Tiêu đề', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'body', title: 'Nội dung', type: 'text', rows: 3, validation: (r) => r.required() }),
  ],
  orderings: [{ title: 'Thứ tự', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'order' },
    prepare({ title, subtitle }) {
      return { title, subtitle: `Bước ${String(subtitle).padStart(2, '0')}` }
    },
  },
})
