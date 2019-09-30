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
    let max = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1);
    return max;
  }

  siftDown(idx) {
    let leftIndex = this.getLeftChild(idx);
    let rightIndex = this.getRightChild(idx);
    let tempArray = this.array;
    leftVal = this.array[leftIndex];
    rightVal = this.array[rightIndex];

    
  }

}

let heap = new MaxHeap();
heap.insert(42);
heap.insert(32);
heap.insert(24);
console.log(heap.array)
heap.insert(100);
console.log(heap.array)
// [null, 43, 27, 13, 24]

module.exports = {
  MaxHeap
};
