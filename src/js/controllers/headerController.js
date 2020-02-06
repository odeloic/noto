export const controlBtns = [
  { btn: 'save', node: document.getElementById('saveBtn') },
  { btn: 'edit', node: document.getElementById('editBtn') },
  { btn: 'delete', node: document.getElementById('deleteBtn') },
  { btn: 'new', node: document.getElementById('newNoteBtn') },
  { btn: 'update', node: document.getElementById('updateNoteBtn') }
];

const activateBtn = (btn = '') => {
  controlBtns.forEach(button => {
    // check for the current btn to be active and activate it
    if (button.btn === btn) button.node.classList.add('active');
  });
};

export function activateBtns(view) {
  const header = document.getElementById('contentHeader');
  if (header) header.classList.add('visible');
  switch (view) {
    case 'viewNote':
      activateBtn('edit');
      activateBtn('new');
      activateBtn('delete');
      break;
    case 'noteForm':
      activateBtn('save');
      break;
    case 'editForm':
      activateBtn('update');
      break;
    default:
      activateBtn('');
      break;
  }
}
