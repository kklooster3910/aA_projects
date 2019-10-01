class MaxHeap {
  constructor(){
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2)
  }

  getLeftChild(idx) {
    return idx * 2
  }

  getRightChild(idx) {
    return idx * 2 + 1
  }

  siftUp(idx) {
    if (idx === 1) return;
    let parentIdx = this.getParent(idx);

    if (this.array[parentIdx] < this.array[idx]) {
      [this.array[idx], this.array[parentIdx]] =  [this.array[parentIdx], this.array[idx]]
      this.siftUp(parentIdx)
    }
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1)
  }

  deleteMax() {
    // if (this.array[0] === null) return null;
    // if (this.array.length === 2) return this.array.pop();

    let max = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1);
    return max;
  }

  siftDown(idx) {
    let leftIndex = this.getLeftChild(idx);
    let rightIndex = this.getRightChild(idx);
    let tempArray = this.array;
    let leftVal = tempArray[leftIndex];
    let rightVal = tempArray[rightIndex];
    let currentNode = tempArray[idx]

    if (leftVal === undefined) leftVal = -Infinity;
    if (rightVal === undefined) rightVal = -Infinity;
    
    if (currentNode > leftVal && currentNode > rightVal) return;

    let swapIdx;
    if (leftVal > rightVal) {
      swapIdx = leftIndex;
    } else {
      swapIdx = rightIndex;
    }
    [ tempArray[swapIdx], tempArray[idx] ] = [ tempArray[idx], tempArray[swapIdx] ]
    this.siftDown(swapIdx)
  }

}

let heap = new MaxHeap();
heap.insert(42);
heap.insert(32);
heap.insert(24);
// console.log(heap.array)
heap.insert(100);
heap.insert(50);
heap.insert(27);
console.log(heap.array);
console.log(heap.deleteMax());
console.log(heap.array);
// [null, 43, 27, 13, 24]

module.exports = {
  MaxHeap
};
