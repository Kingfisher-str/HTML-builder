const fs = require('fs');
const path = require('path');
const stream = fs.createReadStream(path.join(__dirname,'text.txt'), 'utf-8');
// stream.on('data', chunk => console.log(chunk));

let data = '';

stream.on('data', chunk => data += chunk);
stream.on('end', () => console.log( data));
stream.on('error', error => console.log('Error', error.message));