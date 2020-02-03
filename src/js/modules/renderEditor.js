const editorElm = `
    <form class="newNoteForm">
      <input type="text" name="title" placeholder="title" class="newNoteForm__title" id="noteTitle">
      <textarea placeholder="start typing..." class="newNoteForm__body" id="noteBody"></textarea>
    </form>
`;

function showSaveBtn() {
  const header = document.getElementById('contentHeader');
  if (header) header.classList.add('visible');
}

function renderEditor() {
  // first get the current child of main content
  const contentArea = document.getElementById('contentArea');
  // remove it
  if (contentArea && contentArea.childElementCount === 1) {
    contentArea.removeChild(contentArea.firstElementChild);
  }
  // append the editor element
  const newElem = document.createElement('div');
  newElem.className = 'noteEditor';
  newElem.innerHTML = editorElm;
  contentArea.appendChild(newElem);
  showSaveBtn();
}

export default renderEditor;
