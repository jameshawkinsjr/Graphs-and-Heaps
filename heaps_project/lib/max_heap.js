class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx/2);
    }
    getLeftChild(idx) {
        return idx * 2;
    }
    getRightChild(idx) {
        return idx * 2 + 1;
    }

    siftUp(idx) {
        if (idx === 1) return;
        let parentIdx = this.getParent(idx);
        if (this.array[idx] > this.array[parentIdx]) {
            [this.array[idx], this.array[parentIdx] ] = [this.array[parentIdx], this.array[idx]]
        }
        this.siftUp(parentIdx);
    }

    insert(val){
        this.array.push(val);
        this.siftUp(this.array.length-1);
    }

    siftDown(idx) {
        if (idx >= this.array.length) return;

        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);
        let leftChild = this.array[leftIdx] || -Infinity;
        let rightChild = this.array[rightIdx] || -Infinity;
        let greaterChildIdx = ( leftChild > rightChild ) ? leftIdx : rightIdx;

        if (this.array[idx] < this.array[greaterChildIdx]) {
            [this.array[idx], this.array[greaterChildIdx] ] = [this.array[greaterChildIdx], this.array[idx]];
        }
        this.siftDown(greaterChildIdx);
    }

    deleteMax(){
        if (this.array.length === 1) return null;
        if (this.array.length === 2) return this.array.pop();
        let max = this.array[1];
        this.array[1] = this.array.pop();

        this.siftDown(1);

        return max;

    }
    
}

module.exports = {
    MaxHeap
};