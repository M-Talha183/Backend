const fs = require('fs');

// //  Reading file 
// fs.readFile('input.txt', 'utf8', function(err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(data);
// });

// const data = fs.readFileSync('input.txt', 'utf8');
// console.log(data);

// //  Write file 

fs.writeFile("input.txt","hellow ",(err)=>{
    if (err) throw err
})