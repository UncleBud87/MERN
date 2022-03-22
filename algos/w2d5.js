

function dedupeString(str) {

    let output = ""
    let obj = {}

    for (let x = 0; x < str.length; x++) {
        if (str[x] in obj) {
            obj[str[x]] += 1
        } else {
            obj[str[x]] = 1
        }
    }
    for (const key in obj) {
        output += key
    }
    return output


}

console.log(dedupeString("sweet potato")) //"swet poa"


/*

input: "sweet potato"

output: "swet poa"

*/


function dedupeString(str) {
    let newSTR = ""
    for (let i = 0; i < str.length; i++) {
        let duplicate = false
        for (x = 0; x < i; x++) {
            if (str[i] == str[x]) {
                duplicate = true
            }
        }
        duplicate == false ? newSTR = newSTR + str[i] : null
    }
    return newSTR
}


console.log(dedupeString("sweet potato")) //"swet poa"