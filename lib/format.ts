export function formatVnd(amount: number) {
  return `${amount.toLocaleString('vi-VN')}đ`
}

export function padStep(n: number) {
  return String(n).padStart(2, '0')
}
