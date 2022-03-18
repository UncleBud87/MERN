/*

input: "sweet potato"

output: "swet poa"

*/


function dedupeString(str){
    //set output to an empty string
    let output = ""
    //print each letter of the string
    let obj = {}
    for (let x=0 ; x < str.length; x++){
        if(str[x] in obj){
            obj[str[x]] += 1
        }else{
            //if the current character does not exist as a key in the object, create a key representing the current character and set the value to equal to 1
            obj[str[x]] = 1
        }
    }
    for(const key in obj){
        //console.log(`${key}: ${obj[key]}`);
        output += key// + obj[key]
    }
    return output


}

console.log(dedupeString("sweet potato")) //"swet poa"