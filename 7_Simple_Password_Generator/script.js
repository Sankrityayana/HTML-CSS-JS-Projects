const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");
const show = document.querySelector(".show");
const passwordInput = document.getElementById("password");

generateButton.onclick = function generatePassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";
    const passwordLength = 16;
    
    for(let i = 0; i < passwordLength; i++) {
        let generatedPwd = Math.floor(Math.random() * characters.length);
        password += characters.substring(generatedPwd, generatedPwd + 1);
    }
    passwordInput.value = password;
}

copyButton.onclick = function copyPassword() {
    const passwordValue = passwordInput.value;
    if(passwordValue.trim() === "") {
        alert("Please generate a password first.");
    } else {
        navigator.clipboard.writeText(passwordValue).then(function() {
            show.innerHTML = "Your new Password is:<br>" + passwordValue
            show.classList.add('active');
            setTimeout(() => {
                show.classList.remove('active');
            }, 2000);
            passwordInput.value = "";
        })
    }
}