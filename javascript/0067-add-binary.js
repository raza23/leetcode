var addBinary = function(a, b) {
  let carryover = 0;
  let maxLength = Math.max(a.length, b.length);
  let result = Array(maxLength).fill(0);
  let i = 0;

  while (i < maxLength) {
    const sum =
      (a.length - 1 - i < 0 ? 0 : a[a.length - 1 - i] * 1) +
      (b.length - 1 - i < 0 ? 0 : b[b.length - 1 - i] * 1) +
      carryover;

    result[maxLength - 1 - i] = sum % 2;
    carryover = Math.floor(sum / 2);
    i++;
  }
  if (carryover > 0) {
    result.unshift(1);
  }
  return result.join("");
};
