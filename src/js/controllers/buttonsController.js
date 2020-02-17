import { noteFormState, renderNewNoteForm } from '../views/noteFormView';
import {
  saveNote,
  editNote,
  updateNote,
  deleteNote
} from './noteController';

import { state } from '../store';
import { isNoteValid } from '../utils/helpers';

export function onClickSaveBtn() {
  const { title = '', body = '' } = noteFormState();
  if (isNoteValid({ title, body })) {
    saveNote({ title, body });
  }
}
export function onClickDeleteBtn() {
  const { activeNoteId } = state;
  if (activeNoteId) deleteNote(activeNoteId);
}
export function onClickEditBtn() {
  editNote(state.activeNoteId);
}

export function onClickNewNoteBtn() {
  renderNewNoteForm();
}

export function onClickUpdateNoteBtn() {
  const { activeNoteId } = state;
  const { title = '', body = '' } = noteFormState();
  if (isNoteValid({ title, body })) {
    updateNote(activeNoteId, { title, body });
  }
}
