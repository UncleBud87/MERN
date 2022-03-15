/*
rotateString(str,num)
//Given a string and a number, rotate the string by that number amount and return the rotated string

input: "good morning", 3
output: "inggood morn"


input: "abcde", 5
output: "abcde"









isRotation(str1,str2)
//Given 2 strings, return true if they are rotations of one another, false if they are not

input: "good morning", "rninggood mo"
output: true


input: "abcde", "abccde"
output: false


//1
const rotateString = (str, val) =>{
    var newStr = str;
    for(var i = 0; i < val; i++){
        newStr += newStr[0];
        newStr = newStr.substr(1);
    }
    return newStr
}

//2
const isRotation = (str, str2) =>{
    if(str.length != str2.length){
        return false;
    }
    var newStr = str2;
    for(var i = 0; i <str.length; i++){
        if(newStr == str){
            return true;
        }
        newStr += newStr[0];
        newStr = newStr.substr(1);
        console.log(newStr);
    }
    return false;
}

console.log(rotateString("hello", 3))
console.log(isRotation("good morning", "rninggood mo"))



rotateString(str,num)
Given a string and a number, rotate the string by that number amount and return the rotated string

input: "good morning", 3
output: "inggood morn"


input: "abcde", 5
output: "abcde"





const rotateString = (str, num ) => {
    //string @ index 0 is equal to 5 will give u an error
    let output = ""

    for(let j = str.length-num; j < str.length; j++){
        output += str[j]

    }
    for(let i = 0; i < str.length- num; i++){
        output += str[i]
    }
console.log(output)
}

rotateString("good morning america", 5)

rotateString("patriots", 7)

rotateString("compete", 4)


const rotateString = (str, num) => {
    rotate = num % str.length

    if (rotate == 0){
        return str
    }
    let startStr = str.slice(-rotate)
    let endStr = ""
    
    for (let i = 0; i < str.length-rotate; i++){
        endStr += (str[i])
    }
    str = startStr + endStr

    return str
}


console.log(rotateString("good morning", 15))


const isRotation = (str1, str2) => {
    if (str1.length != str2.length){
        return false
    }
    let i = 0
    while (i < str2.length){
        if (str1 == rotateString(str2, i)){
            return true
            
        }
        i++
        
    }

    return false

}

console.log(isRotation("abcde", "abccde"))
console.log(isRotation("good morning", "rninggood mo"))


function rotateString(str,num){
    strDone = ""
    num = num % str.length
for(let i = num;i > 0;i--){
    strDone = strDone + str[str.length-i]
}
for(let x = 0; x <str.length-num;x++){
    strDone = strDone + str[x]
}
console.log(strDone)
}

rotateString("good morning", 3)
rotateString("good morning", 8)
rotateString("good morning", 6)
rotateString("good morning", 555)
*/