

function dedupeString(str){

    let output = ""
    let obj = {}

    for (let x=0 ; x < str.length; x++){
        if(str[x] in obj){
            obj[str[x]] += 1
        }else{
            obj[str[x]] = 1
        }
    }
    for(const key in obj){
        output += key
    }
    return output


}

console.log(dedupeString("sweet potato")) //"swet poa"