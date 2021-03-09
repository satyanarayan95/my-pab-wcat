let input = process.argv.slice(2);
let display = require("./commands/display");
let ovride=require("./commands/override");
let apend=require("./commands/append");

for(let i in input){
    if(input[i]==">"){
        ovride.ride(input,i);
    }
    else if( input[i]==">>"){
        apend.apnd(input,i);
    }
    else{
        display.fn(input);
    }
}
