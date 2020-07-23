const { promisify } = require('util');
const request = promisify(require('request'));
const fs = require('fs');
const path = require('path');

const createOptions = (step) => {
  return {
    url: 'https://colorhunt.co/hunt.php',
    method: 'POST',
    json: true,
    headers: {
      'user-agent':
        'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36'
    },
    formData: {
      step: step,
      sort: 'new',
      tags: ''
    }
  };
};

module.exports = async () => {
  const strArr = [];
  for (let i = 1; i < 10; i++) {
    const { body } = await request(createOptions(i));
    const data = body.match(/<script>arr = \[(.+?), \];<\/script>/);
    strArr.push(data[1]);
  }
  let _string = strArr.join(',');
  _string = `[${_string}]`;

  fs.writeFile(path.resolve(__dirname, 'data/data.json'), _string, (err) => {
    if (err) {
      console.log('error...');
    }
  });
};
