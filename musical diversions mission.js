function snare_drum(t) {
    return (adsr(0.2, 0.3, 0.3, 0.1)(noise_sound(t)));

}

//play(snare_drum(0.5));


function bass_drum(t){
    return (adsr(0.2, 0.3, 0.3, 0.1)(sine_sound(79,t)));
}
play(bass_drum(0.5));
