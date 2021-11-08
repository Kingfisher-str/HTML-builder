const fs = require('fs');
const path = require('path');
// const process = require('process');
let array=[];

const output = fs.createWriteStream(path.join(__dirname,'project-dist','bundle.css'));
fs.readdir(path.join(__dirname, 'styles'), (err, files) => {
    if (err) {
        console.log(err);
        return
    }
  files.forEach(file => {
    // console.log(file);
    fs.stat(path.join(__dirname, 'styles', file ), (err, stats) => {
        if (err) {
            console.error(err)
            return
        }
        let ext = path.extname(file);
        if (stats.isFile() && ext==='.css'){
            fs.readFile(path.join(__dirname, 'styles', file ), function(err, data) {
                if(err) {
                console.error(err)
                return
                }
                array = data.toString().split("\n");
                for(i in array) {
                    // console.log(array[i]);
                     output.write(`${array[i]}\n`)
                }
            });  
           
        }
    })
  });



});


