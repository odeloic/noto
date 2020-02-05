const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];
export function getFormattedDate(dateObj) {
  return `${dateObj.getDay()} ${months[dateObj.getMonth() - 1]}`;
}
