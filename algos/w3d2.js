class MinHeap {
    constructor() {
        this.heap = [null]
    }

    insert(value) {
        //push value to the end of heap
        this.heap.push(value)
        //declare a variable and name it curr for current value
        let curr = this.heap.length - 1
        //declare a variable and name it parent
        let parent = Math.floor(curr / 2)
        //compare the value of parent and value of current
        while (this.heap[curr] < this.heap[parent]) {
            //if the value at the current index is less than the value of parent index, then swap
            [this.heap[curr], this.heap[parent]] = [this.heap[parent], this.heap[curr]];
            //update current to be the parent
            curr = parent
            parent = Math.floor(curr / 2)

        }
        return this.heap
    }
}



let heap1 = new MinHeap();
heap1.insert(23)
heap1.insert(35)
heap1.insert(60)
heap1.insert(2)
console.log(heap1)