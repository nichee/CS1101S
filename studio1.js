// Studio #1 idk man maybe you?

// Question #1
function biggie_size(combo) {
    return combo + 4;
    /* -----------chatbox--------------
    nic:hello
    zihan:hello
    nic:do u want to join my tech startup;
    zihan:what's this
    
    */
    // TODO
}
biggie_size(3);

// Question #2 zihan
function unbiggie_size(combo) {
    return combo > 5 
        ? combo - 4 
        : combo;
}
unbiggie_size(6);

// Question #3
function is_biggie_size(combo) {
    return combo > 4; 
}
is_biggie_size(5);

// Question #4 kok seng
function combo_price(combo) {
    return combo > 4 ? (combo - 4) * 1.17 + 0.5 : combo * 1.17;
}

// Question #5 CHAN HOW
function empty_order() {
    return 0;
}

//Question #6 CHAN HOW cause q5 too straightforward
function add_to_order(order, combo) {
    return order * 10 + combo;
}

// Question #7 chandan
function last_combo(order) {
    return order - 10 * math_floor(order / 10);
    // 1231 -> 1231 - 1230  (order % 10)
}

// Question #8
function other_combos(order) {
    // TODO
    return (order - last_combo(order)) 
    / 10;
}

function square(integer){
    return (integer * integer);
}












