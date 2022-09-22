/*

1)insertionSort
Sort the tail of the given list using wishful thinking!
Insert the head in the right place
NOTE : deal with len 0 and len 1 arrays


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
    if (is_null(array)){
        return array;
    }
    else {
        return element <= head(array)
            ? pair(element, array)
            : length(array) === 1
                ? append(array, list(element))
                : pair(head(array), insert(element, tail(array)));
            
    }
}


function insertionSort(array){
    return length(array) <= 1
        ? array
        : insert(head(array), insertionSort(tail(array)));
}

//display(insertionSort(list(5,3,6,8,7,4,2,26,8,8,21,1)));


function smallest(array){ // return smallest, min size 2
    return head(array) > head(tail(array)) // compare first to second element
        ? length(array) === 2
            ? head(tail(array)) // if use tail(array), will return [num, null]
                                // can also use list_ref(array,1)
            : smallest(tail(array)) //remove head as it is larger
            
        : length(array) === 2
            ? head(array)
            : smallest(append(list(head(array)), tail(tail(array)))); //remove second element
}



function selectionSort(array){
    return length(array) <= 1
        ? array
        : pair(smallest(array), selectionSort(remove(smallest(array),array)));
}




//display(selectionSort(list(5,3,6,8,7,4,2,26,8,8,21,1)));

function merge(array1, array2){ // merge 2 sorted lists into 1
    //should not receive 2 empty lists
    if (is_null(array1)){
        return array2
    }
    else{
        if (is_null(array2)){
            return array1
        }
        else{
            head = 
            
            
            
        }
    }
    
    
    
}
function mergeSort(array){
    return 1;
}






