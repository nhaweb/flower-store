import type { CareNote, CarePage, FlowerType, HomePage, Product, SiteSettings, StudioPage, Testimonial } from './types'

/*
 * Nguồn ảnh hard data:
 * - public/flowers/*  : ảnh bó hoa cho sản phẩm (Unsplash + Wikimedia Commons, dùng cho demo)
 * - public/dictionary/* : ảnh loài hoa cho từ điển hoa (Unsplash + Wikimedia Commons)
 * - public/studio/*   : ảnh thư viện xưởng (Wikimedia Commons + Unsplash)
 * Khi lên production nên thay bằng ảnh chụp thật của xưởng và ghi đúng license.
 */

export const fallbackSettings: SiteSettings = {
  brandName: 'PML Flower',
  tagline: 'Hoa theo mùa, buộc tay từng bó',
  phone: '0901 234 567',
  zalo: 'https://zalo.me/0901234567',
  email: 'hello@petalandstem.vn',
  address: '12 Đường Hoa, Quận 1, TP. Hồ Chí Minh',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  hours: 'Thứ 2 – Chủ nhật · 8:00 – 20:00',
  deliveryNote:
    'Đặt trước 14:00 là xưởng giao trong ngày khu nội thành TP.HCM. Ngoại thành hay tỉnh thì nhắn trước để xưởng sắp xe.',
}

export const fallbackHome: HomePage = {
  heroLine1: 'Một chút',
  heroAccent: 'nhẹ nhàng',
  heroLine2: 'cho bàn nhà bạn.',
  heroSupport: 'Hoa theo mùa, chọn từng cành và buộc tay từng bó nhỏ, để nhà mình có thêm chút ngoài trời.',
  heroImageUrl: '/banner/banner.jpg',
  shopEyebrow: 'Bộ sưu tập hiện tại',
  shopTitle: 'Tươi từ vườn',
  storyEyebrow: 'Cách xưởng làm',
  storyTitle: 'Cho hoa lên tiếng.',
  storyBody:
    'Xưởng làm hoa theo mùa chứ không gượng ép mùa. Cành nào được nhón ra là vì dáng đứng, vì màu, và cả những khuyết điểm nhỏ — chính chỗ khuyết đó làm căn phòng sống lại.',
  careEyebrow: 'Lời nhắn từ xưởng',
  careTitle: 'Giữ chúng thật xinh.',
  occasionsEyebrow: 'Chọn theo dịp',
  occasionsTitle: 'Hoa nói thay bạn.',
  seasonsEyebrow: 'Theo mùa',
  seasonsTitle: 'Mùa nào hoa nấy.',
  processEyebrow: 'Cách đặt hoa',
  processTitle: 'Chọn xong, phần còn lại xưởng lo.',
  dictionaryEyebrow: 'Từ điển hoa',
  dictionaryTitle: 'Vài loài xưởng thương nhất.',
  testimonialsEyebrow: 'Khách kể lại',
  testimonialsTitle: 'Người nhận hoa kể lại.',
}

export const fallbackProducts: Product[] = [
  {
    _id: 'local-peach',
    name: 'Mơ Ban Ngày',
    slug: 'mo-ban-ngay',
    tagline: 'Mao lương · Tulip · Đậu ngọt',
    description:
      'Màu đào pha kem, ấm áp. Để bàn ăn hay làm quà cho người thân đều vừa.',
    price: 680000,
    imageUrl: '/flowers/mo-ban-ngay.jpg',
    stems: ['Mao lương', 'Tulip', 'Đậu ngọt'],
    occasions: ['cam-on', 'trang-tri', 'theo-mua'],
    season: 'xuan',
    accentColor: '#f6e0d7',
    featured: true,
    available: true,
    careTip: 'Cắt chéo gốc và thay nước mát mỗi hai ngày.',
  },
  {
    _id: 'local-muse',
    name: 'Nàng Thơ Vườn',
    slug: 'nang-tho-vuon',
    tagline: 'Cúc vũ nữ · Lan tường · Lá xanh',
    description: 'Dáng thoáng, hơi chất vườn nhà. Hợp nhà nhiều sáng và những buổi chiều ngồi yên.',
    price: 840000,
    imageUrl: '/flowers/nang-tho-vuon.jpg',
    stems: ['Cúc vũ nữ', 'Lan tường', 'Lá xanh'],
    occasions: ['sinh-nhat', 'trang-tri'],
    season: 'ha',
    accentColor: '#e7eee4',
    featured: true,
    available: true,
    careTip: 'Tránh nắng chiếu thẳng, để hoa xòe tự nhiên.',
  },
  {
    _id: 'local-wild',
    name: 'Hoang Dã Mềm',
    slug: 'hoang-da-mem',
    tagline: 'Thược dược · Scabiosa · Bạch đàn',
    description: 'Dáng phóng khoáng, cao thấp thoải mái. Món quà ghi điểm cho ngày kỷ niệm.',
    price: 920000,
    imageUrl: '/flowers/hoang-da-mem.jpg',
    stems: ['Thược dược', 'Scabiosa', 'Bạch đàn'],
    occasions: ['ky-niem', 'tinh-yeu', 'theo-mua'],
    season: 'thu',
    accentColor: '#f0e5ec',
    featured: true,
    available: true,
    careTip: 'Tháo bao giấy sớm để cành thở và nghiêng đúng dáng.',
  },
  {
    _id: 'local-dawn',
    name: 'Bình Minh Hồng',
    slug: 'binh-minh-hong',
    tagline: 'Hồng David Austin · Eucalyptus · Aster',
    description: 'Hồng phấn dịu, buộc gọn gàng. Gửi ai đang thương thì chuẩn.',
    price: 1050000,
    imageUrl: '/flowers/binh-minh-hong.jpg',
    stems: ['Hồng David Austin', 'Eucalyptus', 'Aster'],
    occasions: ['tinh-yeu', 'ky-niem', 'sinh-nhat'],
    season: 'ca-nam',
    accentColor: '#f7e8ea',
    featured: false,
    available: true,
  },
  {
    _id: 'local-mist',
    name: 'Sương Trắng',
    slug: 'suong-trang',
    tagline: 'Cẩm tú cầu · Lisianthus · Baby breath',
    description: 'Trắng pha xanh bạc, thanh lịch. Nhất là nhà theo phong cách tối giản.',
    price: 780000,
    imageUrl: '/flowers/suong-trang.jpg',
    stems: ['Cẩm tú cầu', 'Lisianthus', 'Baby breath'],
    occasions: ['cam-on', 'trang-tri'],
    season: 'dong',
    accentColor: '#eef2f0',
    featured: false,
    available: true,
  },
  {
    _id: 'local-citrus',
    name: 'Cam Mật',
    slug: 'cam-mat',
    tagline: 'Hướng dương mini · Cúc mẫu đơn · Lá olive',
    description: 'Vui, ấm, đầy năng lượng. Sinh nhật hay đón khách cuối tuần đều hợp.',
    price: 720000,
    imageUrl: '/flowers/cam-mat.jpg',
    stems: ['Hướng dương mini', 'Cúc mẫu đơn', 'Lá olive'],
    occasions: ['sinh-nhat', 'cam-on', 'theo-mua'],
    season: 'ha',
    accentColor: '#f3ead6',
    featured: false,
    available: true,
  },
  {
    _id: 'local-velvet',
    name: 'Nhung Đỏ',
    slug: 'nhung-do',
    tagline: 'Hồng đỏ · Cẩm chướng · Lá bạc',
    description: 'Đậm, cổ điển. Dành cho lời tỏ tình không vòng vo.',
    price: 1180000,
    imageUrl: '/flowers/nhung-do.jpg',
    stems: ['Hồng đỏ', 'Cẩm chướng', 'Lá bạc'],
    occasions: ['tinh-yeu', 'ky-niem'],
    season: 'ca-nam',
    accentColor: '#f0d9d6',
    featured: false,
    available: true,
  },
  {
    _id: 'local-meadow',
    name: 'Đồng Cỏ Nhỏ',
    slug: 'dong-co-nho',
    tagline: 'Cosmos · Sweet pea · Cỏ trang trí',
    description: 'Nhẹ như gió đồng. Để bàn làm việc hay góc đọc sách đều đẹp.',
    price: 560000,
    imageUrl: '/flowers/dong-co-nho.jpg',
    stems: ['Cosmos', 'Sweet pea', 'Cỏ trang trí'],
    occasions: ['trang-tri', 'theo-mua'],
    season: 'xuan',
    accentColor: '#e8f0e4',
    featured: false,
    available: true,
  },
]

export const fallbackCare: CareNote[] = [
  {
    _id: 'care-1',
    order: 1,
    title: 'Cắt chéo gốc',
    body: 'Cắt chéo gốc 45° ngay dưới vòi nước chảy. Cắt chéo giúp mặt hút nước rộng hơn, còn cắt dưới nước thì không khí không chui được vào cuống.',
  },
  {
    _id: 'care-2',
    order: 2,
    title: 'Đổi nước mỗi hai ngày',
    body: 'Nước mát, bình rửa sạch, ngập khoảng một phần ba cuống. Nước nhiều quá cành mềm nhũn, ít quá thì hoa khát. Nhớ vứt hết lá chìm dưới nước.',
  },
  {
    _id: 'care-3',
    order: 3,
    title: 'Để hoa thở',
    body: 'Về tới nhà là tháo bao giấy, để cành xòe và nghiêng thoải mái. Bó hoa đẹp nhất là lúc nó được thở, nên đừng siết dây buộc quá chặt.',
  },
  {
    _id: 'care-4',
    order: 4,
    title: 'Chọn chỗ trưng bày',
    body: 'Chọn chỗ mát, thoáng, tránh nắng chiếu thẳng và gió điều hòa thổi trực tiếp. Để xa đĩa trái cây đang chín — mùi từ trái cây chín làm hoa già nhanh hơn bạn nghĩ.',
  },
  {
    _id: 'care-5',
    order: 5,
    title: 'Mỗi loài một kiểu',
    body: 'Hồng thích nước vừa, tulip chỉ cần một phần ba bình, còn tú cầu thì uống như con trâu. Xem mẹo theo loài bên dưới để chăm đúng cách.',
  },
]

export const fallbackCarePage: CarePage = {
  heroEyebrow: 'Chăm sóc',
  heroTitle: 'Giữ chúng thật xinh',
  heroIntro:
    'Hoa cắt tươi chỉ cần hai thứ: nước sạch thay đều và chỗ đứng mát. Năm bước dưới đây là đúng những gì xưởng làm trước khi giao bó cho bạn.',
  guideEyebrow: 'Hướng dẫn từng bước',
  guideTitle: 'Năm bước giữ hoa tươi.',
  flowerEyebrow: 'Mẹo theo loài',
  flowerTitle: 'Mỗi loài một tính.',
  faqEyebrow: 'Câu hỏi thường gặp',
  faqTitle: 'Trước khi nhắn xưởng.',
  faqs: [
    {
      question: 'Bó hoa giữ được bao lâu?',
      answer:
        'Trung bình 5–7 ngày với bó trộn nhiều loại. Loại bền như lisianthus, cẩm chướng có thể trụ 10–14 ngày nếu thay nước đều và để chỗ mát.',
    },
    {
      question: 'Nên đặt bó hoa ở đâu trong nhà?',
      answer:
        'Chỗ mát, thoáng, có sáng nhưng không bị nắng rọi trực tiếp. Tránh nắng trưa, gió điều hòa và đĩa trái cây chín — mùi từ trái cây chín làm hoa già sớm.',
    },
    {
      question: 'Có cần cho hoa vào tủ lạnh không?',
      answer:
        'Không cần đâu. Nước mát và chỗ thoáng là đủ. Nhà quá nóng thì ban đêm chuyển hoa sang chỗ mát nhất, nhưng đừng để hoa sát vòi lạnh, cánh dễ nổi vết thâm.',
    },
    {
      question: 'Khi nào thì tháo bao giấy?',
      answer:
        'Ngay khi về nhà. Giấy chỉ để giữ dáng khi vận chuyển, để lâu cành bị bí và héo nhanh. Muốn giữ dáng buộc thêm vài ngày thì nới lỏng dây ra, đừng siết lại.',
    },
    {
      question: 'Hoa héo sớm hơn lời dặn thì làm sao?',
      answer:
        'Nhắn xưởng kèm ảnh bó hoa. Thường là do nước bẩn, chỗ quá nóng hoặc cuống bị tắc. Xưởng chỉ cách cứu hoa, nặng quá thì có bù cho lần đặt sau.',
    },
    {
      question: 'Nên đặt hoa trước bao lâu?',
      answer:
        'Một đến hai ngày là đủ cho bó có sẵn. Dịp lớn như Valentine, 8/3, 20/10 thì đặt trước 3–5 ngày để xưởng chọn được hoa đẹp nhất của mùa.',
    },
  ],
}

export const fallbackFlowers: FlowerType[] = [
  {
    _id: 'flower-hong',
    name: 'Hồng',
    slug: 'hong',
    imageUrl: '/dictionary/hong.jpg',
    meaning: 'Tình yêu nói ra rõ ràng: đỏ là đam mê, hồng dịu dàng, trắng trong trẻo.',
    description:
      'Hồng xưởng chọn độ nở vừa khoe: cánh ngoài hé nhẹ, búp trong còn ngậm, về nhà nở dần từng ngày.',
    season: 'ca-nam',
    careLevel: 'Dễ',
    lifespan: '7–10 ngày',
    careTip: 'Nhặt vài cánh ngoài cùng khi hơi mềm, cắt gốc mỗi hai ngày và luôn đổi nước mát.',
    tint: '#f2c7c7',
  },
  {
    _id: 'flower-tulip',
    name: 'Tulip',
    slug: 'tulip',
    imageUrl: '/dictionary/tulip.jpg',
    meaning: 'Lời tỏ tình nhẹ nhàng, và một sự bắt đầu mới. Cắm vào bình là đứng thẳng như lời hứa.',
    description:
      'Tulip nhập về vẫn dài thêm ra sau khi cắt. Cắm hôm nay, ngày mai nó cao hơn một chút, đừng ngạc nhiên.',
    season: 'dong',
    careLevel: 'Dễ',
    lifespan: '5–7 ngày',
    careTip: 'Nước thấp chừng một phần ba bình, để nơi mát. Cuống vẫn dài ra sau khi cắt nên đừng cắm quá chật.',
    tint: '#f6d9c4',
  },
  {
    _id: 'flower-cam-tu-cau',
    name: 'Cẩm tú cầu',
    slug: 'cam-tu-cau',
    imageUrl: '/dictionary/cam-tu-cau.jpg',
    meaning: 'Lòng biết ơn đầy tràn. Một bông thôi đã là cả một chùm cảm xúc.',
    description: 'Uống nước như con trâu: một chùm tú cầu có thể hút cạn bình nhỏ chỉ trong một buổi trưa.',
    season: 'ha',
    careLevel: 'Vừa',
    lifespan: '5–7 ngày',
    careTip: 'Đầu hoa hơi héo thì nhúng cả bông vào nước mát 30 phút, nó hồi lại như mới cắt.',
    tint: '#b9cbd8',
  },
  {
    _id: 'flower-mao-luong',
    name: 'Mao lương',
    slug: 'mao-luong',
    imageUrl: '/dictionary/mao-luong.jpg',
    meaning: 'Quyến rũ mà lặng lẽ. Lớp cánh mỏng xếp vào nhau như tia nắng chiều.',
    description: 'Cuống rỗng như ống hút: nước thấp, thay nhanh, hoa giữ được hơn một tuần.',
    season: 'xuan',
    careLevel: 'Vừa',
    lifespan: '7–10 ngày',
    careTip: 'Nước thấp, thay thường xuyên và vứt hết lá chìm dưới nước kẻo cuống mềm nhũn.',
    tint: '#f2b8a0',
  },
  {
    _id: 'flower-thuoc-duoc',
    name: 'Thược dược',
    slug: 'thuoc-duoc',
    imageUrl: '/dictionary/thuoc-duoc.jpg',
    meaning: 'Sống phóng khoáng, vui không gò ép. Hoa của những người sống thật với mình.',
    description: 'Thược dược nở muộn nhưng dày — mùa thu ở xưởng là mùa của nó.',
    season: 'thu',
    careLevel: 'Vừa',
    lifespan: '4–6 ngày',
    careTip: 'Cắt chéo khi hoa nở độ ba phần tư. Tránh nắng gắt và để xa đĩa trái cây đang chín.',
    tint: '#d9a6b4',
  },
  {
    _id: 'flower-lisianthus',
    name: 'Lisianthus',
    slug: 'lisianthus',
    imageUrl: '/dictionary/lisianthus.jpg',
    meaning: 'Sự trân trọng giữ lâu. Bền màu như một lời cảm ơn không muốn phai.',
    description: 'Nhẹ như giấy, bền như cúc — cánh mỏng mà đứng được nửa tháng trong nhà mát.',
    season: 'ca-nam',
    careLevel: 'Dễ',
    lifespan: '10–14 ngày',
    careTip: 'Nước sạch hai ngày một lần là đủ. Loại này kỵ dời chỗ, cắm đâu để đó.',
    tint: '#d8cfe8',
  },
]

export const fallbackTestimonials: Testimonial[] = [
  {
    _id: 'review-1',
    quote: 'Hoa tới tay mẹ trước mười giờ sáng đúng ngày sinh nhật, mà tới cuối tuần sau vẫn còn tươi.',
    author: 'Lan Anh',
    context: 'Sinh nhật mẹ',
  },
  {
    _id: 'review-2',
    quote: 'Mình gửi kèm ảnh góc phòng, xưởng chọn bó đúng tông luôn. Không cần giải thích nhiều.',
    author: 'Kiệt',
    context: 'Trang trí nhà mới',
  },
  {
    _id: 'review-3',
    quote: 'Bó không dày như hình trên mạng, nhưng chính cái thoáng đó làm bàn ăn trông xinh hơn.',
    author: 'Hương',
    context: 'Tiệc nhỏ cuối tuần',
  },
  {
    _id: 'review-4',
    quote: 'Đặt mười một giờ đêm, bảy giờ sáng hôm sau hoa tới nơi. Đúng hẹn, còn kèm tờ note viết tay.',
    author: 'Trang',
    context: 'Cảm ơn đồng nghiệp',
  },
  {
    _id: 'review-5',
    quote: 'Mùa nào hoa nấy là thật. Tuần đó tulip hết, xưởng gọi ngay hỏi đổi sang mao lương gần màu.',
    author: 'Bảo Trân',
    context: 'Khách đặt theo mùa',
  },
  {
    _id: 'review-6',
    quote: 'Lần đầu tiên giữ được hoa hai tuần trọn. Làm đúng theo tờ hướng dẫn kèm trong gói thôi mà.',
    author: 'Ngọc',
    context: 'Khách mới',
  },
]

export const fallbackStudio: StudioPage = {
  eyebrow: 'Xưởng hoa',
  title: 'Làm hoa chậm, theo mùa.',
  intro:
    'PML Flower là một xưởng nhỏ ở Sài Gòn. Mỗi tuần buộc vài mẻ nhỏ, ưu tiên hoa tươi và dáng đứng của từng cành hơn là hoa đều tăm tắp kiểu công nghiệp.',
  imageUrl: '/banner/banner.jpg',
  sections: [
    {
      heading: 'Theo mùa, không theo xu hướng',
      body: 'Bộ sưu tập đổi theo thứ đang đẹp nhất ở chợ hoa tuần đó. Loài nào hết mùa, xưởng sẽ gợi ý loại khác gần màu, gần cái dáng của bó.',
    },
    {
      heading: 'Buộc tay, không khuôn mẫu',
      body: 'Mỗi bó do một người buộc từ đầu tới cuối. Nên không bó nào giống bó nào, và cũng không có bó nào là sai.',
    },
    {
      heading: 'Đặt hoa bằng lời nói',
      body: 'Xưởng không thu tiền online. Bạn chọn bó, gửi danh sách qua website hoặc Zalo. Xưởng nhắn lại xác nhận còn hoa và ngày giao, rồi trả tiền lúc nhận hàng hoặc chuyển khoản.',
    },
    {
      heading: 'Giao trong thành phố',
      body: 'Giao mạnh nhất là khu nội thành TP.HCM. Ngoại thành hay tỉnh thì nhắn trước một ngày, xưởng sắp xe cho hợp đường.',
    },
  ],
  timelineEyebrow: 'Hành trình',
  timelineTitle: 'Từ một bàn nhỏ.',
  timeline: [
    {
      year: '2019',
      title: 'Một bàn, một kéo',
      body: 'PML Flower bắt đầu từ một cái bàn nhỏ trong căn hộ quận 3, bán hoa cho bạn bè và hàng xóm mỗi cuối tuần.',
    },
    {
      year: '2020',
      title: 'Ba giờ sáng chợ hoa',
      body: 'Buổi đầu tiên đứng chợ học cách chọn hoa theo mẻ: xem cành, nắn lá, nắm độ tươi bằng tay chứ không bằng giá.',
    },
    {
      year: '2022',
      title: 'Góc xưởng đầu tiên',
      body: 'Thuê góc xưởng đầu tiên, bắt đầu bộ sưu tập theo mùa. Mỗi tuần một mẻ, hết là hết, không cắm lại theo đơn.',
    },
    {
      year: '2024',
      title: 'Ba người, một nguyên tắc',
      body: 'Đủ ba người, vẫn giữ đúng quy tắc từ ngày đầu: hoa phải tươi trong ngày giao, dáng bó phải thoáng và có nhịp cao thấp.',
    },
    {
      year: 'Nay',
      title: 'Vẫn mẻ nhỏ',
      body: 'Xưởng vẫn buộc chậm, vẫn đổi bộ sưu tập theo tuần. Vì hoa đẹp nhất là lúc nó đang mùa.',
    },
  ],
  valuesEyebrow: 'Nguyên tắc',
  valuesTitle: 'Bốn điều xưởng luôn giữ.',
  galleryEyebrow: 'Thư viện xưởng',
  galleryTitle: 'Một ngày ở xưởng.',
  gallery: [
    { imageUrl: '/banner/banner.jpg', caption: 'Bàn buộc sáng sớm' },
    { imageUrl: '/studio/cho-hoa.jpg', caption: 'Chợ hoa 4:30 sáng' },
    { imageUrl: '/floral-still-life.png', caption: 'Hoa vừa về tới xưởng' },
    { tint: '#e7eee4', caption: 'Kệ nhuộm giấy gói' },
    { imageUrl: '/studio/me-tulip.jpg', caption: 'Mẻ tulip tuần này' },
    { imageUrl: '/studio/goc-san-pham.jpg', caption: 'Góc chụp sản phẩm' },
  ],
  teamEyebrow: 'Người làm hoa',
  teamTitle: 'Những người cầm kéo.',
  team: [
    {
      name: 'Minh An',
      role: 'Người buộc chính',
      note: 'Mười năm cầm kéo và dây gai. Tin rằng cành hoa nào cũng có dáng đứng riêng của nó.',
      tint: '#f6d6dd',
    },
    {
      name: 'Thu Hà',
      role: 'Chọn hoa ở chợ',
      note: 'Dậy ba giờ sáng gần chục năm — nắm độ tươi bằng tay trước khi nhìn giá.',
      tint: '#e7eee4',
    },
    {
      name: 'Quang',
      role: 'Giao hoa & chăm khách',
      note: 'Thuộc làn đường nội thành như lòng bàn tay, và luôn bỏ vào gói hoa một lá thư nhỏ viết tay.',
      tint: '#f3ead6',
    },
  ],
  visitTitle: 'Ghé xưởng uống một ly trà.',
  visitIntro:
    'Xưởng vẫn mở cửa cho khách ghé chọn hoa trực tiếp. Đi ngang thì nhắn trước một dòng, nhiều hôm xưởng đang bận đợi hoa về.',
}