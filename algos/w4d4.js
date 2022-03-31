function dec2hex(num){
    let output = ''



    return output
}




console.log(dec2hex(58)) //3A

function dec2hex(num) {
    if (num === 0) {
        return num;
    }

    let output = '';
    let remainder = [];
    let convert = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };

    while (num > 0) {
        remainder.push(num % 16);
        num = Math.floor(num / 16);
    }

    for (let i = remainder.length - 1; i >= 0; i--) {
        if (remainder[i] >= 10) {
            output += convert[remainder[i]];
        } else {
            output += remainder[i];
        }
    }

    return output;
}

const int_to_hex = (num) => {
    let output = "";
    do {
        for (let i = 0; i < 2; i++) {
            let masked = num & 15;
            let hexitCode = masked <= 9 ? 48 + masked : 55 + masked;
            let hexit = String.fromCharCode(hexitCode);
            output = `${hexit}${output}`;
            num >>= 4;
        }
        output = ` ${output}`;
    } while (num > 0)
    return `0x${output.slice(1)}`;
}

const dec2hex = (num) => {
    let result = '';
    const options = '0123456789ABCDEF';
    while (num > 0) {
        let x = num % 16;
        result = options.charAt(x) + result;
        num = Math.floor(num / 16);
    }return result || '0';
}