var womenOriginalsData = [{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/133f3c15fbc94086a98dad5c0108ce1b_9366/Jeremy_Scott_Crop_Hoodie_Black_H53361_21_model.jpg",
    price: "Sold out",
    name: "Jeremy Scott Crop Hoodie",
    type: "Women lifestyle",
    new: ""
},
{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3ea0e789d3074342a211ad9e017609e5_9366/NMD_R1_Spectoo_Shoes_Black_GZ9288_01_standard.jpg",
    price: "13999.00",
    name: "NMD_R1 Spectoo Shoes",
    type: "Women originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/49571736fc7e4bca878ead12014c2bcc_9366/Adicolor_Nylon_Track_Top_White_H06697_21_model.jpg",
    price: "7599.00",
    name: "Adicolor Nylon Track Top",
    type: "Women originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/08965b3d5dd9457e9a8aac840039672b_9366/Adicolor_Classics_Trefoil_Tee_Black_GN2896_21_model.jpg",
    price: "1999.00",
    name: "Adicolor Classics Trefoil Tee",
    type: "Women originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3dd18d13c9204434be24ac7101510a46_9366/Adicolor_Classics_3-Stripes_Tee_White_GN2913_21_model.jpg",
    price: "1999.00",
    name: "Adicolor Classics 3 - Stripes Tee",
    type: "Women originals",
    new: "new"
}
];
displayData(womenOriginalsData);

function displayData(arr) {
    arr.map(function(element, index) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        var symDiv = document.createElement("div");
        var priceDiv = document.createElement("div");
        var name = document.createElement("h6");
        var type = document.createElement("h6");
        var neworNot = document.createElement("h6");

        img.setAttribute("src", element.imgURL);
        symDiv.innerHTML = '<i class="far fa-heart ">';
        symDiv.setAttribute("class", "wishlistSymbol");
        if (element.price == "Sold out") {
            priceDiv.innerHTML = '<p>' + element.price + '</p>';
        } else if (element.price != "") {
            priceDiv.innerHTML = '<p>' + "Rs. " + element.price + '</p>';
        }

        priceDiv.setAttribute("class", "price1");
        name.textContent = element.name;
        type.textContent = element.type;
        neworNot.textContent = element.new;

        div.append(img, symDiv, priceDiv, name, type, neworNot);
        document.querySelector("#womenOriginals").append(div);
    });
}