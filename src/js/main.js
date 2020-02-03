import renderEditor from './modules/renderEditor';

// let notes = [];
const showEditorBtn = document.getElementById('showEditorBtn');
if (showEditorBtn) showEditorBtn.addEventListener('click', renderEditor);

const saveBtn = document.getElementById('saveBtn');
function renderNewNote(note) {
  const noteMarkup = `
  <article class="todo">
  <div class="pd-container">
    <header class="todo__header">
      <h3 class="todo__title color-white">${note.title}</h3>
      <span class="todo__date">2020/02/02</span>
    </header>
    <!-- todo header-->
    <div class="todo__body">
      <p class="todo__summary">
        ${note.body}
      </p>
    </div>
    <!-- todo body-->
    <footer class="todo__footer">
      <button class="link color-red">Delete</button>
    </footer>
    <!-- todo footer -->
  </div>
</article>
  `;
  const notesList = document.getElementById('notesList');
  const newNoteEl = document.createElement('li');
  newNoteEl.innerHTML = noteMarkup;
  notesList.appendChild(newNoteEl);
}
function saveNote() {
  const note = {
    title: document.getElementById('noteTitle').value,
    body: document.getElementById('noteBody').value
  };
  // notes.push(note); for later maybe to access Notes saved
  renderNewNote(note);
}

saveBtn.addEventListener('click', saveNote);
