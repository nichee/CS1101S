////////////////////////////////////////////////////////////
// Question 1A
////////////////////////////////////////////////////////////

function is_nucleobase(s) {

    // WRITE HERE.
    return s === 'A'
        ? true
        : s === 'C'
            ? true 
            : s === 'G'
                ? true
                : s === 'T'
                    ? true
                    : false;

}


////////////////////////////////////////////////////////////
// Question 1B
////////////////////////////////////////////////////////////

function allTrue (list) {
    if (length(list) === 0){
        return true;
    }
    
    return head(list)
        ? allTrue(tail(list))
        : false;
        
}

function is_dna_strand(xs) {
    // WRITE HERE.
    return allTrue(map(is_nucleobase, xs));


}


//is_dna_strand(list("A", "G", "A")); // true
//is_dna_strand(list("A", "B", "B", "A")); // false
//is_dna_strand(list("T", "G", "C")); // true
//is_dna_strand(list("T", "G", "Otto")); // false

////////////////////////////////////////////////////////////
// Question 1C
////////////////////////////////////////////////////////////

function combine(xss) {
    return length(xss) === 0
        ? list()
        : append(head(xss), combine(tail(xss)));

}
    // WRITE HERE.

/*combine(list(list("A", "G", "A"),
list("G", "C", "T", "A"), list("C")));
combine(list(list("G"), list("T"),
list("C", "A", "A", "A"), list("G")));*/



////////////////////////////////////////////////////////////
// Question 1D
////////////////////////////////////////////////////////////




function oxoguanine_repair(xs) {
    const convert = x => x === '8' ? 'G' : x;
    return map(convert, xs);

    // WRITE HERE.

}
/*oxoguanine_repair(
list("A", "8", "A", "8", "C", "T", "A", "C"));*/


////////////////////////////////////////////////////////////
// Question 1E
////////////////////////////////////////////////////////////


function find_gene_start(xs) {
    // WRITE HERE.
    function checkTG(list){
        return length(list) < 3
            ? false
            : head(tail(list)) === 'T' && head(tail(tail(list))) === 'G';
                
    }
    
    return length(xs) === 0
        ? null
        : head(xs) === 'A'
            ? checkTG(xs)
                ? length(xs) === 3
                    ? list(null)
                    : list(tail(tail(tail(xs))))
                : find_gene_start(tail(xs))
            : find_gene_start(tail(xs));
    return checkTG(xs);


}

//find_gene_start(list("A", "C", "A", "T", "G", "T", "A", "C"));

// returns list(list("T", "A", "C"))
//find_gene_start(list("A", "T", "A", "G", "T", "A", "T", "G"));
// returns list(null)
//find_gene_start(list("A", "T", "A", "G", "T", "A", "C", "G"));
// returns null


////////////////////////////////////////////////////////////
// Question 1F
////////////////////////////////////////////////////////////

function find_gene_end(xs) {
    // WRITE HERE.
    function checkStop(list){
        return length(list) < 3
            ? false
            : head(tail(list)) === 'A' && head(tail(tail(list))) === 'G'
                ? true
                : head(tail(list)) === 'A' && head(tail(tail(list))) === 'A'
                    ? true
                    : head(tail(list)) === 'G' && head(tail(tail(list))) === 'A'
                        ? true
                        : false;
                    
    }  
    
    return checkStop(xs);
    

}



////////////////////////////////////////////////////////////
// Question 1G
////////////////////////////////////////////////////////////

function all_genes(xs) {

    // WRITE HERE.

}



////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////
// Question 2A
////////////////////////////////////////////////////////////

function all_different(nums) {
    if (length(nums) < 2) { //length 0 or 1
        return true;
    }
    for (let x = 0; x < (length(nums) - 1); x = x + 1) {
        if (head(nums) === list_ref(nums, x)){
            return false;
        }
    return (all_different(tail(nums)));
    display(x);
}


display(all_different(list(2, 5, 1, 6, 7, 4, 3)));
// returns true
// returns true

}



////////////////////////////////////////////////////////////
// Question 2B
////////////////////////////////////////////////////////////

function is_valid_toto_set(nums, n, min, max) {

    // WRITE HERE.

}



////////////////////////////////////////////////////////////
// Question 2C
////////////////////////////////////////////////////////////

function num_of_matches(numsA, numsB) {

    // WRITE HERE.

}



////////////////////////////////////////////////////////////
// Question 2D
////////////////////////////////////////////////////////////

function check_winning_group(bet_nums, draw_nums, extra_num) {

    // WRITE HERE.

}



////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////





















