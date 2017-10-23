require_relative 'binary_search_tree.rb'

def kth_largest(tree_node, k)
  array = []
  until array.length == k
    max = BinarySearchTree.maximum(tree_node)
    array.push(max.value)
    tree_node.delete(max.value)
  end
  array.last
end
