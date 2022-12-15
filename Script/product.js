
let logo = document.getElementById("logo");

logo.addEventListener("click", () => {
    window.location.href = "./index.html"
})

let prodData = JSON.parse(localStorage.getItem("product"));
let container = document.getElementById("product")
showprod(prodData)

function showprod(prodData){
prodData.forEach((el) => {
    let box = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", el.image);
    console.log(img);

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

    detail.append(description, sale, price, Shipping, qty, minus, quantity, plus, stock);
    container.append(box, detail)

    plus.addEventListener("click", () => {
        el.count++
        console.log(el.count)
        localStorage.setItem("product", JSON.stringify(prodData));
        quantity.innerText = el.count;

      })

      // decrease product quantity by clicking on minus btn

      minus.addEventListener("click", () => {
        if (el.count <= 1) {
          el.count = 1;
          localStorage.setItem("product", JSON.stringify(prodData));
        } else {
          el.count--
          localStorage.setItem("product", JSON.stringify(prodData));
          quantity.innerText = el.count;
        }
      })
});

}
