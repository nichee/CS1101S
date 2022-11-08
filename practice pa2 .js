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
/*const get_x = (aar) => list_ref(aar, 0);
const get_y = (aar) => list_ref(aar, 1);
const get_width = (aar) => list_ref(aar, 2);
const get_height = (aar) => list_ref(aar, 3);*/


function smallest_bounding_AAR_area(rs) { //oops didnt see provided helper fns
    // WRITE YOUR SOLUTION HERE.
    let minX = head(head(rs));
    let maxX = head(head(rs)) + list_ref(head(rs),2);
    let minY = list_ref(head(rs),1);
    let maxY = list_ref(head(rs),1) + list_ref(head(rs),3);
    for (let i=1; i<length(rs); i=i+1){
        if (head(list_ref(rs,i)) < minX){
            minX = head(list_ref(rs,i));
        }
        if (head(list_ref(rs,i)) + list_ref(list_ref(rs,i),2) > maxX){
            maxX = head(list_ref(rs,i)) + list_ref(list_ref(rs,i),2);
        }
        
        if (list_ref(list_ref(rs,i),1) < minY){
            minY = list_ref(list_ref(rs,i),1);
        }
        if (list_ref(list_ref(rs,i),1) + list_ref(list_ref(rs,i),3) > maxY){
            maxY = list_ref(list_ref(rs,i),1) + list_ref(list_ref(rs,i),3);
        }
        
    }
    
    return (maxX - minX) * (maxY - minY);

}

/*const aar1 = list(2, 3, 10, 15); // x2-12 y 3-18
const aar2 = list(1, 4, 20, 8 ); // x1-21 y 4-12
smallest_bounding_AAR_area( list(aar1, aar2) );*/
// returns 300  (the smallest bounding AAR is list(1, 3, 20, 15))

//3b --------------------------------

// 10 x 15, 20 x 8
//10x15 8x20





//3c ------------------------

// Feel free to use these functions:
const get_x = (aar) => list_ref(aar, 0);
const get_y = (aar) => list_ref(aar, 1);
const get_width = (aar) => list_ref(aar, 2);
const get_height = (aar) => list_ref(aar, 3);


function overlap_area(aar1, aar2) {
    function getOverlap(s1,e1,s2,e2){
        if ( e1<=s2 || e2<=s1){
            return 0;
        }
        const start = s1 > s2 ?s1 :s2;
        const end = e1 > e2 ?e2 :e1;
        return math_abs(end-start);
        

    }
    const finalX = getOverlap(get_x(aar1), get_x(aar1) + get_width(aar1) 
                            , get_x(aar2), get_x(aar2) + get_width(aar2));
                            
    const finalY = getOverlap(get_y(aar1), get_y(aar1) + get_height(aar1) 
                            , get_y(aar2), get_y(aar2) + get_height(aar2));
                            
    return (finalX * finalY);                
}


// 20-25 larger start, smaller end

//overlap_area( list(10, 20, 30, 60), list(40, 10, 50, 15) );
// 10-40 40-90
// returns 0






//overlap_area( list(10, 20, 30, 60), list(10, 10, 50, 15) );
// 10-40, 20-80 vs 10-60, 10-25
// returns 150


//overlap_area( list(10, 20, 30, 60), list(0, 40, 50, 15) );
// returns 450

//overlap_area( list(10, 20, 30, 60), list(-25, 75, 50, 15) );
// returns 75




