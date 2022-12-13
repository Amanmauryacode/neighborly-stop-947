let arr = [
    "https://uidesign.gbtcdn.com/GB/image/5502/1190x420.jpg?imbypass=true"
    , "https://uidesign.gbtcdn.com/GB/image/8823/tools_1190X420_en.jpg"
    , "https://uidesign.gbtcdn.com/GB/image/8823/security_1190%C3%97420_en.jpg"
    , "https://uidesign.gbtcdn.com/GB/image/8823/en_1190x420.jpg?imbypass=true"
    , "https://uidesign.gbtcdn.com/GB/image/8823/PPC+1190X420+EN.jpg",
    "https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg"
]

let div = document.getElementById("slideshow");
let val = 0;

setInterval(function () {
    if (val === arr.length) {
        val = 0;
    }
    div.innerHTML = "";
    let img = document.createElement("img")
    img.setAttribute("src", arr[val])
    val++;
    div.append(img);
}, 2000);


function showul() {
    let div = document.getElementById("list");
    div.style.display = "block"
}
function hideul() {
    let div = document.getElementById("list");
    div.style.display = "none"
}