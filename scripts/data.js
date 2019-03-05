"use strict";

var explorer = navigator.appName;

if (explorer == "Microsoft") {
    console.log("w");
}
var section = document.querySelector("section.sectionPurchase");
var choose = document.querySelector("select.show");
var array = [];
$.ajax({
    url: "example.json",
    dataType: "json"
}).done(function (data) {
    array = data.list.slice();
    createBlocks(array);
});

/*fetch("example.json")
    .then(data => data.json())
    .then(data => {

        array = data.list.slice();
        createBlocks(array)
    })*/

var showChoose = function showChoose(e) {
    var number = e.target.value;
    console.log(number);
    section.innerHTML = "";
    if (number != "") {
        var tempArray = void 0;
        if (number > array.length) {
            createBlocks(array);
        } else {
            tempArray = array.slice(0, number);
            createBlocks(tempArray);
        }
    } else {
        createBlocks(array);
    }
};

var createBlocks = function createBlocks(arr) {
    arr.forEach(function (element) {
        var block = document.createElement("div");
        var mainImg = document.createElement("div");
        var prices = document.createElement("div");
        var actual = document.createElement("div");
        var deprecate = document.createElement("div");
        var title = document.createElement("div");
        var main_title = document.createElement("div");
        var secend_title = document.createElement("div");
        var amountBar = document.createElement("div");
        var outletBar = document.createElement("div");
        var amount = document.createElement("div");;
        var img = document.createElement("img");
        var imgBar = document.createElement("img");

        amountBar.className = "amountBar blockBar";
        outletBar.className = "outletBar blockBar";
        title.classList.add("title");
        main_title.classList.add("main-title");
        secend_title.classList.add("secend-title");
        mainImg.classList.add("mainImg");
        prices.classList.add("prices");
        actual.classList.add("actual");
        deprecate.classList.add("deprecate");
        amount.classList.add("amount");

        main_title.innerHTML = element.name;
        secend_title.innerHTML = element.producer.name;
        var final = element.price.gross.final_float;
        var base = element.price.gross.base_float;
        actual.innerHTML = final;
        deprecate.innerHTML = base;
        outletBar.innerHTML = "oszczedzasz : <strong>" + (base - final) + " zl</strong>";
        amount.innerHTML = "sztuk:<span>0</span>";

        img.src = "https://outletmeblowy.pl/environment/cache/images/300_300_productGfx_" + element.main_image + ".jpg";
        imgBar.src = "img/bin.png";

        amountBar.appendChild(imgBar);
        amountBar.appendChild(amount);
        mainImg.appendChild(img);
        title.appendChild(main_title);
        title.appendChild(secend_title);
        block.appendChild(mainImg);
        prices.appendChild(actual);
        prices.appendChild(deprecate);
        block.appendChild(prices);
        block.appendChild(title);
        block.appendChild(amountBar);
        block.appendChild(outletBar);

        //////////
        block.classList.add("block");
        section.appendChild(block);
    });
};

choose.addEventListener("change", showChoose);
