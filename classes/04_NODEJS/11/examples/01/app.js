const obj = {
  count: 0,
  increment() {
    this.count++;

    return this;
  },
  decrement() {
    this.count--;

    return this;
  },
};

obj.increment().increment().increment().increment().decrement();

console.log(obj.count);
