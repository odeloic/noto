import { getFormattedDate } from '../utils/helpers';

export default class Note {
  constructor(title, body) {
    this.id = title
      .toLowerCase()
      .split(' ')
      .join('-');
    this.title = title;
    this.body = body;
    this.updated_at = new Date();
  }

  getNote() {
    return {
      id: this.id,
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

  // eslint-disable-next-line class-methods-use-this
  renderNote({
    id,
    title,
    body,
    date
  }) {
    const noteMarkup = `
      <article class="todo">
        <div class="pd-container">
          <header class="todo__header">
            <h3 class="todo__title color-white">${title}</h3>
            <span class="todo__date">${getFormattedDate(date)}</span>
          </header>
          <!-- todo header-->
          <div class="todo__body">
            <p class="todo__summary">
              ${body}
            </p>
          </div>
          <!-- todo body-->
          <footer class="todo__footer">
            <button class="btn color-white delete-note-btn btn-icon"><i class="fas fa-trash-alt"></i></button>
          </footer>
          <!-- todo footer -->
        </div>
      </article>
    `;

    const newNoteEl = document.createElement('li');
    newNoteEl.id = id;
    newNoteEl.innerHTML = noteMarkup;
    return newNoteEl;
  }
}
