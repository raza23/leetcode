var MyHashSet = function() {
  this.hash = {};
};

MyHashSet.prototype.add = function(key) {
  return (this.hash[key] = true);
};

MyHashSet.prototype.remove = function(key) {
  delete this.hash[key];
};

MyHashSet.prototype.contains = function(key) {
  return this.hash[key] !== undefined;
};
