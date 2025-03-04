const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

const stock_name = ["Adidas SP", "Adidas Temple", 
    "Adidas TrioLeafs", "Adidas Mercedes", 
    "Adidas Biker", "Nike SP1", "Nike SP2", "Nike Jordan", 
    "Adidas Pickleball1", "Adidas Tennis", "Adidas Pickleball2",
    "Adidas Summer", "Adidas TrioStrike", "Adidas PureWhite",
     "Adidas HopShop", "Adidas Peace"];
 
const stock_price = [650000, 55000, 32000, 990000, 1200000, 650000, 350000, 500000, 
    400000, 380000, 410000, 320000, 550000, 300000, 880000, 1300000];
var cart = [];

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

var addtocart = document.getElementById("addtocart");
addtocart.onclick = function() {
    console.log("Đã thêm vào giỏ hàng");
    alert("Đã thêm vào giỏ hàng");
};