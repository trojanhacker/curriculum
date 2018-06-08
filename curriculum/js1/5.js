/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (a, b) => {
  const recur = (x,y, counter=0) => {
    if (x ===counter) {
        return;
    };
    recur(x,y,counter+1);
  };
  return recur(a,b);
};

module.exports = {
  solution,
};
