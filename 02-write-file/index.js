const fs = require('fs');
const path = require('path');
const process = require('process');
const { stdin, stdout } = process;


const output = fs.createWriteStream(path.join(__dirname,'text.txt'));
stdout.write('Введите какой-нибудь текст:');
stdin.on('data', data => {
    let str = data.toString().trim() ;
    if(str == 'exit') {
        console.log('Процесс завершен, удачи!');
        process.exit();
       
      } else
    output.write(data)});

process.on('SIGINT', () => {stdout.write('Процесс завершен, удачи!'); process.exit();});

