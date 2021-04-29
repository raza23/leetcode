var maxArea = function(height) {
  let maxArea = 0;
  const l = height.length;
  let i = 0;
  let j = l - 1;
  while (i < j) {
    const area = (j - i) * Math.min(height[i], height[j]);
    console.log(area);
    if (area > maxArea) {
      maxArea = area;
    }
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  return maxArea;
};
