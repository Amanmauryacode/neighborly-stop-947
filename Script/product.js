
let logo = document.getElementById("logo");

logo.addEventListener("click", () => {
    window.location.href = "./index.html"
})

// CART FUNCTIONALITY 

let cartportion = document.getElementById("cartpage");
let isregister = localStorage.getItem("isregister")||false;
cartportion.addEventListener("click",()=>{
    if(isregister){
        window.location.href = "./cart.html"
    }else{
        window.location.href = "./signin.html"
    }
})

let prodData = JSON.parse(localStorage.getItem("product"));
let cart = JSON.parse(localStorage.getItem("cart"))||[];
let cartCount = document.getElementById("cartcount");
let container = document.getElementById("product")
showprod(prodData)

function showprod(prodData){
  cartCount.innerText = cart.length;
prodData.forEach((el) => {
    let box = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", el.image);

    box.append(img);

    let detail = document.createElement("div");

    let description = document.createElement("h1");
    description.innerText = el.description;

    let sale = document.createElement("h2");
    sale.innerText = "FLASH SALE";


    let price = document.createElement("p");
    price.innerText = "Price: " + "£" + el.price;
    price.setAttribute("id", "price")

    let Shipping = document.createElement("p");
    Shipping.innerText = "Shipping: FREE SHIPPING to France Via Expedited Shipping "

    el.quantity = 1;

    let minus = document.createElement("button");
    minus.innerText = "-";

    let qty = document.createElement("span");
    qty.innerText = "QTY: ";
    qty.setAttribute("id", "qty")

    let quantity = document.createElement("span");
    quantity.innerText = el.quantity;

    let plus = document.createElement("button");
    plus.innerText = "+";

    let stock = document.createElement("span");
    stock.innerText = "in stock"

    let btnbox = document.createElement("div");

    let addtocart = document.createElement("button");
    addtocart.innerText = "Add TO Cart";

    let buyNow = document.createElement("button");
    buyNow.innerText = "Buy Now";
    btnbox.append(addtocart,buyNow);

    detail.append(description, sale, price, Shipping, qty, minus, quantity, plus, stock,btnbox);
    container.append(box, detail)

    addtocart.addEventListener("click",()=>{
      if(isregister){
        cart.push(el);
        localStorage.setItem("cart",JSON.stringify(cart));
        cartCount.innerText = cart.length;
      }else{
        window.location.href = "./signin.html"
      }
    
    })

    plus.addEventListener("click", () => {
        +el.count++
        localStorage.setItem("product", JSON.stringify(prodData));
        quantity.innerText = el.count;

      })

      // decrease product quantity by clicking on minus btn

      minus.addEventListener("click", () => {
        if (el.count <= 1) {
          el.count = 1;
          localStorage.setItem("product", JSON.stringify(prodData));
        } else {
          +el.count--
          localStorage.setItem("product", JSON.stringify(prodData));
          quantity.innerText = el.count;
        }
      })
});

}
