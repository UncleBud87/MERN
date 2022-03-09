//https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/

const selectionSort = (arr) => {
    for(let target = arr.length - 1; target > 0; target--){
        let largest = 0;
        for(let i = 1; i <= target; i++){
            if(arr[i] > arr[largest]){
                largest = i;
            }
        }
        [arr[largest], arr[target]] = [arr[target], arr[largest]];
    }
    return(arr)
}


console.log(selectionSort([4,8,5,2,1,0,9,7]))


function selectionSort(Arr) {
    for (let i = 0; i < Arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < Arr.length; j++) {
            if (Arr[j] < Arr[min]) {
                min = j;
            }     
        }
        [Arr[i], Arr[min]] = [Arr[min], Arr[i]];
    }
    return Arr;
}

console.log(selectionSort([4,8,5,2,1,0,9,7]))


const selectionSort = (arr) =>{
    for(let end =arr.length-1; end>=0; end--){
        let bigIndex = 0;
        for(var i =1; i<end; i++){
            if (arr[i]>arr[bigIndex]){
                bigIndex = i;
            }
        }
        console.log(end);
        [arr[bigIndex], arr[end]] = [arr[end], arr[bigIndex]];
    }
    return arr;
}


console.log(selectionSort([4,8,5,2,1,0,9,7]))


//https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/

const selectionSort = (arr)=>{
    for( let j = 0; j < arr.length; j++){
        let bigIndex = 0 
        for(let x = 0; x < arr.length-j; x++){
            // console.log(arr[x])
            // compare the current value with the value at the largest index so far to see if the current value is larger 
            if(arr[x] > arr[bigIndex]){
                //update the big index to be the current index
                bigIndex = x
            }
        }
        console.log(bigIndex)
        //swap the value at the big index with the value at the last index (arr.length-1)
        // [arr[arr.length-1-j], arr[bigIndex]] = [arr[bigIndex], arr[arr.length-1-j]]
        let temp = arr[bigIndex]
        arr[bigIndex] = arr[arr.length-1-j]
        arr[arr.length-1-j] = temp
            

    }
    return arr
}

console.log(selectionSort([4,8,5,2,1,0,9,7]))


/*
b = 0->1->6
x = 0->1->2...6->7




*/