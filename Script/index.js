
let logo = document.getElementById("logo");

logo.addEventListener("click", () => {
    window.location.href = "./index.html"
})
// Cart count 
let cartCount = document.getElementById("cartcount")
let cartprod = JSON.parse(localStorage.getItem("cart"))||[];
cartCount.innerText = cartprod.length;

// CART FUNCTIONALITY 

let cart = document.getElementById("cartpage");
let isregister = localStorage.getItem("isregister")||false;
cart.addEventListener("click",()=>{
    if(isregister){
        window.location.href = "./cart.html"
    }else{
        window.location.href = "./signin.html"
    }
})
 
let arr = [
    "https://uidesign.gbtcdn.com/GB/image/5502/1190x420.jpg?imbypass=true"
    , "https://uidesign.gbtcdn.com/GB/image/8823/tools_1190X420_en.jpg"
    , "https://uidesign.gbtcdn.com/GB/image/8823/security_1190%C3%97420_en.jpg"
    , "https://uidesign.gbtcdn.com/GB/image/8823/en_1190x420.jpg?imbypass=true"
    , "https://uidesign.gbtcdn.com/GB/image/8823/PPC+1190X420+EN.jpg",
    "https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg"
]

let div = document.getElementById("slideshow");
let val = 1;

setInterval(function () {
    div.innerHTML = "";
    if (val === arr.length) {
        val = 0;
    }
    let img = document.createElement("img")
    img.setAttribute("src", arr[val])
    val++;
    div.append(img);
}, 3000);

let deal = [
    {
        "createdAt": "2022-12-12T18:35:55.582Z",
        "title": "Generic Fresh Chips",
        "image": "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16687/goods_img-v1/9c69a7d8377c.jpg",
        "category": "Sausages",
        "description": "Newest Kingsmith Walkingpad R2 English Version 12km Per Hour Fitness Equipment Sport Machine Indoor Treadmill For Running - EU",
        "price": 739,
        "id": "1"
    },
    {
        "createdAt": "2022-12-12T18:35:55.582Z",
        "title": "Generic Fresh Chips",
        "image": "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16687/goods_img-v1/bd9abf3b9d7e.jpg",
        "category": "Sausages",
        "description": "Wanbo T2 MAX Projector Global Version 1080P Mini LED Portable WIFI Full HD Projector 4K 1920 x 1080P Keystone Correction For Home - EU",
        "price": 175,
        "id": "2"
    },
    {
        "createdAt": "2022-12-12T18:35:55.582Z",
        "title": "Generic Fresh Chips",
        "image": "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16685/goods_img-v1/8ba189964e33.jpg",
        "category": "Sausages",
        "description": "Aspirapolvere Robot Kyvol Cybovac E30 - EU",
        "price": 199,
        "id": "3"
    },
    {
        "createdAt": "2022-12-12T18:35:55.582Z",
        "title": "Generic Fresh Chips",
        "image": "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16652/goods_img_big-v1/f6bacc190fa6.jpg",
        "category": "Sausages",
        "description": "Dere Laptop MBook M11 15.6 Inch 12GB RAM 512GB SSD Intel Celeron N5095 with Fingerprint Unlock Backlit Keyboard Windows 10 Notebook - Silver 12GB 256GB EU",
        "price": 499,
        "id": "4"
    },
    {
        "createdAt": "2022-12-12T18:35:55.582Z",
        "title": "Generic Fresh Chips",
        "image": "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16493/goods_img-v1/a366f0bb3c43.jpg",
        "category": "Sausages",
        "description": "Xiaomi Aqara Two-way Control Module Wireless Relay Controller 2 Channels Work with Apple Homekit Mi Home APP - White",
        "price": 27.99,
        "id": "5"
    },
    {
        "createdAt": "2022-12-12T18:35:55.582Z",
        "title": "Generic Fresh Chips",
        "image": "https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16571/goods_img-v3/8fe9d8ae4819.jpg",
        "category": "Sausages",
        "description": "New 4K HD Dual Lens Wifi Mini Camera 170° Wide Angle Portable Mini Camera Night Vision Home Surveillance Car Dash Cam - Black",
        "price": 17.99,
        "id": "6"
    }
]

let allDeal = document.getElementById("allDeal");
deal.forEach((el) => {
    let box = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", el.image);

    let description = document.createElement("p");
    description.innerText = el.description;

    let price = document.createElement("h3");
    price.innerText = "£" + el.price;

    box.append(img, description, price);
    allDeal.append(box);
})


let container_1 = document.getElementById("rec");
fetchdata();

function fetchdata(){
    let promise = fetch("https://6398162777359127a046c700.mockapi.io/products")
    .then((requiredata)=>{
        return requiredata.json();
    })
    .then((acturaldata)=>{
        showProd(acturaldata)
    })
    .catch((error)=>{
        console.error(error);
    })
}

function showProd(data) {
    container_1.innerHTML = "";
    data.forEach((el,ind) => {
        let box = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src", el.image);

        let description = document.createElement("p");
        description.innerText = el.description;

        let price = document.createElement("h3");
        price.innerText = "£" + el.price;

        let span = document.createElement("span");
        span.innerText= "Flash Sale"
        box.addEventListener("click",()=>{
            let products = [el];
            localStorage.setItem("product",JSON.stringify(products));
            window.location.href ="./product.html"
        })
        if(ind<=14){
            box.append(img,description,price,span);
        }else{
            box.append(img,description,price);
        }

        container_1.append(box);
    })
}

// Email functionality 

let emailInput = document.getElementById("email");
let subscribe = document.getElementById("subscribe");
let success = document.getElementById("succesfully")

subscribe.addEventListener("click",()=>{
    let email =emailInput.value;
    let reuslt = document.getElementById("result")
    let flag = true;
    for(let i=0;i<email.length;i++){
        if(email[i] == "@" && email[i+1] != undefined){
            success.style.display = "block"
            setTimeout(()=>{
                success.style.display = "none"
            },2000)
            flag = false;
            break;
        }
    }
    if(flag){
        reuslt.innerText = "Please Enter Valid Email"
    }
})

function showul() {
    let div = document.getElementById("list");
    div.style.display = "block"
}
function hideul() {
    let div = document.getElementById("list");
    div.style.display = "none"
}
function showp() {
    let div = document.getElementById("p1");
    div.style.display = "block"
}
function hidep() {
    let div = document.getElementById("p1");
    div.style.display = "none"
}



