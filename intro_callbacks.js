class Clock {
    constructor() {
        let d = new Date();
        this.hours = d.getHours();
        this.minutes = d.getMinutes();
        this.seconds = d.getSeconds();
        for (let i = 0; i < 100000; i+= 1000) {
            setTimeout(() => {
                this._tick();
            }, i);
        }
    }

    printTime () {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
        this.seconds++;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours++;
                if (this.hours === 24) {
                    this.hours = 0;
                } 
            }
        }
        this.printTime();
    }
}

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

// const readline = require("readline");

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`Is ${el1} > ${el2}? 'true' or 'false': `, function(boolean) {
    let answer;
    boolean === `true` ? answer = true : answer = false;
    callback(answer);
  });
}

// askIfGreaterThan(1, 2, function(boolean) {
//     if (boolean) {
//         console.log('yay');
//     } else {
//         console.log('nay');
//     }
// });

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
    if (i == arr.length - 1) {
        outerBubbleSortLoop(madeAnySwaps);
    } else {
        askIfGreaterThan(arr[i], arr[i + 1], function(boolean) {
            
            if (boolean) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
        });
    }
}

innerBubbleSortLoop([2,1,3], 0, false, "test");
// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.

  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
