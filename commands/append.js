const fs=require("fs");

function append_file(input,i){
    let file1=input[i-1];
    let file2=input[i+1];

    let buffer=fs.readdirSync(file1,'utf-8');
    fs.appendFileSync(file2, buffer);
}

module.exports={
    apnd:append_file,
};