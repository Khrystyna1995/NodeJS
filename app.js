const fs = require('fs');
const path = require('path');

const dir18 = path.join(process.cwd(), 'students', '1800');
const dir20 = path.join(process.cwd(), 'students', '2000');

function moveStudents (myDir, newDir){
    fs.readdir((myDir), (error, files) => {
        if(error){
            console.log(error)
        } else {
            files.forEach(file => {
                fs.rename(path.join(myDir, file), path.join(newDir, file), error1 => {
                    console.log(error1)
                })
            })
        }    })
}

