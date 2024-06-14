export const formattedPrice = (price) => {
  return new Intl.NumberFormat('de-DE').format(price)
}
