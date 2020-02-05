import { noteFormState } from '../views/noteFormView';
import { saveNote, editNote } from '../controllers/noteController';
export function onClickSaveBtn() {
  const { title = '', body = '' } = noteFormState();
  saveNote({ title, body });
}
export function onClickDeleteBtn() {}
export function onClickEditBtn() {
  const { title = '', body = '' } = noteFormState();
  editNote({ title, body });
}
