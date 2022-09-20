def quickSort(array):
    if len(array) <= 1:
        return array
    lower = []
    higher = []
    for i in range(1, len(array)):
        if array[i] <= array[0]:
            lower.append(array[i])
        else:
            higher.append(array[i])
    return quickSort(lower) + [array[0]] + quickSort(higher)

'''
    return quickSort([i for i in array[1:] if i <= array[0]])  +  [array[0]]  +  quickSort([i for i in array[1:] if i > array[0]])
    
#inefficient as scans through the whole array twice
'''
print(quickSort([i for i in range(5,-1,-1)]))
        
