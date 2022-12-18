let productDiv = document.getElementById("resultProd");
let productCategory = document.getElementById("productCategory");
let search = document.getElementById("search");
let addedProd = JSON.parse(localStorage.getItem("extraProd"))||[];
let data = [];

let logo = document.getElementById("logo");

logo.addEventListener("click", () => {
    window.location.href = "./index.html"
})

fetch1();

function fetch1(){
    let promise = fetch("https://6398162777359127a046c700.mockapi.io/products")
    .then((requiredData)=>{
        return requiredData.json();
    })
    .then((acturalData)=>{
        data = acturalData
    })
    .catch((error)=>{
        console.error(error);
    })
}



productCategory.addEventListener("input",(e)=>{
    let filterBy = e.currentTarget.value;
    let newdata = data.filter((el)=>{
        if(filterBy == ""){
            return false;
        }
        return el.category.toLowerCase().includes(filterBy.toLowerCase())
    })
    let newdata1 = addedProd.filter((el)=>{
        if(filterBy == ""){
            return false;
        }

        return el.category.toLowerCase().includes(filterBy.toLowerCase())
    })
    showProd(newdata,newdata1)
})

showProd(data,extraProd = [])
function showProd(data,extraProd){
    productDiv.innerHTML = "";
    data.forEach((el, ind) => {
        let box = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src", el.image);

        let description = document.createElement("p");
        description.innerText = el.description;

        let price = document.createElement("h3");
        price.innerText = "£" + el.price;
        let category = document.createElement("span");
        category.innerText = el.category.toUpperCase();
        
        box.addEventListener("click", () => {
            let products = [el];
            localStorage.setItem("product", JSON.stringify(products));
            window.location.href = "./product.html"
        })
        box.append(img, description, price,category);
        productDiv.append(box);
    })

    extraProd.forEach((el, ind) => {
        let box = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src", el.image);

        let description = document.createElement("p");
        description.innerText = el.description;

        let price = document.createElement("h3");
        price.innerText = "£" + el.price;

        let category = document.createElement("span");
        category.innerText = el.category
        box.addEventListener("click", () => {
            let products = [el];
            localStorage.setItem("product", JSON.stringify(products));
            window.location.href = "./product.html"
        })

        box.append(img, description, price, category);

        productDiv.append(box);
    })
}