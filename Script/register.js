let logo = document.getElementById("logo");

logo.addEventListener("click", () => {
    window.location.href = "./index.html"
})

let loginData = JSON.parse(localStorage.getItem("loginData")) || [];
let form = document.querySelector("form");
let email = document.getElementById("email")
let password = document.getElementById("password");
let password_2 = document.getElementById("password-2");
let code = document.getElementById("code");
let error = document.getElementById("error");
let pin = document.getElementById("pin");


var val = Math.floor(1000 + Math.random() * 9000);
pin.innerText = val;
// pin.innerText = val;


form.addEventListener("submit", (e) => {
    e.preventDefault();
    error.innerText = "";
    if (password.value.length >= 8 && password_2.value != "") {
        if (password.value == password_2.value && code.value == val) {
            error.innerText = "Successfully Registerd"
            error.style.color = "green"
            let data = {
                email: email.value,
                password: password.value
            }
            loginData.push(data);
            localStorage.setItem("loginData", JSON.stringify(loginData));
            setTimeout(()=>{
                window.location.href = "./signin.html"
            },2000)
        } else {
            if(code.value != val){
                error.innerText = "Incorrect code"
                error.style.color = "red"
            }else{
                error.innerText = "Password not match"
                error.style.color = "red"
            }
           
        }
    } else {
        if (password_2.value == "") {
            error.innerText = "Re-type password"
            error.style.color = "red"
        } else {
            error.innerText = "Password Must greater than 8 digit"
            error.style.color = "red"
        }

    }


})