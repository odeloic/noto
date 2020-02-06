import { renderNewNoteForm } from './views/noteFormView';
import {
  onClickSaveBtn,
  onClickEditBtn,
  onClickDeleteBtn,
  onClickNewNoteBtn,
  onClickUpdateNoteBtn
} from './controllers/buttonsController';

const showEditorBtn = document.getElementById('showEditorBtn');
const saveBtn = document.getElementById('saveBtn');
const editBtn = document.getElementById('editBtn');
const deleteBtn = document.getElementById('deleteBtn');
const newNoteBtn = document.getElementById('newNoteBtn');
const updateNoteBtn = document.getElementById('updateNoteBtn');
showEditorBtn.addEventListener('click', renderNewNoteForm);
if (saveBtn) saveBtn.addEventListener('click', onClickSaveBtn);
if (editBtn) editBtn.addEventListener('click', onClickEditBtn);
if (deleteBtn) deleteBtn.addEventListener('click', onClickDeleteBtn);
if (newNoteBtn) newNoteBtn.addEventListener('click', onClickNewNoteBtn);
if (updateNoteBtn)
  updateNoteBtn.addEventListener('click', onClickUpdateNoteBtn);
