import { renderNewNoteForm } from './views/noteFormView';
import {
  onClickSaveBtn,
  onClickEditBtn,
  onClickDeleteBtn,
  onClickNewNoteBtn,
  onClickUpdateNoteBtn
} from './controllers/buttonsController';
import { deleteNote } from './controllers/noteController';

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-note-btn')) {
    const noteId = e.target.parentElement.parentElement.parentElement.parentElement.id;
    deleteNote(noteId);
  }
  if (e.target.id === 'showEditorBtn') renderNewNoteForm();
  if (e.target.id === 'editBtn') onClickEditBtn();
  if (e.target.id === 'saveBtn') onClickSaveBtn();
  if (e.target.id === 'deleteBtn') onClickDeleteBtn();
  if (e.target.id === 'newNoteBtn') onClickNewNoteBtn();
  if (e.target.id === 'updateNoteBtn') onClickUpdateNoteBtn();
});
