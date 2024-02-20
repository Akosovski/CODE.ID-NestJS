let rupiahIDR = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
});

const cardList = document.querySelectorAll(".card-text[target='_blank']");
for (let i = 0; i < cardList.length; i++) {
    var price = cardList[i].innerHTML;
    cardList[i].innerHTML = rupiahIDR.format(price);
}

const detailPriceElement = document.getElementById("detailPrice");
if (detailPriceElement) {
    detailPriceElement.innerHTML = rupiahIDR.format(detailPriceElement.innerHTML);
}