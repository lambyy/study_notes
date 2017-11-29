# Binary Search Tree

Data structure to perform `#find`, `#insert`, `#delete` in O(log n) time

A binary search tree has the following constraints:
  - All node values on the left side are less than or equal to value of the root node
  - All node values on the right side are greater than the value of the root node
  - Each subtree is a binary search tree

### `#find`
  - check if node contains the value
  - else if value exists in tree must be on left/right side of node if it is less than/greater than node
  - if hit dead end, value does not exist in tree

### `#insert`
  - if value is to exist in tree, must be on left/right side of node if it is less than/greater than node
  - recursively perform until it fits into appropriate spot

### `#delete`
Hibbard Deletion

3 cases:
  - Node has no children
    - remove reference to node from parent
  - Node has one child
    - promote child to replace node
  - Node has two children
    - promote right most child (max) on left subtree to replace node
    - if right most child has children, replace right most child with its left child (will not have right child because it would not be right most if it did)

These methods all have O(depth) time complexity

 ### Balanced BST

 Keeps BST from being worst case where depth = n
 
 Ensures that long term, the depth is approximately log n

 Criteria for Balanced BST
 - difference in depth of left and right subtrees is at most 1
 -  both left and right subtrees are BSTs
