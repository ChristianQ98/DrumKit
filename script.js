const pressKey = (e) => {
    document.getElementById(e).className = document.getElementById(e).className.concat(" playing");
    setInterval(() => document.getElementById(e).className = "key", 100);
}