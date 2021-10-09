const openings = {
  '{': '{',
  '[': '[',
  '(': ')',
};

const closings = {
  '}': '{',
  ']': '[',
  ')': '(',
};

const ex1 = '[{}{}]';

// need fix for irregular patters liek [)
function isValidaPattern(pattern) {
  if (pattern.length === 0) return 'invalid';
  const stack = [];

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const preChar = stack[stack.length - 1];
    if (openings[char]) {
      // push into stack if opening
      stack.push(char);
    } else if (closings[char] === preChar) {
      // pop from stack if current char is the closing of previous char
      stack.pop();
    } else {
      stack.push(char); // in case of new closings keep pushing for length check
    }
    console.log(i, stack);
  }
  return stack.length === 0 ? 'valid' : 'invalid';
}

console.log(isValidaPattern(ex1));
