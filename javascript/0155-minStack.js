let MinStack = function() {
  this.stack = new Stack();
  this.minStack = new Stack();
};

MinStack.prototype.push = function(x) {
  this.stack.push(x);

  if (this.minStack.size === 0) {
    this.minStack.push(x);
  } else if (x <= this.minStack.peek()) {
    this.minStack.push(x);
  }
};

MinStack.prototype.pop = function() {
  let removedElement = this.stack.pop();
  if (removedElement === this.minStack.peek()) {
    this.minStack.pop();
  }
};

MinStack.prototype.top = function() {
  return this.stack.peek();
};

MinStack.prototype.getMin = function() {
  return this.minStack.peek();
};

// ! create a stack data structure
class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(val) {
    this.storage[this.size] = val;
    this.size++;
  }

  pop() {
    let top = this.storage[this.size - 1];
    this.size--;
    delete this.storage[this.size];
    return top;
  }

  peek() {
    return this.storage[this.size - 1];
  }

  empty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}
