/* eslint-disable */
/* eslint-disable class-methods-use-this */
class Heap {
    constructor() {
        this.storage = [null];
        this.size = 0;
    }
    // Inserts the given value in the heap
    // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
    insert(val) {
        this.storage.push(val);
        this.bubbleUp(this.storage.length - 1);
        ++this.size;
    }
    // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
    // Calls siftDown in order to reorganize the heap with a new max/min
    // In some specifications, this method is also called `poll`
    delete() {
        const result = this.storage[0];
        if (this.storage.length != 0) {
            const end = this.storage.pop();
            --this.size;
        }
        if (this.storage.length !== 0) {
            this.storage[0] = end;
            this.siftDown(0);
        }
        return result;
    }
    // Returns the maximum value in the heap in constant time
    getMax() {
        if (this.storage[0] > this.storage[this.storage.length - 1]) return this.storage[0];
        else {
            let maxValue = this.storage[0];
            this.storage.forEach(function(element) {
                if (element > maxValue) {
                    maxValue = element;
                }
            });
        }
    }
    // Returns the size of the heap
    getSize() {
        return this.size;
    }
    // Returns the storage array
    getStorage() {
        return this.storage;
    }
    // Moves the element at the specified index "up" by swapping it with its parent 
    // if its parent value is less than the value located at the input index
    // This method is only used by the heap itself in order to maintain the heap property
    bubbleUp(index) {

    }
    // First grabs the indices of this element's children and determines which of the children are larger
    // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
    // This method is only used by the heap itself in order to maintain the heap property
    siftDown(index) {
      
    }
}

module.exports = Heap;
