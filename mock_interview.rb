def merge_events(arr)
  events = arr.sort
  merged = []
  merged.push(events[0])

  events.each do |event|
    if event[0] <= merged.last[1]
      if event[1] >= merged.last[1]
        merged.last[1] = event[1]
      end
    else
      merged << event
    end
  end

  merged
end

arr1 = [ [1, 4], [1, 2], [3, 5], [1, 4], [6, 7] ]
arr2 = [ [1, 8], [11, 12], [1, 3], [2, 4], [6, 9] ]
arr3 = [ [1, 12], [15, 16], [11, 13], [17, 18], [6, 7] ]

print merge_events(arr1)
print merge_events(arr2)
print merge_events(arr3)
