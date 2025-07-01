const display = document.getElementById("_status");
const body = document.body;
const submit = document.getElementById("_submit");
const refresh = document.getElementById("_refresh");

const char = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let captcha = "";

body.onload = function generateCaptcha() {
    const captchaLength = 6;
    for (let i = 0; i < captchaLength; i++) {
        const randomIndex = Math.floor(Math.random() * char.length);
        captcha += char.substring(randomIndex, randomIndex + 1);
    }
    document.getElementById("_generator").value = captcha
    display.innerText = "Captcha generator";
}

submit.onclick = function checkInput() {

}

refresh.onclick = function refreshCaptcha() {
    let newCaptcha = "";
    for(let i = 0; i < captcha.length; i++) {
        const randomChar = char[Math.floor(Math.random() * char.length)];
        newCaptcha += randomChar;
        
    }
}

