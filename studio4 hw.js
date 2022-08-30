/*

function pascal(row,pos) {
    // Name: Chan How
    return row === 0 || pos === 0 || pos === row
           ? 1
           : pascal(row - 1, pos - 1) 
               + pascal(row - 1, pos);
}


pascal(700,5);
display(pascal(4, 3));
display(pascal(0, 0));

*/



function foo(n, total) {
    function foo2(x) {
        return foo(n - 1, x + total);
    }
    return n === 0
    ? total
    : foo2;
}


const foo1 = (n, total) => x => n === 1 
                                       ? total + x 
                                       : foo1(n - 1, total + x);

const foo2 = (n, total) => n === 0 
                                  ? total 
                                  : x => foo2(n - 1, total + x);
                                  
