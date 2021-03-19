const audio = document.getElementById("audio_player");

function play_pause(element) {
    if (audio.paused) {
        audio.play();
        element.setAttribute("src", "./assets/icons/021-pause.svg");
    } else {
        audio.pause();
        element.setAttribute("src", "./assets/icons/013-play.svg");
    }
}

function stop() {
    audio.pause();
    audio.currentTime = 0;

    const icon = document.getElementById("play_pause");
    icon.setAttribute("src", "./assets/icons/013-play.svg");
}

function back() {
    audio.currentTime -= 15;
}

function forward() {
    audio.currentTime += 15;
}

function increase_volume() {
    const icon = document.getElementById("mute");

    if (audio.volume < 1) {
        audio.volume += 0.1;
    }

    if (audio.volume > 0) {
        if (audio.muted)
            audio.muted = false;
        icon.setAttribute("src", "./assets/icons/030-mute.svg");
    }
}

function decrease_volume() {
    const icon = document.getElementById("mute");

    if (audio.volume >= 0.1) {
        audio.volume -= 0.1;
    } else {
        if (!audio.muted)
            audio.muted = true;
        icon.setAttribute("src", "./assets/icons/034-volume-adjustment.svg");
    }
}

function mute() {
    const icon = document.getElementById("mute");

    if (!audio.muted) {
        audio.muted = true;
        icon.setAttribute("src", "./assets/icons/034-volume-adjustment.svg");
    } else {
        audio.muted = false;
        if (audio.volume <= 0.1)
            audio.volume = 0.5;
        icon.setAttribute("src", "./assets/icons/030-mute.svg");
    }
}

function mouseover(element) {
    const iconName = newIconName(element.getAttribute("id"));

    element.setAttribute("src", "./assets/icons/white/" + iconName);
}

function mouseout(element) {
    const iconName = newIconName(element.getAttribute("id"));

    element.setAttribute("src", "./assets/icons/" + iconName);
}

function newIconName(id) {
    switch (id) {
        case "play_pause":
            return "013-play.svg";

        case "stop":
            return "003-stop.svg";

        case "back":
            return "040-backward.svg";

        case "forward":
            return "032-forwards.svg";

        case "increase_volume":
            return "035-volume-up.svg";

        case "decrease_volume":
            return "019-reduce-volume.svg";

        case "mute":
            return "030-mute.svg";
    }
}