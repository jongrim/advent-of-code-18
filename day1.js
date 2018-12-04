const changes = require('./day1_input');

function getSum() {
  const inputs = changes.split('\n');
  const result = inputs.reduce((acc, cur) => {
    const operation = cur.substr(0, 1);
    const value = cur.slice(1);
    if (operation === '+') {
      return acc + Number(value);
    }
    return acc - Number(value);
  }, 0);
  console.log(result);
}

function firstDuplicateFrequency() {
  let finished = false;
  const frequencies = {};
  const inputs = changes.split('\n');
  let duplicateFrequency;
  let initial = 0;
  while (!finished) {
    initial = inputs.reduce((acc, cur) => {
      const operation = cur.substr(0, 1);
      const value = cur.slice(1);
      let result;
      if (operation === '+') {
        result = acc + Number(value);
      } else {
        result = acc - Number(value);
      }
      if (frequencies[result] && !finished) {
        finished = true;
        duplicateFrequency = result;
      } else {
        frequencies[result] = true;
      }
      return result;
    }, initial);
  }

  console.log(duplicateFrequency);
}

getSum();
firstDuplicateFrequency();
