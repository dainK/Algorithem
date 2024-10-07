const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    var r = str.split('').map(char => {
            // console.log(char);
            if (char === char.toUpperCase()) {
                // console.log(char.toLowerCase());
                return char.toLowerCase();
            } else {
                // console.log(char.toUpperCase());
                return char.toUpperCase();
            }
        }).join('');
    console.log(r);
});