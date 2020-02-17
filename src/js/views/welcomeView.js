import { attachViewToContentArea } from '../controllers/contentAreaController';

export function welcomeView() {
  const el = document.createElement('div');
  el.className = 'app-welcome';
  el.innerHTML = `
    <h2 class="color-dark">Feeling inspired ?</h2>
    <button class="btn btn--big btn--red" id="showEditorBtn">
      Start writting
    </button>
  `;
  return el;
}

export function renderWelcomeView() {
  attachViewToContentArea(welcomeView());
}
