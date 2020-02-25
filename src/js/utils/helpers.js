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

export function buildNotesList(notes) {
  const notesListNode = document.getElementById('notesList');

  notes.forEach((note) => {
    const noteEl = document.createElement('li');
    noteEl.id = note.id;
    noteEl.innerHTML = `
      <article class="todo">
        <div class="pd-container">
          <header class="todo__header">
            <h3 class="todo__title color-white">${note.title}</h3>
            <span class="todo__date">${getFormattedDate(new Date(note.updated_at))}</span>
          </header>
          <!-- todo header-->
          <div class="todo__body">
            <p class="todo__summary">
              ${note.body}
            </p>
          </div>
          <!-- todo body-->
          <footer class="todo__footer">
            <button class="btn color-white delete-note-btn btn-icon"><i class="fas fa-trash-alt"></i></button>
          </footer>
          <!-- todo footer -->
        </div>
      </article>
    `;
    notesListNode.appendChild(noteEl);
  });
}
