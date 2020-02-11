import { noteFormState } from '../views/noteFormView';
import { saveNote, editNote, updateNote } from '../controllers/noteController';
import { renderNewNoteForm } from '../views/noteFormView';
import { state } from '../store';
import { isNoteValid } from '../utils/helpers';
export function onClickSaveBtn() {
  const { title = '', body = '' } = noteFormState();
  if (isNoteValid({ title, body })) {
    saveNote({ title, body });
  }
}
export function onClickDeleteBtn() {}
export function onClickEditBtn() {
  editNote(state.activeNoteId);
}

export function onClickNewNoteBtn() {
  renderNewNoteForm();
}

export function onClickUpdateNoteBtn() {
  const activeNoteId = state.activeNoteId;
  const { title = '', body = '' } = noteFormState();
  if (isNoteValid({ title, body })) {
    updateNote(activeNoteId, { title, body });
  }
}
