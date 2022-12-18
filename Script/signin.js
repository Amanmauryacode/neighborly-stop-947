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
let adminStatus = document.getElementById("Admin");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    error.innerText = "";
    let em = email.value;
    let p = password.value;
    let isregister = false;

    if(em == "admin@techgear.com" && p == "Admin@1212"){
        adminStatus.style.display = "block"
        setTimeout(()=>{
            window.location.href = "./Admin_Page.html"
        },2000)
        
    }else{
        RegisterData.forEach((element) => {
            if(element.email == em && element.password == p){
                console.log(1);
                isregister = true;
                localStorage.setItem("isregister",isregister);
            }
            
        });
        if(isregister){

            setTimeout(()=>{
                loginstatus.style.display = "block";
            },200)
            setTimeout(()=>{
                loginstatus.style.display = "none";
                window.location.href = "./index.html"
            },1000)
        }else{
            error.innerText = "Wrong Credential !";
            error.style.color ="red";
        }
    }

    
    
})
