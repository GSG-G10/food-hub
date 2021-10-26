/* eslint-disable no-console */
const data = require('./data.json');

const importDataToDatabase = async () => {
  console.log(`Data ${JSON.stringify(data, null, 2)}`);
  return 'Database filled with data!';
};

importDataToDatabase().then(console.log);
