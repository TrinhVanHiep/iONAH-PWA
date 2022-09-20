export const formatMoney = (money) => {
  const newMoney = Math.round(money);
  return new Intl.NumberFormat().format(newMoney);
}
