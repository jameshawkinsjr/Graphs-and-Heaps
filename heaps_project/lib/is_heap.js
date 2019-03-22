// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {

    let maxHeap = true;
    for (let i = 1; i < array.length; i++){
        let currentNode = array[i];
        let leftChild = array[i * 2] || -Infinity;
        let rightChild = array[i * 2 + 1] || -Infinity;

        if (currentNode < leftChild || currentNode < rightChild) maxHeap = false;
    }
    return maxHeap;
}


module.exports = {
    isMaxHeap
};