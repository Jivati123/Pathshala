console.log("Take 3 numbers x, y, and z and print the maximum of the taken numbers.");

let maxNumber;

function findMax(x, y, z) {

    if (x>=y && x>=z){
        maxNumber = x;
    }
    else if (y>=x && y>=z){
        maxNumber = y;
    }
    else {
        maxNumber = z;
    }
    console.log("The maximum number is:", maxNumber);

}

findMax(3,9,2);


// console.log("Write javascript code to check if a number is an odd number or an even number.");

// function findMax(x, y, z) {
//     let maxNumber = Math.max(x, y, z);
//     console.log("The maximum number is:", maxNumber);
// }

// findMax(5,6,7);
// findMax(5,8,19);



    