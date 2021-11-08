const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'project-dist'), { recursive: true }, err => {
    if(err) throw err; 
    // console.log('Все папки успешно созданы');
 });
 fs.mkdir(path.join(__dirname, 'project-dist','assets'), { recursive: true }, err => {
    if(err) throw err; 
    // console.log('Все папки успешно созданы');
 });
 const outputhtml = fs.createWriteStream(path.join(__dirname,'project-dist','index.html'));
 const outputcss = fs.createWriteStream(path.join(__dirname,'project-dist','syle.css'));

 function copyDir1() {
       fs.readdir(path.join(__dirname, 'assets'), (err, dirs) => {
        if (err) {
            console.log(err);
            return
        }
      dirs.forEach(dir => {
        console.log(dir);
        fs.stat(path.join(__dirname, 'assets', dir ), (err, stats) => {
            if (err) {
                console.error(err)
                return
            }
            if (stats.isDirectory()){
                    fs.mkdir(path.join(__dirname, 'project-dist','assets', dir), { recursive: true }, err =>{
                    if(err) {
                        console.error(err)
                return
                    }; 
                    
                })
                fs.readdir(path.join(__dirname, 'assets',dir), (err, dirs2) => {
                    if (err) {
                        console.log(err);
                        return
                    }
                  dirs2.forEach(dir2 => {
                    console.log(dir2);
                    fs.stat(path.join(__dirname, 'assets', dir, dir2 ), (err, stats) => {
                        if (err) {
                            console.error(err)
                            return
                        }
                        if (stats.isFile()){
                            console.log(path.join(__dirname, 'assets', dir, dir2));  
                            fs.copyFile(path.join(__dirname, 'assets', dir, dir2),path.join(__dirname,'project-dist', 'assets', dir, dir2),err =>{
                                if(err) {
                                    console.error(err)
                            return
                                }; 
                               
                            })
            
                          }
            
                    })
                    
                  });
                });
              }

        })
        
      });
    });
    
    }
    copyDir1();

function copyCss(){
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
                         outputcss.write(`${array[i]}\n`)
                    }
                });  
               
            }
        })
      });
    
    
    
    });
}
copyCss();

function copyHtml(){
    fs.copyFile(path.join(__dirname, 'template.html'),path.join(__dirname, 'project-dist', 'index.html'),err =>{
        if(err) {
            console.error(err)
    return
        }; 
        console.log(11111)
    })
}
copyHtml();

// function replaceHtml(){
// //     //let array=[];
//  fs.readdir(path.join(__dirname, 'components'), (err, files3) => {
//          if (err) {
//             console.log(err);
//             return
//         }
//       files3.forEach(file3 => {

//                 fs.readFile(path.join(__dirname, 'components', file3 ),'utf8', function(err, data) {
//                     if(err) {
//                     console.error(err)
//                     return
//                     }
//                     let basename = path.basename(file3,ext);
//                     //     basename = basename.split('.').join('');
//                     console.log(basename);
//                     let regExp = /{{${basename}}}/g;
//                     let content = data
//                     let newData = data.replace (regExp, content);
//                     console.log(newData);
                 
                   
//                 });  
               
//             }
// //         })
// //       });
    
    
    
// //     });
//       )})
// }
// replaceHtml();