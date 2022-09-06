// Part 1 & 2 for your own reference

// draw_data(list(list(1, 2, list(3)), list(4, 5), pair(6, 7)));
// draw_data(pair(1, list(2, 3, pair(4, null))));
// draw_data(pair(1, pair(2, list(3, list(4, 5)))));

function reverse(lst) {
    return is_null(lst)
    ? null
    : pair(reverse(tail(lst)), head(lst));
}

// draw_data(reverse(list(1, 2, 3, 4)));

// Part 3
const lst1 = list(7, list(6, 5, 4), 3, list(2, 1));
const get_one1 = head(tail(head(tail(tail(tail(lst1))))));
display(get_one1); //chan how

const lst2 = list(list(7), list(6, 5, 4), list(3, 2), 1);
const get_one2 = head(tail(tail(tail(lst2))));
display(get_one2); //chan how

const lst3 = list(7, list(6), list(5, list(4)), list(3, list(2, list(1))));
const get_one3 = head(head(tail(head(tail(head(tail(tail(tail(lst3))))))))); 
display(get_one3); // chandan

const lst4 = list(7, list(list(6, 5), list(4), 3, 2), list(list(1)));
const get_one4 = ; // zi han
display(get_one4);

// In-class
const elist = enum_list(1, 6);
function every_second(items) {
    // TODO
}
display_list(every_second(elist));

const nlist = build_list(n => 1, 6);
function sums(items) {
    // TODO
}
display_list(sums(nlist));