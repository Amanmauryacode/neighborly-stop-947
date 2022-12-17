let logo = document.getElementById("logo");

logo.addEventListener("click", () => {
    window.location.href = "./index.html"
})

let cartitems = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("cartProduct");
let added = document.getElementById("added");
let subtotal = document.getElementById("subtotal");

showcartItems(cartitems)
function showcartItems(cartitems) {


    cartitems.forEach((element) => {
        let box = document.createElement
    });

}
function showcartItems(data) {
    container.innerText = ""
    let total = 0;
    data.forEach((el)=>{
        total += el.quantity*el.price
    })
    subtotal.innerText = "£ " +total;
    subtotal.style.color ="red"
    if (cartitems.length == 0) {
        container.innerText = ""
        let p = document.createElement("p");
        p.innerText = "Your shopping cart is empty";
        p.setAttribute("class", "empty")
        container.append(p);
    }
    data.forEach((el, ind) => {
        let box = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src", el.image);

        let description = document.createElement("p");
        description.innerText = el.description;

        let price = document.createElement("h3");
        price.innerText = "£ " + el.price;

        let remove = document.createElement("button");
        remove.innerText = "Remove";

        let qty = document.createElement("div");

        let Qty = document.createElement("span");
        Qty.innerText = "QTY: ";
        Qty.setAttribute("id", "qty")

        let minus = document.createElement("button");
        minus.setAttribute("id", "minus")
        minus.innerText = "-";

        let quantity = document.createElement("span");
        quantity.innerText = el.quantity;

        let plus = document.createElement("button");
        plus.setAttribute("id", "plus")
        plus.innerText = "+";
        // increase product quantity by clicking on plus btn 

        plus.addEventListener("click", () => {
            el.quantity++
            localStorage.setItem("cart", JSON.stringify(data));
            quantity.innerText = el.quantity;
            showcartItems(data);

        })

        // decrease product quantity by clicking on minus btn

        minus.addEventListener("click", () => {
            if (el.quantity <= 1) {
                el.quantity = 1;
                localStorage.setItem("cart", JSON.stringify(data));
            } else {
                el.quantity--
                localStorage.setItem("cart", JSON.stringify(data));
                quantity.innerText = el.quantity;
            }
            showcartItems(data);
        })

        // Removing element from cart product 

        remove.addEventListener("click", () => {
            added.style.display = "inline"
            setTimeout(()=>{
                added.style.display = "none"
            },2000)
            data.splice(ind, 1);
            localStorage.setItem("cart", JSON.stringify(data));
            showcartItems(data);
            console.log(data);
        })
        qty.append(Qty,minus, quantity, plus);
        box.append(img, description, price, qty, remove);
        container.append(box);
    })
}