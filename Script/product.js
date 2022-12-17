
let logo = document.getElementById("logo");

logo.addEventListener("click", () => {
  window.location.href = "./index.html"
})

// CART FUNCTIONALITY 

let cartportion = document.getElementById("cartpage");
let isregister = localStorage.getItem("isregister") || false;
cartportion.addEventListener("click", () => {
  if (isregister) {
    window.location.href = "./cart.html"
  } else {
    window.location.href = "./signin.html"
  }
})

// FAVORITE PAGE OPENING 

let favpage = document.getElementById("favpage");
favpage.addEventListener("click", () => {
  if (isregister) {
    window.location.href = "./favorite.html"
  } else {
    window.location.href = "./signin.html"
  }
})

let prodData = JSON.parse(localStorage.getItem("product"));
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let favdata = JSON.parse(localStorage.getItem("favdata")) || [];
let favcount = document.getElementById("favcount")
let cartCount = document.getElementById("cartcount");
let container = document.getElementById("product")
let added = document.getElementById("added");
showprod(prodData)

function showprod(prodData) {
  cartCount.innerText = cart.length;
  favcount.innerText = favdata.length;
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

    let fav = document.createElement("button");
    fav.innerText = "❤️ Favourite";
    btnbox.append(addtocart, buyNow, fav);

    detail.append(description, sale, price, Shipping, qty, minus, quantity, plus, stock, btnbox);
    container.append(box, detail)

    // ADD TO CART 

    addtocart.addEventListener("click", () => {
      if (isregister) {
        added.style.display = "inline"
        setTimeout(() => {
          added.style.display = "none"
        }, 2000)
        cart.push(el);
        localStorage.setItem("cart", JSON.stringify(cart));
        cartCount.innerText = cart.length;
      } else {
        window.location.href = "./signin.html"
      }

    })

    // ADD TO FAVORITE PART 

    fav.addEventListener("click", () => {
      if (isregister) {
        added.style.display = "inline"
        setTimeout(() => {
          added.style.display = "none"
        }, 2000)
        favdata.push(el);
        localStorage.setItem("favdata", JSON.stringify(favdata));
        favcount.innerText = favdata.length;
      } else {
        window.location.href = "./signin.html"
      }

    })


    plus.addEventListener("click", () => {
      el.quantity++;
      localStorage.setItem("product", JSON.stringify(prodData));
      quantity.innerText = el.quantity;

    })

    // decrease product quantity by clicking on minus btn

    minus.addEventListener("click", () => {
      if (el.quantity <= 1) {
        el.quantity = 1;
        localStorage.setItem("product", JSON.stringify(prodData));
      } else {
        el.quantity--
        localStorage.setItem("product", JSON.stringify(prodData));
        quantity.innerText = el.quantity;
      }
    })
  });

}
