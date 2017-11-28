#Quicksort

Time complexity avg case O(n log n), worst case O(n^2)
Space complexity O(log n) for in place

## Basic Quicksort
not efficient in terms of space, creates new arrays in every step of the recursive step

Steps:
  - Base case: return if length <= 1
  - Select pivot (first element)
  - Partition array around pivot
  - Recurse on left and right (return left + [pivot] + right)

## In Place Quicksort
Partition array into "unknown" and "sorted" sections, boundary on "sorted" section to divide elements "less than pivot" and "more than pivot", switch pivot with last element of boundary

Worse case for quicksort is O(n^2) for an already sorted array, get around this by picking a random index to use for pivot
