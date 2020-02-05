export function viewNoteView(note) {
  const viewNoteNode = document.createElement('div');
  viewNoteNode.className = 'view-note';
  viewNoteNode.innerHTML = `
    <h2 class="view-note__title">${note.title}</h2>
    <p>${note.body}</p>
  `;
  return viewNoteNode;
}
