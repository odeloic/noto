import Note from '../models/Note';
import { attachViewToContentArea } from '../controllers/contentAreaController';
import { viewNoteView } from '../views/viewNoteView';
import { noteFormView } from '../views/noteFormView';
import { state, methods } from '../store';

export function saveNote(note) {
  const newNote = new Note(note.title, note.body);
  methods.addNote(state, newNote);
  const notesList = document.getElementById('notesList');
  notesList.appendChild(newNote.renderNote(newNote.getNote()));
  attachViewToContentArea(viewNoteView(newNote.getNote()), 'viewNote');
  methods.setActiveNote(newNote.id);
}

export function editNote(noteId) {
  const activeNote = methods.getNote(state, noteId);
  attachViewToContentArea(noteFormView(activeNote), 'editForm');
}

export function deleteNote(noteId) {}

export function getNote(noteId) {
  return methods.getNote(state, noteId);
}

export function updateNote(noteId, params) {
  const updatedNote = methods.editNote(state, noteId, params);
  const notesListNode = document.getElementById('notesList');
  const oldNoteNode = document.getElementById(noteId);
  const newNoteNode = updatedNote.renderNote(updatedNote.getNote());
  notesListNode.replaceChild(newNoteNode, oldNoteNode);
}
