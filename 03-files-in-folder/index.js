const fs = require('fs');
const path = require('path');
fs.readdir(path.join(__dirname, 'secret-folder'), (err, files) => {
    if (err) {
        console.log(err);
        return
    }
  files.forEach(file => {
    // console.log(file);
    fs.stat(path.join(__dirname, 'secret-folder', file ), (err, stats) => {
        if (err) {
            console.error(err)
            return
        }
        if (stats.isFile()){
            let ext = path.extname(file);
            ext = ext.split('.').join('');
            let basename = path.basename(file,ext);
            basename = basename.split('.').join('');

        console.log(basename,'-', ext,'-', stats.size,'b');
        }
    })
  });
});