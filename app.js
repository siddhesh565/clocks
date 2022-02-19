

setInterval(() => {

    var day = new Date();
    var hh = day.getHours();
    // console.log(hh);
    var mm = day.getMinutes() * 6;
    // console.log(mm);
    var ss = day.getSeconds() * 6;
    // console.log(ss);

    // document.querySelector("#sec").style.backgroundColor = "red";

    // document.querySelector("#sec").style.transform = "rotateZ(120deg)";
    // transform: rotateZ(90deg);

    var sec = "rotateZ(" + ss + "deg)"
    document.querySelector("#sec").style.transform = sec;

    var min = "rotateZ(" + mm + "deg)"
    document.querySelector("#min").style.transform = min;

    var hrsValue = ((hh * 30) + (mm / 12));
    // console.log(hrsValue);
    var hrs = "rotateZ(" + hrsValue + "deg)"
    document.querySelector("#hr").style.transform = hrs;

})



function handleclick() {
    var mode = document.querySelector("#type").value;
    // console.log(mode);
    let docStyle = getComputedStyle(document.documentElement);
    let myVarVal = docStyle.getPropertyValue('--dark-background-color');
    // console.log(myVarVal);
    let mainColor = document.querySelector("html");
    if (mode == 'light') {
        mainColor.style.setProperty('--dark-background-color', '#E9E5D6');
        mainColor.style.setProperty('--dark-clock-ring-color', '#d1dae3');
        mainColor.style.setProperty('--container-color', '#848484');
        mainColor.style.setProperty('--hours-color', '#19282F');
        mainColor.style.setProperty('--min-color', '#789395');
        mainColor.style.setProperty('--sec-color', '#DA1212');
        document.querySelector(".container").style.background = "url('./img/clock.png') no-repeat center center/cover"
    }
    else if (mode == 'yellow') {
        mainColor.style.setProperty('--dark-background-color', '#2C3333');
        mainColor.style.setProperty('--dark-clock-ring-color', '#19282F');
        mainColor.style.setProperty('--container-color', '#cad3dc');
        mainColor.style.setProperty('--hours-color', '#FFD32D');
        mainColor.style.setProperty('--min-color', '#cad3dc');
        mainColor.style.setProperty('--sec-color', '#789395');
        document.querySelector(".container").style.background = "url('./img/clock_2.png') no-repeat center center/cover"
    }
    else if (mode == 'classic') {
        mainColor.style.setProperty('--dark-background-color', '#FFF8F3');
        mainColor.style.setProperty('--dark-clock-ring-color', '#E9E5D6');
        mainColor.style.setProperty('--container-color', '#000');
        mainColor.style.setProperty('--hours-color', '#000');
        mainColor.style.setProperty('--min-color', '#000');
        mainColor.style.setProperty('--sec-color', '#000');
        document.querySelector(".container").style.background = "url('./img/clock_3.png') no-repeat center center/cover"
    }
    else if (mode == 'blue') {
        mainColor.style.setProperty('--dark-background-color', '#2C3333');
        mainColor.style.setProperty('--dark-clock-ring-color', '#19282F');
        mainColor.style.setProperty('--container-color', '#cad3dc');
        mainColor.style.setProperty('--hours-color', '#4FBDBA');
        mainColor.style.setProperty('--min-color', '#cad3dc');
        mainColor.style.setProperty('--sec-color', '#789395');
        document.querySelector(".container").style.background = "url('./img/clock_4.png') no-repeat center center/cover"
    }
    else {
        mainColor.style.setProperty('--dark-background-color', '#2C3333');
        mainColor.style.setProperty('--dark-clock-ring-color', '#19282F');
        mainColor.style.setProperty('--container-color', '#cad3dc');
        mainColor.style.setProperty('--hours-color', '#DA1212');
        mainColor.style.setProperty('--min-color', '#cad3dc');
        mainColor.style.setProperty('--sec-color', '#789395');
        document.querySelector(".container").style.background = "url('./img/clock.png') no-repeat center center/cover"
    }
}


