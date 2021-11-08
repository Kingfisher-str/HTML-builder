const fs = require('fs');
const path = require('path');

function copyDir() {
fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, err => {
    if(err) throw err; 
    // console.log('Все папки успешно созданы');
 });
 fs.readdir(path.join(__dirname, 'files'), (err, files) => {
    if (err) {
        console.log(err);
        return
    }
  files.forEach(file => {
    // console.log(file);
    fs.stat(path.join(__dirname, 'files', file ), (err, stats) => {
        if (err) {
            console.error(err)
            return
        }
        if (stats.isFile()){
                fs.copyFile(path.join(__dirname, 'files', file),path.join(__dirname, 'files-copy', file),err =>{
                if(err) {
                    console.error(err)
            return
                }; 
            })

        // console.log(file);
        }
    })
  });
});

}
copyDir();
