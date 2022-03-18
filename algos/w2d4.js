function strDecode(str){
    let newSTR = ""
    for(let i = 0;i < str.length;i++){
        if (isNaN(str[i]) == true ){
            let num = 0
            let strtemp = str[i]
            while (isNaN(str[i+1]) == false ){
                num = num + str[i+1]
                i++
            }
            newSTR = newSTR + strtemp.repeat(num)
        }
    }
    return newSTR
}
console.log(strDecode("a11b4c1d2"))