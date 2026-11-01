export type CareLevel = 'Dễ' | 'Vừa' | 'Khó'

export type FlowerCare = {
  name: string
  /** Tuổi thọ trung bình trong bình, ví dụ "7–10 ngày" */
  lifespan: string
  level: CareLevel
  /** Mùa đẹp nhất ở Việt Nam */
  season: string
  tip: string
  /** Màu chấm trang trí theo tông loài hoa */
  tint: string
}

export const flowerCareGuide: FlowerCare[] = [
  {
    name: 'Hồng',
    lifespan: '7–10 ngày',
    level: 'Dễ',
    season: 'Cả năm',
    tip: 'Nhặt vài cánh ngoài cùng khi hơi mềm, cắt gốc mỗi hai ngày và luôn đổi nước mát.',
    tint: '#f2c7c7',
  },
  {
    name: 'Tulip',
    lifespan: '5–7 ngày',
    level: 'Dễ',
    season: 'Xuân–đông',
    tip: 'Cuống tulip vẫn dài thêm sau khi cắt. Nước thấp chừng một phần ba bình, để nơi mát, hoa sẽ giữ dáng thẳng.',
    tint: '#f6d9c4',
  },
  {
    name: 'Cẩm tú cầu',
    lifespan: '5–7 ngày',
    level: 'Vừa',
    season: 'Hạ–thu',
    tip: 'Uống nước cực khỏe. Đầu hoa hơi héo thì nhúng cả bông vào nước mát 30 phút, nó hồi lại như mới cắt.',
    tint: '#b9cbd8',
  },
  {
    name: 'Mao lương',
    lifespan: '7–10 ngày',
    level: 'Vừa',
    season: 'Xuân',
    tip: 'Cuống rỗng nên mềm nhanh. Nước thấp, thay thường xuyên, đừng để lá chìm dưới nước.',
    tint: '#f2b8a0',
  },
  {
    name: 'Thược dược',
    lifespan: '4–6 ngày',
    level: 'Vừa',
    season: 'Thu',
    tip: 'Cắt chéo khi hoa nở độ ba phần tư. Tránh nắng gắt và để xa đĩa trái cây đang chín.',
    tint: '#d9a6b4',
  },
  {
    name: 'Cúc vũ nữ',
    lifespan: '7–10 ngày',
    level: 'Dễ',
    season: 'Hạ',
    tip: 'Xun nhẹ gốc cuống qua lửa hai giây để nhựa không chảy — cành bền và thẳng hơn hẳn.',
    tint: '#e8d8a8',
  },
  {
    name: 'Lisianthus',
    lifespan: '10–14 ngày',
    level: 'Dễ',
    season: 'Cả năm',
    tip: 'Bền và kiên nhẫn. Nước sạch hai ngày một lần là đủ, cắm đâu để đó.',
    tint: '#d8cfe8',
  },
  {
    name: 'Cẩm chướng',
    lifespan: '10–14 ngày',
    level: 'Dễ',
    season: 'Cả năm',
    tip: 'Lâu tàn nhất trong nhóm. Giữ xa hoa đang héo kẻo mùi ethylene làm nó tàn theo.',
    tint: '#e8a8a8',
  },
  {
    name: 'Hướng dương',
    lifespan: '6–8 ngày',
    level: 'Dễ',
    season: 'Hạ',
    tip: 'Uống khỏe, nước ngập nửa cuống. Châm thêm nước vào là được, không cần đổ cả bình ra thay.',
    tint: '#f0c060',
  },
]
