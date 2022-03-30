//https://www.rapidtables.com/convert/number/binary-to-decimal.html
function binary2decimal(str){

}


binary2decimal("10111") //23

const bin_to_int = (bin) => {
    let output = 0;
    for (let i = 0; i < bin.length; i++) {
        let bit = parseInt(bin.charAt(i));

        if (isNaN(bit)) continue;

        output = (output << 1) + bit;
    }
    return output;
}


function binary2decimal(str) {
    let output = 0;
    let power = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === "1") {
            output += Math.pow(2, power);
        }
        power += 1;
    }
    return output;
}

console.log(binary2decimal("10111")); //23
console.log(binary2decimal("10111001")); //185
console.log(binary2decimal("1")); //1
console.log(binary2decimal("0")); //0