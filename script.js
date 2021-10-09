console.log('hello!');

const openings = {
  '{': '{',
};

const closings = {
  '}': '}',
};

const ex1 = '{}{{}}}';

function isValidaPattern(pattern) {
  const stack = [];

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const preChar = stack[stack.length - 1];
    if (openings[char]) {
      // push into stack if opening
      stack.push(char);
    } else if (openings[preChar]) {
      // pop from stack if closing
      stack.pop();
    } else {
      stack.push(char); // in case of irregular pattern keep pushing
    }
    console.log(i, stack);
  }
  return stack.length === 0 ? 'valid' : 'invalid';
}

console.log(isValidaPattern(ex1));
