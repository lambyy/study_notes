# Graphs

Non-linear data structure

Graphs are composed of two parts:
  - Vertices (represents data)
  - Edges (represents connections between data, can be weighted, can have direction)
    - all or no edges must have weights or direction
    - graph with all directed edges is called a digraph
  - unlike trees, there are no rules dictating the connection among nodes (a tree is a special type of graph)

Graphs can be used to represent any collection of objects having some kind of pairwise relationship
  - social networks like FB can be represented as undirected graphs because friendships are two way
    - ex. problem: finding all nodes having length of shortest path equal to 2 (friends of friends)
  - interlinked webpages (www) can be represented as a digraph because links on pages are not mutually connected
    - web crawling = graph traversal = accessing all nodes in graph
  - intercity road networks can be represented as a weighted undirected graph

Properties of Graphs:
  - G = (V, E)
  - |V| --> number of vertices
  - |E| --> number of edges
  - special edges:
    - self loop/edge if it involves only 1 vertex
    - multi-edge if it occurs more than once in a graph
    - a simple graph has no self loops or multi-edges
  - for a simple digraph, number of edges:
    - if |V| = n
    - then 0 <= |E| <= n(n-1)
  - for a simple undirected graph, number of edges:
    - 0 <= |E| <= n(n-1)/2
  - a graph is dense if # edges is close to max # of edges (n^2)
  - a graph is sparse if # edges if close to min # of edges (n)
  - a path in a graph is a sequence of vertices where each adjacent pair is connected by an edge
    - a path is simple (a walk) if no vertices (and thus no edges) are repeated
    - a trail is a walk in which no edges are repeated
    - closed walk if it starts and ends at same vertex and length of which is greater than 0
    - simple cycle has no repetition other than start and end
    - acyclic graph is a graph with no cycles
  - a graph is strongly connected if there is a path from any vertex to any other vertex

Graph Representations:
- Edge List: array of all nodes in graph & array of all edges
  - pro: minimal space complexity O(v) + O(e)
  - con: O(e) time complexity which in worse case is O(v^2) for common operations (find adjacent nodes, find if two nodes are adjacent)
- Adjacency Matrix: array/hash of all nodes in graph & 2D array to represent edges
  - pro: time complexity drastically reduced for common operations, O(v) to find adjacent nodes, O(1) to find if adjacent
  - con: large space complexity O(v^2) generated matrix, wasting a lot of memory for sparse graphs, most real world graphs tend to be more sparse, this representation is good for dense graphs
- Adjacency List: array/hash of all nodes in graph & array or other data structure (linked list) containing a list of edges
  - pro: better space complexity O(e) since most graphs are sparse e << v^2, no redundancy
  - con: time complexity for finding if two nodes are adjacent, requires linear or binary search, costly O(v), however, if we use the assumption of a sparse graph, this data structure will save time compared to the matrix
