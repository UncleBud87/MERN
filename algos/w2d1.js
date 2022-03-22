
const stringBreak = (str) => {
    const myArray = str.split(" ");
    return myArray;
}



const stringToArray = (input) => {
    let output = [];
    let matches = input.matchAll(/[\w\']+/g)
    for (let match of matches) {
        output.push(match[0]);
    }
    return output;
}





const stringArray = (str) => {
    let word = "";
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            word += str[i];
        } else {
            if (word !== "") {
                arr.push(word);
                word = "";
            }
        }
    } return arr;
}



input: "  hello hey how   you   doing?   "
output: ["hello", "hey", "how", "you", "doing?"]



arrString = (str) => {
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        let newStr = '';
        while (str[i] == ' ') {
            i++
        }
        while (str[i] != " " && i < str.length) {
            newStr += str[i];
            i++

        }
        arr.push(newStr);
    }
    return arr;
}
console.log(arrString("  hello hey how    you   doing?"))


/*

create a function that accepts a string as an input and outputs an array with each word from the string


input: "  hello hey how   you   doing?   "
output: ["hello", "hey", "how", "you", "doing?"]

*/

const stringToWord = (str) => {
    let word = '';
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            word += str[i];
            //   console.log(str[i]);
        } else {
            if (word.length > 0) {
                arr.push(word);
                word = '';
            }
        }
    }
    return arr;
};
console.log(stringToWord('  hello hey how   you   doing?   '));
console.log(stringToWord(' good morning everyone!'));
/*
str = '  hello hey how   you   doing?   '
word = ''
arr= ['hello']
i=0,1,2,3,4,5,6,7,8
*/


function arrayMaker(str) {
    let arr = []
    for (let i = 0; i < str.length; i++) {
        let temp = ""
        if (str[i] != " ") {
            // console.log(str[i])
            // break
            while (str[i] != " ") {
                temp = temp + str[i]
                i++
            }
            arr.push(temp)
        }
    }
    return arr
}

console.log(arrayMaker("  hello hey how   you   doing?   "))