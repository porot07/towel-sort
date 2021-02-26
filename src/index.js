
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  if (matrix.length === 0) return [];
  return matrix.reduce((acc, el, ind) => {
    if (ind % 2 === 1 && ind !== 0) {
      return [...acc, ...el.sort((a, b) => b - a)];
    }
    return [...acc, ...el];
  }, []);
}
