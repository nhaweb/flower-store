import { defineField, defineType } from 'sanity'

export const studioPage = defineType({
  name: 'studioPage',
  title: 'Trang xưởng hoa',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: 'Xưởng hoa' }),
    defineField({ name: 'title', title: 'Tiêu đề', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'intro', title: 'Giới thiệu', type: 'text', rows: 4 }),
    defineField({
      name: 'image',
      title: 'Ảnh',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'timelineEyebrow',
      title: 'Timeline eyebrow',
      type: 'string',
      initialValue: 'Hành trình',
    }),
    defineField({
      name: 'timelineTitle',
      title: 'Timeline tiêu đề',
      type: 'string',
      initialValue: 'Từ một bàn nhỏ.',
    }),
    defineField({
      name: 'timeline',
      title: 'Mốc thời gian',
      type: 'array',
      of: [
        defineType({
          name: 'timelineEntry',
          title: 'Mốc',
          type: 'object',
          fields: [
            defineField({ name: 'year', title: 'Năm', type: 'string' }),
            defineField({ name: 'title', title: 'Tiêu đề', type: 'string' }),
            defineField({ name: 'body', title: 'Nội dung', type: 'text', rows: 3 }),
          ],
          preview: {
            select: { title: 'year', subtitle: 'title' },
          },
        }),
      ],
    }),
    defineField({
      name: 'valuesEyebrow',
      title: 'Nguyên tắc eyebrow',
      type: 'string',
      initialValue: 'Nguyên tắc',
    }),
    defineField({
      name: 'valuesTitle',
      title: 'Nguyên tắc tiêu đề',
      type: 'string',
      initialValue: 'Bốn điều xưởng luôn giữ.',
    }),
    defineField({
      name: 'sections',
      title: 'Các nguyên tắc',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'heading', title: 'Tiêu đề đoạn', type: 'string' }),
            defineField({ name: 'body', title: 'Nội dung', type: 'text', rows: 4 }),
          ],
        },
      ],
    }),
    defineField({
      name: 'galleryEyebrow',
      title: 'Gallery eyebrow',
      type: 'string',
      initialValue: 'Thư viện xưởng',
    }),
    defineField({
      name: 'galleryTitle',
      title: 'Gallery tiêu đề',
      type: 'string',
      initialValue: 'Một ngày ở xưởng.',
    }),
    defineField({
      name: 'gallery',
      title: 'Thư viện ảnh',
      type: 'array',
      of: [
        defineType({
          name: 'galleryItem',
          title: 'Ảnh',
          type: 'object',
          fields: [
            defineField({ name: 'caption', title: 'Chú thích', type: 'string' }),
            defineField({
              name: 'image',
              title: 'Ảnh',
              type: 'image',
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: { title: 'caption', media: 'image' },
          },
        }),
      ],
    }),
    defineField({
      name: 'teamEyebrow',
      title: 'Đội ngũ eyebrow',
      type: 'string',
      initialValue: 'Người làm hoa',
    }),
    defineField({
      name: 'teamTitle',
      title: 'Đội ngũ tiêu đề',
      type: 'string',
      initialValue: 'Những người cầm kéo.',
    }),
    defineField({
      name: 'team',
      title: 'Đội ngũ',
      type: 'array',
      of: [
        defineType({
          name: 'teamMember',
          title: 'Thành viên',
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Tên', type: 'string' }),
            defineField({ name: 'role', title: 'Vai trò', type: 'string' }),
            defineField({ name: 'note', title: 'Một dòng giới thiệu', type: 'text', rows: 2 }),
            defineField({
              name: 'image',
              title: 'Ảnh chân dung',
              type: 'image',
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: { title: 'name', subtitle: 'role', media: 'image' },
          },
        }),
      ],
    }),
    defineField({
      name: 'visitTitle',
      title: 'Ghé thăm tiêu đề',
      type: 'string',
      initialValue: 'Ghé xưởng uống một ly trà.',
    }),
    defineField({
      name: 'visitIntro',
      title: 'Ghé thăm giới thiệu',
      type: 'text',
      rows: 3,
      initialValue:
        'Xưởng vẫn mở cửa cho khách ghé chọn hoa trực tiếp. Đi ngang thì nhắn trước một dòng, nhiều hôm xưởng đang bận đợi hoa về.',
    }),
  ],
})
