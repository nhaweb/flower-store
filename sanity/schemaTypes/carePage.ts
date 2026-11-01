import { defineField, defineType } from 'sanity'

export const carePage = defineType({
  name: 'carePage',
  title: 'Trang chăm sóc',
  type: 'document',
  fields: [
    defineField({ name: 'heroEyebrow', title: 'Hero eyebrow', type: 'string', initialValue: 'Chăm sóc' }),
    defineField({ name: 'heroTitle', title: 'Hero tiêu đề', type: 'string', initialValue: 'Giữ chúng thật xinh' }),
    defineField({
      name: 'heroIntro',
      title: 'Hero giới thiệu',
      type: 'text',
      rows: 3,
      initialValue:
        'Hoa cắt tươi chỉ cần hai thứ: nước sạch thay đều và chỗ đứng mát. Năm bước dưới đây là đúng những gì xưởng làm trước khi giao bó cho bạn.',
    }),
    defineField({
      name: 'guideEyebrow',
      title: 'Guide eyebrow',
      type: 'string',
      initialValue: 'Hướng dẫn từng bước',
    }),
    defineField({
      name: 'guideTitle',
      title: 'Guide tiêu đề',
      type: 'string',
      initialValue: 'Năm bước giữ hoa tươi.',
    }),
    defineField({
      name: 'flowerEyebrow',
      title: 'Mẹo loài eyebrow',
      type: 'string',
      initialValue: 'Mẹo theo loài',
    }),
    defineField({
      name: 'flowerTitle',
      title: 'Mẹo loài tiêu đề',
      type: 'string',
      initialValue: 'Mỗi loài một tính.',
    }),
    defineField({
      name: 'faqEyebrow',
      title: 'FAQ eyebrow',
      type: 'string',
      initialValue: 'Câu hỏi thường gặp',
    }),
    defineField({
      name: 'faqTitle',
      title: 'FAQ tiêu đề',
      type: 'string',
      initialValue: 'Trước khi nhắn xưởng.',
    }),
    defineField({
      name: 'faqs',
      title: 'Câu hỏi thường gặp',
      type: 'array',
      of: [
        defineType({
          name: 'faqItem',
          title: 'Câu hỏi',
          type: 'object',
          fields: [
            defineField({ name: 'question', title: 'Câu hỏi', type: 'string' }),
            defineField({ name: 'answer', title: 'Trả lời', type: 'text', rows: 3 }),
          ],
          preview: {
            select: { title: 'question', subtitle: 'answer' },
          },
        }),
      ],
    }),
  ],
})
