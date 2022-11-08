//qn 2b-------------------------
function runlength_decode(R) {
    if (length(R) <2){
        return R;
    }
    
    let finalList= list();
    for (let i=0; i<length(R); i=i+1){
        if (is_number(list_ref(R,i))){
            finalList=append(finalList,list(list_ref(R,i)));
        }
        else if (is_pair(list_ref(R,i))){//is pair
            let duplicates = list();
            for (let j=0; j<tail(list_ref(R,i)); j=j+1){
                duplicates = append(duplicates, list(head(list_ref(R,i))));
                display(duplicates);
            }
            finalList=append(finalList,duplicates);
            
        }
    }
    return finalList;
}



runlength_decode(null);
runlength_decode(list(9));
runlength_decode(list(6, pair(5,2), 9, pair(7,2), pair(5,3)));
// returns list(6,5,5,9,7,7,5,5,5)













