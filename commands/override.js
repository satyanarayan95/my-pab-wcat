const fs = require('fs');

function ovr(input, i) {
    let file1 = input[i - 1];
    let file2 = input[i + 1];
    let buffer=fs.readdirSync(file1,'utf-8');
    function replaceContentsSync(file, replacement) {

        var contents = fs.readFileSync(replacement);
        fs.writeFileSync(file, contents);

    }
    replaceContentsSync(file2, buffer); 
}

module.exports ={
    ride:ovr,
};