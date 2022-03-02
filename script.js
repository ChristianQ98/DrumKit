// Sound for when 'a' is pressed
const clap = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_clap.wav');
clap.crossOrigin = "anonymous";

// Sound for when 's' is pressed
const hihat = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_hihat.wav');
hihat.crossOrigin = "anonymous";

// Sound for when 'd' is pressed
const kick = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_kick.wav');
kick.crossOrigin = "anonymous";

// Sound for when 'f' is pressed
const openhat = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_openhat.wav');
openhat.crossOrigin = "anonymous";

// Sound for when 'g' is pressed
const boom = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_boom.wav');
boom.crossOrigin = "anonymous";

// Sound for when 'h' is pressed
const ride = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_ride.wav');
ride.crossOrigin = "anonymous";

// Sound for when 'j' is pressed
const snare = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_snare.wav');
snare.crossOrigin = "anonymous";

// Sound for when 'k' is pressed
const tom = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_tom.wav');
tom.crossOrigin = "anonymous";

// Sound for when 'l' is pressed
const tink = new Audio('./sounds/01 - JavaScript Drum Kit_sounds_tink.wav');
tink.crossOrigin = "anonymous";

// Function that changes the styling of the key and plays the correct sound when the key is pressed
const pressKey = (btn) => {
    // When the key/button gets pressed, it will have the styling of the "playing" class
    document.getElementById(btn).className = document.getElementById(btn).className.concat(" playing");
    switch(btn) {
        case 'a':
            clap.play();
        case 's':
            hihat.play();
        case 'd':
            kick.play();
        case 'f':
            openhat.play();
        case 'g':
            openhat.play();
        case 'h':
            ride.play();
        case 'j':
            snare.play();
        case 'k':
            tom.play();
        case 'l':
            tink.play();
    }
    // After 100 ms, the key/button will go back to only having the class of "key", hence, returning to its default styling
    setInterval(() => document.getElementById(btn).className = "key", 100);
}