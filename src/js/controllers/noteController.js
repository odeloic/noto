import Note from '../models/Note';
import { attachViewToContentArea } from '../controllers/contentAreaController';
import { viewNoteView } from '../views/viewNoteView';
import { noteFormView } from '../views/noteFormView';

export function saveNote(note) {
  const newNote = new Note(note.title, note.body);
  // notes.push(note); for later maybe to access Notes saved
  const notesList = document.getElementById('notesList');
  notesList.appendChild(newNote.renderNote());
  attachViewToContentArea(viewNoteView(newNote.getNote()), 'viewNote');
}
export function editNote(note) {
  attachViewToContentArea(noteFormView(note), 'viewNote');
}
export function deleteNote(noteId) {}
