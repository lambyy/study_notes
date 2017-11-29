# Given array, write a method that finds the difference between the
# max and min values in the array, can not use built in sort, max, min
# methods, assume all entries are valid numbers, return 0 if array only
# has 1 element and -1 if array is empty, test and talk about time/space
# complexity


# Implement a simplified filesystem using Object Oriented Programming
# consisting of only Files and Directories. Directories can contain
# Files or other Directories. Both Files and Directories should have
# attributes 'name' and 'id'

# Given a 'tree' that looks like
# Directory dir0
#   - File file0
#   - Directory dir1
#     - Directory dir2
#     - File file1

# write a method that prefixes the name of all nodes in the tree
# with an input string

class ThanxFile
  def initialize(name, id)
    @name = name
    @id = id
  end

  def prefix(string)
    @name = string + @name
  end

  def print
    puts @name
  end
end

class Directory < ThanxFile
  attr_accessor :children

  def initialize(name, id)
    super
    @children = []
  end

  def prefix(string)
    @name = string + @name
    @children.each do |child|
      child.prefix(string)
    end
  end

  def print
    super
    @children.each(&:print)
  end
end

filesystem = Directory.new("dir0", 0)
dir1 = Directory.new("dir1", 2)
dir2 = Directory.new("dir2", 3)

filesystem.children.push(ThanxFile.new("file0", 1))
filesystem.children.push(dir1)
dir1.children.push(dir2)
dir1.children.push(ThanxFile.new("file1", 4))

filesystem.print
filesystem.prefix("hi-")
puts "##########"
filesystem.print
