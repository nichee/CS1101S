//Q1
//argument t in functions is duration

function snare_drum(t) {
    return (adsr(0.2, 0.3, 0.3, 0.1)(noise_sound(t)));

}

//play(snare_drum(1));



function bass_drum(t){
    const bassPrimeList = list(79,83,89,97,101,103,107,109,113,127,131
    ,137,139,149);
    
    function sineConstructor(frequency){
        return (sine_sound(frequency,t));
    }
    
    const finalBass = simultaneously(map(sineConstructor,bassPrimeList));
    return (adsr(0, 0.2, 0.11, 0)(finalBass));
}

//play(bass_drum(1));

function mute(note,t){
    return silence_sound(t);
}

//play(mute(21,2));



//Q2

function generate_list_of_note(letter_name,list_of_interval){
    const firstNoteNum = letter_name_to_midi_note(letter_name);
    
    
    function noteHelper(list_of_interval,currentNoteNum){
        if (length(list_of_interval) === 0) {
            return list();
        }
        else {
            const newCurrentNote = currentNoteNum + head(list_of_interval);
            return append(list(newCurrentNote) 
                          ,noteHelper(tail(list_of_interval),newCurrentNote));
            
        }
        }
    return append(list(firstNoteNum),(noteHelper(list_of_interval, firstNoteNum)));
}


const major_scale_interval = list(2, 2, 1, 2, 2, 2, 1, -1, -2, -2, -2, -1, -2, -2);
const c_major_scale = generate_list_of_note("C4", major_scale_interval);


display(c_major_scale);



function list_to_sound(list_of_midi_note, duration, instrument) {
    function instrumentHelper(note){
        return instrument(note,duration);
    }
    
    const finalInstrument = consecutively(map(instrumentHelper,list_of_midi_note));
    return (finalInstrument);
}



const c_major_scale_sound = list_to_sound(c_major_scale, 0.4, cello);
play(c_major_scale_sound);


const harmonic_minor_scale_interval = list(2, 1, 2, 2, 1, 3, 1, -1, -3, -1, -2, -2, -1, -2);

const melodic_minor_scale_interval = list(2, 1, 2, 2, 2, 2, 1, -2, -2, -1, -2, -2, -1, -2);


const c_harmonic_minor_scale = generate_list_of_note("C4", 
                                                harmonic_minor_scale_interval);
const c_harmonic_minor_scale_sound = list_to_sound(c_harmonic_minor_scale, 0.4, cello);
play(c_harmonic_minor_scale_sound);

const c_melodic_minor_scale = generate_list_of_note("C4", 
                                                melodic_minor_scale_interval);
                                                
const c_melodic_minor_scale_sound = list_to_sound(c_melodic_minor_scale, 0.4, cello);
play(c_melodic_minor_scale_sound);

//Q3

// copy your functions generate_list_of_note and list_to_sound

function generate_list_of_note(letter_name,list_of_interval){
    const firstNoteNum = letter_name_to_midi_note(letter_name);
    
    
    function noteHelper(list_of_interval,currentNoteNum){
        if (length(list_of_interval) === 0) {
            return list();
        }
        else {
            const newCurrentNote = currentNoteNum + head(list_of_interval);
            return append(list(newCurrentNote) 
                          ,noteHelper(tail(list_of_interval),newCurrentNote));
            
        }
        }
    return append(list(firstNoteNum),(noteHelper(list_of_interval, firstNoteNum)));
}



function list_to_sound(list_of_midi_note, duration, instrument) {
    function instrumentHelper(note){
        return instrument(note,duration);
    }
    
    const finalInstrument = consecutively(map(instrumentHelper,list_of_midi_note));
    return (finalInstrument);
}


// from the previous Question here
const major_arpeggio_interval = list(4, 3, 5, 4, 3, 5);
const minor_arpeggio_interval = list(3, 4, 5, 3, 4, 5);

function generate_arpeggio(letter_name, list_of_interval) {
    return generate_list_of_note(letter_name, list_of_interval);
}

display(generate_arpeggio("C4", major_arpeggio_interval));

function arpeggiator_up(arpeggio, duration_each, instrument) {
    /* your answer here */
    function sawtoothHelper(arpeggio){
        if (length(arpeggio) < 4) {
            return list();
        }
        
        else {
            const first = head(arpeggio);
            const second = list_ref(arpeggio,1);
            const third = list_ref(arpeggio,2);
            const fourth = list_ref(arpeggio,3);
            return append(list(first,second,third,fourth), 
                          sawtoothHelper(tail(arpeggio)));
        }
    }
    
    return length(arpeggio) <4
        ?silence_sound(0)
        :list_to_sound(sawtoothHelper(arpeggio), duration_each, instrument);
}
play(arpeggiator_up(generate_arpeggio("C4"
                                         , major_arpeggio_interval)
                                         , 0.1, cello));



// Test
//play(arpeggiator_up(generate_arpeggio("C4", major_arpeggio_interval), 0.1, cello));


//Q4 
function simplify_rhythm(rhythm) {
  /* your answer here */
  function rhythmMult(rhythm, n) {
    return n === 0
      ? null
      : append(simplify_rhythm(rhythm), rhythmMult(rhythm, n - 1));
  }

  return is_list(rhythm) 
    ? is_number(head(rhythm))
            ? rhythm
            : accumulate((x, y) => 
                                append(simplify_rhythm(x), y), null, rhythm)
                                
    : rhythmMult(head(rhythm), tail(rhythm));
}
// Test
const my_rhythm = pair(list(pair(list(1,2,0,1), 2), list(1,3,0,1,3,1,0,3)), 3);
const my_simple_rhythm = simplify_rhythm(my_rhythm);
display_list(my_simple_rhythm);

const correct_simple_rhythm = list(1,2,0,1,1,2,0,1,1,3,0,1,3,1,0,3,1,2,0,1,1,
        2,0,1,1,3,0,1,3,1,0,3,1,2,0,1,1,2,0,1,1,3,0,1,3,1,0,3);
equal(my_simple_rhythm, correct_simple_rhythm);



