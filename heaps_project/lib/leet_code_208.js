var findKthLargest = function(nums, k) {
  
    let heap = [null];
    
    getParent =     idx => Math.floor(idx/2);
    getLeftChild =  idx => idx * 2;
    getRightChild = idx => idx * 2 + 1;
    
    siftUp = idx => {
          if (idx === 1) return;
          let parentIdx = this.getParent(idx);
          if (heap[idx] > heap[parentIdx]) {
              [ heap[idx], heap[parentIdx] ] = [ heap[parentIdx], heap[idx] ]
          }
          this.siftUp(parentIdx);
    };

    insert = val => {
        heap.push(val);
        this.siftUp(heap.length-1);
    }
  
    siftDown = idx => {
            if (idx >= heap.length) return;

            let leftIdx = this.getLeftChild(idx);
            let rightIdx = this.getRightChild(idx);
            let leftChild = heap[leftIdx] || -Infinity;
            let rightChild = heap[rightIdx] || -Infinity;
            let greaterChildIdx = ( leftChild > rightChild ) ? leftIdx : rightIdx;

            if (heap[idx] < heap[greaterChildIdx]) {
                [heap[idx], heap[greaterChildIdx] ] = [heap[greaterChildIdx], heap[idx]];
            }
            this.siftDown(greaterChildIdx);
    }

    deleteMax = () => {
            if (heap.length === 1) return null;
            if (heap.length === 2) return heap.pop();
            let max = heap[1];
            heap[1] = heap.pop();

            this.siftDown(1);

            return max;
    };

    nums.forEach( num => {
        this.insert(num);
    });

    for ( let i = 1; i < k; i++){
        this.deleteMax();
    }

    return heap[1];
    
  };