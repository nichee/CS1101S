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



/*runlength_decode(null);
runlength_decode(list(9));
runlength_decode(list(6, pair(5,2), 9, pair(7,2), pair(5,3)));*/
// returns list(6,5,5,9,7,7,5,5,5)

//qn3a

// Feel free to use these functions:
const get_x = (aar) => list_ref(aar, 0);
const get_y = (aar) => list_ref(aar, 1);
const get_width = (aar) => list_ref(aar, 2);
const get_height = (aar) => list_ref(aar, 3);


function smallest_bounding_AAR_area(rs) {
    // WRITE YOUR SOLUTION HERE.
    let minX = head(head(rs));
    let maxX = head(head(rs)) + list_ref(head(rs),2);
    let minY = list_ref(head(rs),1);
    let maxY = list_ref(head(rs),1) + list_ref(head(rs),3);
    for (let i=1; i<length(rs); i=i+1)

}

const aar1 = list(2, 3, 10, 15); // x2-12 y 3-18
const aar2 = list(1, 4, 20, 8 ); // x1-21 y 4-12
smallest_bounding_AAR_area( list(aar1, aar2) );
// returns 300  (the smallest bounding AAR is list(1, 3, 20, 15))







