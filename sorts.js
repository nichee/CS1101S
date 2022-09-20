// Type your program in here!

function floorDiv(a,b){
    return a/b === math_round(a/b)
        ? a/b
        : math_round(a/b) - 1;
    /// math_floor(a/b)
}




function quickSort(array){
    if (length(array) <= 1) {
        return array;
    }
    else {
        function arrayHelper(element){
            return (list_ref(array, element));
        }

        const pivot = head(array);
        const lower = filter(x => x < pivot, array);
        const higher = filter(x => x > pivot, array);
        const equal = filter(x => x === pivot, array);
        return append(append(quickSort(lower)
        , append(equal, list(pivot))), quickSort(higher));
    }
        
}



display (quickSort(list(5,4,3,2,6,4,6,4,3,3,6,7,72,4,2,2)));

display (filter(x => x>3, list(5,4,3,2)));
