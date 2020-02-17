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

export function isNoteValid({ title, body }) {
  if (title === '' || body === '') {
    // eslint-disable-next-line no-alert
    alert('Please Fill all the fields!');
    return false;
  }
  return true;
}
