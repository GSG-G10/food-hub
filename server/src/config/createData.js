const { writeFileSync } = require('fs');
const { join } = require('path');

const createRandomData = () => ({});

const data = createRandomData();

writeFileSync(join(__dirname, 'data.json'), JSON.stringify(data, null, '\t'));
