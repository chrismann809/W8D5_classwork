

// const c = new Clock();

const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if(numsLeft === 0){
        completionCallback(sum);
    }
    else {
        reader.question('Please enter a number: ', function(numInput) {
            let num = parseInt(numInput);
            sum += num;
            console.log(`Sum so far: ${sum}`);
            addNumbers(sum, numsLeft-1, completionCallback);
        });
    }
};

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


//  -----------------------------------------------------------------------------------------------------------

