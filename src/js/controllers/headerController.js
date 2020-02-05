export function activateBtns(view) {
  const saveBtn = document.getElementById('saveBtn');
  const editBtn = document.getElementById('editBtn');
  const deleteBtn = document.getElementById('deleteBtn');
  const header = document.getElementById('contentHeader');
  if (header) header.classList.add('visible');
  switch (view) {
    case 'viewNote':
      editBtn.classList.add('active');
      deleteBtn.classList.add('active');
      if (saveBtn.classList.contains('active'))
        saveBtn.classList.remove('active');
      break;
    case 'noteForm':
      saveBtn.classList.add('active');
      if (editBtn.classList.contains('active'))
        editBtn.classList.remove('active');
      if (deleteBtn.classList.contains('active'))
        deleteBtn.classList.remove('active');
      break;
    default:
      if (saveBtn.classList.contains('active'))
        saveBtn.classList.remove('active');
      if (editBtn.classList.contains('active'))
        editBtn.classList.remove('active');
      if (deleteBtn.classList.contains('active'))
        deleteBtn.classList.remove('active');
      break;
  }
}
