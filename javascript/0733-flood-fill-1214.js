// 12/14

var floodFill = function(image, sr, sc, newColor) {
  if (image[sr][sc] == newColor) {
    return image;
  }

  const startingColor = image[sr][sc];
  floodFillRecurse(image, sr, sc, newColor, startingColor);
  return image;
};

const floodFillRecurse = function(image, sr, sc, newColor, startingColor) {
  if (
    sr < 0 ||
    sr >= image.length ||
    sc < 0 ||
    sc >= image[0].length ||
    image[sr][sc] == newColor ||
    image[sr][sc] != startingColor
  ) {
    return;
  }

  image[sr][sc] = newColor;
  floodFillRecurse(image, sr - 1, sc, newColor, startingColor); // up
  floodFillRecurse(image, sr + 1, sc, newColor, startingColor); // down
  floodFillRecurse(image, sr, sc + 1, newColor, startingColor); // right
  floodFillRecurse(image, sr, sc - 1, newColor, startingColor); // left
};
