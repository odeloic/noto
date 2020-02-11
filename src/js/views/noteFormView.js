import { attachViewToContentArea } from '../controllers/contentAreaController';
import { activateBtns } from '../controllers/headerController';
function editorElm({ title = '', body = '' }) {
  return `
    <form class="newNoteForm">
      <input type="text" name="title" placeholder="title" class="newNoteForm__title" id="noteTitle" value="${title}" required>
      <textarea placeholder="start typing..." class="newNoteForm__body" id="noteBody" required>${body}</textarea>
    </form>
  `;
}

export function renderNewNoteForm() {
  attachViewToContentArea(noteFormView({ title: '', body: '' }));
  activateBtns('noteForm');
}
export function noteFormView(note) {
  const newElem = document.createElement('div');
  newElem.className = 'noteEditor';
  newElem.innerHTML = editorElm({ title: note.title, body: note.body });
  return newElem;
}

export function noteFormState() {
  const title = document.getElementById('noteTitle').value;
  const body = document.getElementById('noteBody').value;
  return {
    title,
    body
  };
}
