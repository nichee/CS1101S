function binarySearch(array,element){
    let low=0;
    let high=length(array);
    while (low<high){
        const mid = math_floor((low+high)/2);
        if (element === array[mid]){
            return mid;
        }
        else if(element<array[mid]){
            high = mid-1;
        }
        else {low=mid+1;}
    return false;
}
display(binarySearch([1,2,3,4,5], 2));

















