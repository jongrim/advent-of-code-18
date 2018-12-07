const input = require('./day2_input');

function getCountOfLetters([...letters]) {
  // could reduce cost a little by tracking if we've found a hit for 2 and 3
  const lettersHash = letters.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});
  const letterCount = Object.values(lettersHash);
  return [letterCount.indexOf(2), letterCount.indexOf(3)];
}


function loopThroughInputs(input) {
  const inputs = input.split('\n');
  let countOf2 = 0;
  let countOf3 = 0;
  inputs.forEach(i => {
    const [exactly2, exactly3] = getCountOfLetters(i);
    if (exactly2 >= 0) countOf2++;
    if (exactly3 >= 0) countOf3++;
  });

  // assumes we'll have at least 1 hit on each
  return countOf2 * countOf3;
}

console.log(loopThroughInputs(input));
