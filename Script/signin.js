let logo = document.getElementById("logo");

logo.addEventListener("click",()=>{
    window.location.href = "./index.html"
})
let RegisterData = JSON.parse(localStorage.getItem("loginData"))||[];
let form = document.querySelector("form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let error = document.getElementById("error");
let loginstatus = document.getElementById("login");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let em = email.value;
    let p = password.value;
    let isregister = false;

    RegisterData.forEach((element) => {
        if(element.email == em && element.password == p){
            isregister = true;
        }
        
    });
    if(isregister){
        loginstatus.style.display = "block";
        setTimeout(()=>{
            loginstatus.style.display = "none";
            window.location.href = "./index.html"
        },1000)
    }else{
        error.innerText = "Wrong Credential !";
        error.style.color ="red";
    }
})
