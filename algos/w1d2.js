//https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        }
    }
    return(arr)
}



console.log(insertionSort([5, 23, 0, 12, 8, 6])) //[0,5,6,8,12,23]


function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let j = i-1;
        let current = arr[i];
        while(j >= 0 && arr[j] > current){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}


console.log(insertionSort([5,23,0,12,8,6])) //[0,5,6,8,12,23]



//https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

function insertionSort(arr){
    for(let i = 0; i < arr.length;i++){
        while (arr[i] < arr[i-1] ){
        temp = arr[i-1] 
        arr[i-1] = arr[i]
        arr[i] = temp
        i--
        }
    }
    return arr
}


console.log(insertionSort([5,23,0,12,8,6])) //[0,5,6,8,12,23]


function insertionSort(arr){
    //parenthesis not needed
    for(let i =1; i < arr.length-1; i++){
        //this is to iterate the full indexes of the array 
        let thisValue = arr[i];
        //because we are comparing the same value to different values, we need to store that data

        let j = i-1;
        //compare the one right before that index value

        //while the the one on the right(arr[i]) is smaller than the one on the left(arr[j])
        //we swap the value
        while(thisValue < arr[j] && j >= 0){
            //[arr[j], arr[i]] = [arr[i], arr[j]]; //-> this simply swaps and continues to swap
            arr[j+1] = arr[j];
            //we put the value of the one on the right as the left
            //but we can't use the i, because then arr[i] stays the same. we want the value to be changing
            //then we decrease the index number to compare to the value
            j--;
        }
        arr[j+1] = thisValue;
        //then we declare the value after the while loop
    }
    return arr;
}



//https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

function insertionSort(arr){
    for(let x = 1; x < arr.length; x++){
        console.log(arr[x])
        let j = x
        //as long as j is greater than 0 we want to check if the value to the left is greater than the current value. 
        while(j > 0 && arr[j] < arr[j-1]){
            //replace the element at the current index with the element to the left of it 
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            j--
        }
    }
    return arr
}



console.log(insertionSort([5,23,0,12,8,6])) //[0,5,6,8,12,23]



function insertionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        while (arr[i] > arr[i + 1]) {
            var temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
            i--
        }
    }
    return arr
}