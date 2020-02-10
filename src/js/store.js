export const state = {
  notes: [],
  activeNoteId: null
};

export const methods = {
  getNotes: () => state.notes,
  addNote: (state, note) => {
    state.notes = [...state.notes, note];
  },
  getNote: (state, noteId) => {
    const targetNotes = state.notes.filter(({ id }) => id === noteId);
    return targetNotes[0];
  },
  editNote: (state, noteId, params) => {
    let updatedNote;
    const updatedNotes = state.notes.map(note => {
      if (note.id === noteId) {
        note.title = params.title;
        note.body = params.body;
        updatedNote = note;
      }
      return note;
    });
    state.notes = updatedNotes;
    return updatedNote;
  },
  setActiveNote: noteId => (state.activeNoteId = noteId)
};
