class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    let i = 0;
    while (i < this.length && this.items[i] < item) {
      i++;
    }
    this.items.splice(i, 0, item);
    this.length++;
  }

  get(pos) {
    if (pos >= 0 && pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length > 0) {
      return this.items[this.length - 1];
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.length > 0) {
      return this.items[0];
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
