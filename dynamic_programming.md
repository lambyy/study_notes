# Dynamic Programming

Dynamic Programming is an algorithmic paradigm that solves a given complex problem by breaking it into subproblems and storing the results of subproblems to avoid computing the same results again.

Optimal Substructure property - where a problem has a recursive definition

Overlapping Subproblems property - in recursion, when subproblems are the same and need to be solved repeated

Solutions:

1. memoization (top-down) - store results in memory whenever we solve the problem for the first time
  - avoids computing solutions to subproblems that are not needed  


2. tabulation (bottom-up) - precompute solutions in linear fashion and store in table to perform look ups later
  - avoids multiple lookups, saving function call overhead time
