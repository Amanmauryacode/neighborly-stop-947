let logo = document.getElementById("logo");
let logout = document.getElementById("logout")
let isregister = localStorage.getItem("isregister")||false;
logo.addEventListener("click",()=>{
    window.location.href = "./index.html"
})
logout.addEventListener("click",()=>{
    window.location.href = "./signin.html"
})

let myform = document.querySelector("form");
let img = document.getElementById("imgLink");
let desc = document.getElementById("Descriptions");
let Price = document.getElementById("Price");
let Category = document.getElementById("Category");
let product = JSON.parse(localStorage.getItem("extraProd"))||[];
let upload = document.getElementById("uploaded")

myform.addEventListener("submit",(e)=>{
    e.preventDefault();
    upload.style.display = "block";
    setTimeout(()=>{
        upload.style.display = "none";
    },2000)
    let prod = {
        image : img.value,
        description : desc.value,
        price : Price.value,
        category : Category.value
    }

    product.push(prod);
    localStorage.setItem("extraProd",JSON.stringify(product));

})