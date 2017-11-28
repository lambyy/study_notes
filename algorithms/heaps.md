# Heaps

Priority queue, min/max binary heap

A heap is a binary tree that follows the following constraints
  - has at most 2 children, and its children will have at most 2 children
  - is a complete tree (at every level, works towards becoming a full tree, fill from left to right)
  - each node must obey the heap property, parent of each node must be less than or equal to it (in a min heap)

## Primary Public Methods

### Peek
  - returns the min/max value of heap, constant time
  - root node of the binary tree is the min/max value

### Insert
  - push, O(log n) time
  - insert at last position and swap with parents until it is in correct position (heapify up)

### Extract
  - pop, O(log n) time
  - swap root node and last element, then swap root node with its smallest child until it is in the correct position (heapify down)
  - min/max can be popped from the end

### Implementation
  - A heap can be represented using an array
  - Root (min/max value) is represented as the first element in array (#peek)
  - Bottom right most element in tree is represented by the last element in array

```
  // given parent index, children index can be found by:
  2i + 1
  2i + 2

  // given child index, parent index can be found by:
  (i - 1) / 2
```

## Heapsort

O(n log n)

Steps:
  - insert elements into heap (heapifies up, has to insert n times, insertion is 0(log n))
  - extract min/max value from heap (heapifies down, has to extract n times, extraction is O(log n))
  - extracted values will be in order

To do heapsort in place, keep track of a boundary, one side is heap, the other is the array/sorted array

Why heapsort?
  - stability, worse case is O(n log n)
  - in place sort saves space
