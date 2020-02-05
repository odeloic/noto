import { attachViewToContentArea } from '../controllers/contentAreaController';
import { activateBtns } from '../controllers/headerController';
function editorElm({ title = '', body = '' }) {
  return `
    <form class="newNoteForm">
      <input type="text" name="title" placeholder="title" class="newNoteForm__title" id="noteTitle" value="${title}">
      <textarea placeholder="start typing..." class="newNoteForm__body" id="noteBody" value="${body}"></textarea>
    </form>
  `;
}

export function renderNewNoteForm() {
  attachViewToContentArea(noteFormView({ title: '', note: '' }));
  activateBtns('noteForm');
}
export function noteFormView(note) {
  console.log('I am just running');
  const newElem = document.createElement('div');
  newElem.className = 'noteEditor';
  newElem.innerHTML = editorElm(note);
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
