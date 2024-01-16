
/*getting object */
let control = document.getElementById("bulb");

//On the bulb
let turnOn = () => {
    control.setAttribute("src", "onBulb.png");
}
//Off the bulb
let turnOff = () => {
    control.setAttribute("src", "offBulb.jpg");
}
//Control bulb with one button
let toggle = () => {
    let control = document.getElementById("bulb");
    let srcValue = control.getAttribute("src");
    let onOffButton = document.getElementById("onoffbtn")
    let val = onOffButton.innerHTML;
    console.log(val);
    if (srcValue == "offBulb.jpg") {
        turnOn();
        onOffButton.innerHTML = "OFF";
    } else {
        turnOff();
        onOffButton.innerHTML = "ON";
    }
}
