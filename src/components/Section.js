export class Section {
  constructor({ renderer }, sectionSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(sectionSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderer(array) {
    array.forEach((item) => {
      this._renderer(item);
    });
  }
}
