def next_largest(node)
  if node.right
    current = node.right
    until current.left.nil?
      current = current.left
    end
    return current
  end
  current = node
  while current.parent
    if current == current.parent.left
      return current.parent
    else
      current = current.parent
    end
  end
  return nil
end

# David's solution
