function is_pa_word(s) {
    // your solution goes here
    for (let i=0; i<length(pa_words), i=i+1){
        if(s === list_ref(pa_words,i)){
            return true;
        }
    }
    return false;
}

display(pa_words);
// testing

// is_pa_word("exhilarating");   // should return true
// is_pa_word("tintinnabulate"); // should return false