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

// Function that changes the styling of the key and plays the correct sound when the key is clicked using the MOUSE
const clickKey = (btn) => {
    // When the key/button gets pressed, it will have the styling of the "playing" class
    document.getElementById(btn).className = document.getElementById(btn).className.concat(" playing");
    // A different sound will be played depending on which key gets clicked on the screen using the mouse
    switch(btn) {
        case 'a':
            clap.play();
            break;
        case 's':
            hihat.play();
            break;
        case 'd':
            kick.play();
            break;
        case 'f':
            openhat.play();
            break;
        case 'g':
            boom.play();
            break;
        case 'h':
            ride.play();
            break;
        case 'j':
            snare.play();
            break;
        case 'k':
            tom.play();
            break;
        case 'l':
            tink.play();
    }
    // After 100 ms, the key/button will go back to only having the class of "key", hence, returning to its default styling
    setInterval(() => document.getElementById(btn).className = "key", 100);
}

// Function that changes the styling of the key and plays the correct sound when the key is pressed using the KEYBOARD
const pressKey = document.addEventListener('keydown', function(event) {
    // Stores the key being pressed on the keyboard
    let key = event.key;
    // When the key/button gets pressed, it will have the styling of the "playing" class
    document.getElementById(key).className = document.getElementById(key).className.concat(" playing");
    // A different sound will be played depending on which key on the keyboard gets pressed
    switch(key) {
        case 'a':
            clap.play();
            break;
        case 's':
            hihat.play();
            break;
        case 'd':
            kick.play();
            break;
        case 'f':
            openhat.play();
            break;
        case 'g':
            boom.play();
            break;
        case 'h':
            ride.play();
            break;
        case 'j':
            snare.play();
            break;
        case 'k':
            tom.play();
            break;
        case 'l':
            tink.play();
    }
    // After 100 ms, the key/button will go back to only having the class of "key", hence, returning to its default styling
        setInterval(() => document.getElementById(key).className = "key", 100);
    })