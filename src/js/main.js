import { renderNewNoteForm } from './views/noteFormView';
import {
  onClickSaveBtn,
  onClickEditBtn,
  onClickDeleteBtn
} from './controllers/buttonsController';

const showEditorBtn = document.getElementById('showEditorBtn');
const saveBtn = document.getElementById('saveBtn');
const editBtn = document.getElementById('editBtn');
const deleteBtn = document.getElementById('deleteBtn');
showEditorBtn.addEventListener('click', renderNewNoteForm);
if (saveBtn) saveBtn.addEventListener('click', onClickSaveBtn);
if (editBtn) editBtn.addEventListener('click', onClickEditBtn);
if (deleteBtn) deleteBtn.addEventListener('click', onClickDeleteBtn);
