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
