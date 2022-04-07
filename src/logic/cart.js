document.querySelector(".hamburger").addEventListener("click", myFunction);

function myFunction() {
    document.querySelector(".hamburger").classList.toggle("change")

    document.querySelector(".hamnames").classList.toggle("category")

}


var wishlist = JSON.parse(localStorage.getItem("wishlistdb")) || []
var len = wishlist.length;
var cartlist = JSON.parse(localStorage.getItem("cartlistdb")) || []
var le = cartlist.length;
displaycart(cartlist)
document.querySelector("#wishlistLen").textContent = len;
document.querySelector("#cartLen").textContent = le;
document.querySelector(".card_len").textContent = le;
var total = 0;
var checkout_container = document.querySelector("#CHECKOUT_SECTION");
console.log(checkout_container);
function displaycart(arr) {
    total = 0;
    for (var i = 0; i < cartlist.length; i++) {

        if (cartlist[i].price == "Sold out") {
            continue;
        }
        else {
            console.log(cartlist[i].price)
            total += Number(cartlist[i].price);
            // console.log(total);

        }


    }


    arr.map(function (element, index) {


        // total = Number(total) + Number(element.price);
        var maindiv = document.createElement("div");
        maindiv.setAttribute("id", "prod");

        var div_img = document.createElement("div");
        div_img.setAttribute("id", "fir");

        var img = document.createElement("img");
        img.setAttribute("src", element.imgURL);

        var div_cont_main = document.createElement("div");
        div_cont_main.setAttribute("id", "sec")

        var div_cont = document.createElement("div");
        div_cont.setAttribute("id", "sec1");

        var p1 = document.createElement("p");
        p1.textContent = element.name;

        var p2 = document.createElement("p");
        p2.textContent = element.type;

        var div_prices = document.createElement("div");
        div_prices.setAttribute("id", "sec2");

        var span = document.createElement("span");
        span.setAttribute("class", "close");
        span.innerHTML = '<i class="fas fa-times"></i>'
        span.addEventListener("click", function () {
            deleteRow(index)
        })

        var p3 = document.createElement("p");
        p3.textContent = "Rs. " + element.price;
        var symDiv = document.createElement("div");
        symDiv.setAttribute("class", "wishlistsymbal")
        symDiv.innerHTML = '<i class="far fa-heart ">';
        symDiv.addEventListener("click", symbalcolor)
        function symbalcolor() {
            symDiv.innerHTML = '<i class="fas fa-heart"></i>';
            wishlist.push(element);
            localStorage.setItem('wishlistdb', JSON.stringify(wishlist));
            deleteRow(index);

        }

        div_img.append(img);
        div_cont_main.append(div_cont, div_prices);
        div_cont.append(p1, p2, symDiv);
        div_prices.append(p3, span);
        maindiv.append(div_img, div_cont_main);

        document.querySelector("#mycarddata").append(maindiv);



    })

    document.querySelector(".mytotal").textContent = total;
    document.querySelector("#check_len").textContent = le;
    document.querySelector("#checktotal").textContent = total;
    document.querySelector("#check_total_amt").textContent = total;
}

function deleteRow(index) {
    console.log("delete");
    cartlist.splice(index, 1)
    localStorage.setItem("cartlistdb", JSON.stringify(cartlist));
    displaycart(cartlist)

}
document.querySelector("#proapp").addEventListener("click", mypro);
// console.log("to", total)
function mypro() {
    // console.log(total)
    var discount = 0;
    var disamt = 0;
    var pro = document.querySelector("#myinput").value;
    if (pro == "Addi@30") {
        discount = (Number(total) * (30) / 100);
        disamt = (Number(total) * (100 - 30)) / 100;
        console.log(discount);
        console.log(disamt);
    }
}
document.querySelector("#check_discount").textContent = total;
