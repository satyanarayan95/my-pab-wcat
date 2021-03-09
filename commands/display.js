const fs = require('fs');

function display_file(input) {
    for (let i in input) {
        if (fs.existsSync(input[i])) {
            let buffer = fs.readFileSync(input[i], 'utf-8');
            console.log(buffer);
        }
        else {
            console.log(input[i], "not a valid path");
        }
    }
}
module.exports = {
    fn: display_file,
};