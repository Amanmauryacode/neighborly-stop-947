let logo = document.getElementById("logo");

logo.addEventListener("click", () => {
    console.log(1);
    window.location.href = "./index.html"
})

let favitems = JSON.parse(localStorage.getItem("favdata")) || [];
let cartItems = JSON.parse(localStorage.getItem("cart"))||[];
let container = document.getElementById("favProduct");
let added = document.getElementById("added")

showfavItems(favitems)
function showfavItems(favitems) {


    favitems.forEach((element) => {
        let box = document.createElement
    });

}
function showfavItems(data) {
    container.innerText = ""
    if (favitems.length == 0) {
        container.innerText = ""
        let p = document.createElement("p");
        p.innerText = "Your Favorite Section is empty";
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
        price.innerText = "£" + el.price;

        let remove = document.createElement("button");
        remove.innerText = "Delete";
        let cart = document.createElement("button");
        cart.setAttribute("class","addtocart")
        cart.innerText = "Cart";

        cart.addEventListener("click",()=>{
            added.style.display = "inline"
            setTimeout(()=>{
                added.style.display = "none"
            },2000)
            cartItems.push(el);
            localStorage.setItem("cart",JSON.stringify(cartItems));
        })
        // Removing element from cart product 

        remove.addEventListener("click", () => {
            added.innerText = "✅ Successfully Delete"
            added.style.display = "inline"
            setTimeout(()=>{
                added.style.display = "none"
            },2000)
            data.splice(ind, 1);
            localStorage.setItem("favdata", JSON.stringify(data));
            showfavItems(data);
            console.log(data);
        })
 
        box.append(img, description, price, remove,cart);
        container.append(box);
    })
}