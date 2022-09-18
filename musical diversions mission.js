function snare_drum(t) {
    play(adsr(0.2, 0.3, 0.3, 0.1)(noise_sound(t)));

}

snare_drum(0.5);
