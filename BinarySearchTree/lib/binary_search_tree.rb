# There are many ways to implement these methods, feel free to add arguments
# to methods as you see fit, or to create helper methods.

require_relative 'bst_node.rb'
require 'byebug'

class BinarySearchTree
  attr_accessor :root

  def initialize
    @root = nil
  end

  def insert(value, node = @root)
    return @root = BSTNode.new(value) if @root.nil?

    if value > node.value
      unless node.right
        node.right = BSTNode.new(value)
        return node.right.parent = node
      end
      insert(value, node.right)
    else
      unless node.left
        node.left = BSTNode.new(value)
        return node.left.parent = node
      end
      insert(value, node.left)
    end
  end

  def find(value, tree_node = @root)
    return nil if tree_node.nil?
    return tree_node if tree_node.value == value

    if value > tree_node.value
      find(value, tree_node.right)
    else
      find(value, tree_node.left)
    end
  end

  def delete(value)
    delete_node = find(value)
    parent = delete_node.parent

    case num_children(delete_node)
    when 0
      replace_node(parent, delete_node, nil)
    when 1
      replace_node(parent, delete_node, only_child(delete_node))
    when 2
      max = maximum(delete_node.left)
      delete(max.value)
      max.left = delete_node.left
      max.right = delete_node.right
      replace_node(parent, delete_node, max)
    end
  end

  # helper method for #delete:
  def maximum(tree_node = @root)
    return tree_node unless tree_node.right

    maximum(tree_node.right)
  end

  def depth(tree_node = @root)
    return 0 if tree_node.nil? || num_children(tree_node) == 0

    left_depth = tree_node.left ? depth(tree_node.left) : 0
    right_depth = tree_node.right ? depth(tree_node.right) : 0
    left_depth > right_depth ? 1 + left_depth : 1 + right_depth
  end

  def is_balanced?(tree_node = @root)
    return false if (depth(tree_node.left) - depth(tree_node.right)).abs > 1

    if tree_node.left
      return false unless is_balanced?(tree_node.left)
    end
    if tree_node.right
      return false unless is_balanced?(tree_node.right)
    end
    true
  end

  def in_order_traversal(tree_node = @root, arr = [])
    return arr if @root == nil

    if tree_node.left
      in_order_traversal(tree_node.left, arr)
    end
    arr.push(tree_node.value)
    if tree_node.right
      in_order_traversal(tree_node.right, arr)
    end
    arr
  end


  private
  # optional helper methods go here:
  def num_children(tree_node)
    count = 0
    count += 1 if tree_node.right
    count += 1 if tree_node.left
    count
  end

  def only_child(tree_node)
    return tree_node.left if tree_node.left
    return tree_node.right if tree_node.right
    nil
  end

  def replace_node(parent, child, new_child)
    if parent.nil?
      @root = new_child
    elsif child.value > parent.value
      parent.right = new_child
      new_child.parent = parent if new_child
    else
      parent.left = new_child
      new_child.parent = parent if new_child
    end
  end
end
