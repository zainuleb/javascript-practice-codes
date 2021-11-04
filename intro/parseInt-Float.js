const parseInteger = (x) => {
  let y = parseInt(x);
  console.log(y, typeof y);
  console.log('here');
};

const parseFloatFoo = (x) => {
  let y = parseFloat(x);
  console.log(y, typeof y);
};

parseInteger('247');
parseFloatFoo('2.47');
