var isOneBitCharacter = function(bits) {
  let length = bits.length - 1;
  let i = 0;
  for (i = 0; i < length; i++) {
    i += bits[i];
  }
  return i <= length;
};
