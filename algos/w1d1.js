//https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

function bubbleSort(array){
    for(var i =0; i<= array.length; i++){
        for(var j = 0; j<=array.length; j++){
            if(array[j]>array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    return array;
}

console.log(bubbleSort([1,4,6,3,5,9,2]));