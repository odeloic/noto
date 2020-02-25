/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
export const state = {
  notes: localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [],
  activeNoteId: null
};

export const methods = {
  getNotes: () => state.notes,
  addNote: (state, note) => {
    state.notes = [...state.notes, note];
    localStorage.setItem('notes', JSON.stringify(state.notes));
  },
  getNote: (state, noteId) => {
    const targetNotes = state.notes.filter(({ id }) => id === noteId);
    return targetNotes[0];
  },
  setActiveNote(noteId) {
    state.activeNoteId = noteId;
  },
  editNote: (state, noteId, params) => {
    let updatedNote;
    const updatedNotes = state.notes.map((note) => {
      if (note.id === noteId) {
        note.title = params.title;
        note.body = params.body;
        updatedNote = note;
      }
      return note;
    });
    state.notes = updatedNotes;
    localStorage.setItem('notes', JSON.stringify(state.notes));
    return updatedNote;
  },
  deleteNote: (state, noteId) => {
    const notes = state.notes.filter((note) => noteId !== note.id);
    state.notes = notes;
    localStorage.setItem('notes', JSON.stringify(state.notes));
  }
};
