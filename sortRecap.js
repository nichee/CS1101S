/*

1)insertionSort
Sort the tail of the given list using wishful thinking!
Insert the head in the right place


2)selectionSort
Find the smallest element x and remove it from the list
Sort the remaining list, and put x in front



3)mergeSort
Split the list in half, sort each half using wishful thinking
Merge the sorted lists together

take, drop, merge (two sorted lists into one sorted list), mergeSort(halve list,
sort both halves and merge

4)quickSort
Split list into 2 subArrays, smaller and larger (than pivot size).
Sort each subarray using wishful thinking 


*/

//insert element into sorted array
function insert(element, array){ 
    if (is_null(array)) {
        return array;
    }
    else {
        return element <= head(array)
            ? pair(element, array)
            : pair(head(array), insert(element, tail(array)));
    }
}
display (insert(5,list(3,4)));




function insertionSort(array){
    return length(array) === 1
        ? array
        : insert(head(array), insertionSort(tail(array)));
}









