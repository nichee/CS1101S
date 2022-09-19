
function insert(bst, item) {
    // your answer here
    return is_empty_tree(bst)
        ? make_tree(item, make_empty_tree(), make_empty_tree())
        : item === entry(bst) 
            ? bst //item already in list
            
            
            : item < entry(bst)
                ?is_empty_tree(left_branch(bst))
                    ? make_tree(entry(bst), 
                                make_tree()) //set bst left to new item, create new item
                    : insert(left_branch(bst), name)
            
                :is_empty_tree(right_branch(bst))
                    ? 
                    : insert(right_branch(bst), name);
    

}

function find(bst, name) {
    return name === entry(bst)
        ? true
        : name < entry(bst)
        
            ?is_empty_tree(left_branch(bst))
                ? false
                : find(left_branch(bst), name)
            
            :is_empty_tree(right_branch(bst))
                ? false
                : find(right_branch(bst), name);
        
    
}
// Copy your binary_search_tree_to_string function here from Task 1.
function binary_search_tree_to_string(bst) {
    // your answer here

    function concatenate(bst){
        return (entry(bst) + '; ');
    }
    function leftEmpty(bst){
        return is_empty_tree(left_branch(bst));
    }
    
    function rightEmpty(bst){
        return is_empty_tree(right_branch(bst));
    }
    
    return is_empty_tree(bst)
        ? '' //scenario 1
        : rightEmpty(bst)
            ? leftEmpty(bst)
                ? concatenate(bst) //scenario 2
                : binary_search_tree_to_string(left_branch(bst)) + concatenate(bst) //scenario 3
            : leftEmpty(bst)
                ? concatenate(bst) + binary_search_tree_to_string(right_branch(bst)) //scenario 4
                : binary_search_tree_to_string(left_branch(bst)) //scenario 5
                    + concatenate(bst) 
                    + binary_search_tree_to_string(right_branch(bst));
    
    
    
}


// Test

//binary_search_tree_to_string(insert(make_empty_tree(), "x"));
// Should produce "x; "

/*
const bst = accumulate((item, bst) => insert(bst, item),
                       make_empty_tree(),
                       list("g", "a", "r", "x", "p"));
binary_search_tree_to_string(bst);
// Should produce "a; g; p; r; x; "

const cadet_names_with_aaaaron =  insert(cadet_names, "AAAARON NORAAAA");
binary_search_tree_to_string(cadet_names_with_aaaaron);
// Should produce "AAAARON NORAAAA; ..."
*/
