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


    
