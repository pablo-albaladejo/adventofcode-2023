class PriorityQueue<T> {
  private heap: { priority: number; element: T }[];

  constructor() {
    this.heap = [];
  }

  enqueue(element: T, priority: number): void {
    this.heap.push({ priority, element });
    this.heapifyUp();
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const removedElement = this.heap[0].element;
    const lastElement = this.heap.pop()!;

    if (this.heap.length > 0) {
      this.heap[0] = lastElement;
      this.heapifyDown();
    }

    return removedElement;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  private heapifyUp(): void {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[currentIndex].priority >= this.heap[parentIndex].priority) {
        break;
      }

      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  private heapifyDown(): void {
    let currentIndex = 0;

    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let nextIndex = currentIndex;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex].priority < this.heap[nextIndex].priority
      ) {
        nextIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex].priority < this.heap[nextIndex].priority
      ) {
        nextIndex = rightChildIndex;
      }

      if (nextIndex === currentIndex) {
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  private swap(index1: number, index2: number): void {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }
}

export { PriorityQueue };
