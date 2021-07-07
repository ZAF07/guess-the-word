/* eslint-disable no-param-reassign */
const scramble = (a) => {
  a = a.split('');

  for (let b = a.length - 1; b > 0; b -= 1) {
    const c = Math.floor(Math.random() * (b + 1));
    const d = a[b];
    a[b] = a[c];
    a[c] = d;
  }
  return a.join('');
};

const scrambleText = (line) => {
  const lines = line.split('\n');
  for (let i = 0; i < lines.length; i += 1) {
    lines[i] = scramble(lines[i]).toUpperCase().split('').join(' ');
  }

  return lines.join('\n');
};

export default scrambleText;
