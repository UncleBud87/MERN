//https://www.rapidtables.com/convert/number/decimal-to-binary.html


// function dec2binary(num) {
//     let output = [];
//     while(Math.floor(num /2) > 0) {
//         output = output + Math.floor(num % 2 !== 0)
//         num = num/2
//     }
//     console.log(output)
//     return output;
// }



// console.log(dec2binary(23)) //10111



function dec2binary(num){
    let output = "";
    while (num > 0){
        if (num % 2 == 1) {
            output += 1
            num = Math.floor(num / 2)
        } else {
            output += 0
            num = Math.floor(num / 2)
        }
    }
    return output.split("").reverse().join("");
}

console.log(dec2binary(23)) //10111


const binaryConvert = (num) => {
    var quotient = null;
    var result = "";
    while(quotient != 0){
        if(num % 2 == 0){
            num = num/2;
            quotient = num
            result = 0 + result
        }
        else{
            num = Math.floor(num/2);
            quotient = num
            result = 1 + result
        }
    }
    return result;
}

console.log(binaryConvert(23))