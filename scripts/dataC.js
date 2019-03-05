
const section = document.querySelector("section.sectionPurchase");
const choose = document.querySelector("select.show");
let array = [];
$.ajax({
    url: "example.json",
    dataType: "json"
})
    .done(data => {
        array = data.list.slice();
        createBlocks(array)
    });


/*fetch("example.json")
    .then(data => data.json())
    .then(data => {

        array = data.list.slice();
        createBlocks(array)
    })*/

const showChoose = e => {
    const number = e.target.value
    console.log(number);
    section.innerHTML = "";
    if (number != "") {
        let tempArray;
        if (number > array.length) {
            createBlocks(array);
        } else {
            tempArray = array.slice(0, number);
            createBlocks(tempArray);
        }

    } else {
        createBlocks(array);
    }


}

const createBlocks = arr => {
    arr.forEach(element => {
        const block = document.createElement("div");
        const mainImg = document.createElement("div");
        const prices = document.createElement("div");
        const actual = document.createElement("div");
        const deprecate = document.createElement("div");
        const title = document.createElement("div");
        const main_title = document.createElement("div");
        const secend_title = document.createElement("div");
        const amountBar = document.createElement("div");
        const outletBar = document.createElement("div");
        const amount = document.createElement("div");;
        const img = document.createElement("img");
        const imgBar = document.createElement("img");

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
        const final = element.price.gross.final_float;
        const base = element.price.gross.base_float;
        actual.innerHTML = final;
        deprecate.innerHTML = base;
        outletBar.innerHTML = `oszczedzasz : <strong>${base - final} zl</strong>`
        amount.innerHTML = `sztuk:<span>0</span>`

        img.src = `https://outletmeblowy.pl/environment/cache/images/300_300_productGfx_${element.main_image}.jpg`
        imgBar.src = `img/bin.png`;

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
    })

}

choose.addEventListener("change", showChoose);