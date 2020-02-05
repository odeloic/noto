import { getFormattedDate } from '../utils/helpers';

export default class Note {
  constructor(title, body) {
    this.title = title;
    this.body = body;
    this.updated_at = new Date();
  }

  getNote() {
    return {
      title: this.title,
      body: this.body,
      date: this.updated_at
    };
  }

  updateNote({ title, body }) {
    if (title) this.title = title;
    if (body) this.body = body;
    this.updated_at = new Date();
  }

  renderNote() {
    const noteMarkup = `
      <article class="todo">
        <div class="pd-container">
          <header class="todo__header">
            <h3 class="todo__title color-white">${this.title}</h3>
            <span class="todo__date">${getFormattedDate(this.updated_at)}</span>
          </header>
          <!-- todo header-->
          <div class="todo__body">
            <p class="todo__summary">
              ${this.body}
            </p>
          </div>
          <!-- todo body-->
          <footer class="todo__footer">
            <button class="link color-red">Delete</button>
          </footer>
          <!-- todo footer -->
        </div>
      </article>
    `;
    const newNoteEl = document.createElement('li');
    newNoteEl.innerHTML = noteMarkup;
    return newNoteEl;
  }
}
