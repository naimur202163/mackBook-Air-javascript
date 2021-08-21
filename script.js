function getTotalPrice() {
    const bestPrice = document.getElementById('best-price').innerText;
    const bestPriceNumber = parseInt(bestPrice);

    const memoryPrice = document.getElementById('memory-price').innerText;
    const memoryPriceNumber = parseInt(memoryPrice);

    const storagePrice = document.getElementById('storage-price').innerText;
    const storagePriceNumber = parseInt(storagePrice);

    const deliveryPrice = document.getElementById('cost').innerText;
    const deliveryPriceNumber = parseInt(deliveryPrice);

    const total = bestPriceNumber + memoryPriceNumber + storagePriceNumber + deliveryPriceNumber;

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total;


    const megaTotal = document.getElementById('megaTotal');
    megaTotal.innerText = total;
    return total;
}

function inputProduct(price, product) {
    const memoryPrice = document.getElementById(product);
    memoryPrice.innerText = price;

}

//Memoery
document.getElementById('buttonMemory-8').addEventListener('click', function () {
    inputProduct(0, "memory-price");

    getTotalPrice();

});
document.getElementById('buttonMemory-16').addEventListener('click', function () {
    inputProduct(180, "memory-price");
    getTotalPrice();

});
//Storage Updates
document.getElementById('button256').addEventListener('click', function () {
    inputProduct(0, "storage-price");
    getTotalPrice();

});

document.getElementById('button512').addEventListener('click', function () {
    inputProduct(100, "storage-price");
    getTotalPrice();

});
document.getElementById('button1Tb').addEventListener('click', function () {
    inputProduct(180, "storage-price");
    getTotalPrice();

});

//Delivary Price
document.getElementById('dilivary25').addEventListener('click', function () {
    inputProduct(0, "cost");
    getTotalPrice();

});
document.getElementById('dilivary21').addEventListener('click', function () {
    inputProduct(20, "cost");
    getTotalPrice();

});



document.getElementById('fridayLast').addEventListener('click', function () {
    setId('deliveryCost', 0);
    getTotalPrice();
});

document.getElementById('fridayFirst').addEventListener('click', function () {
    setId('deliveryCost', 20);
    getTotalPrice();
});

document.getElementById('promo-code').addEventListener('click', function () {
    const steveKaku = document.getElementById('steveKaku').value;
    const megaTotal = document.getElementById('megaTotal');

    if (steveKaku == 'stevekaku') {
        const totals = getTotalPrice() * 0.8;
        megaTotal.innerText = totals.toFixed(2);

    }
    document.getElementById('steveKaku').value = '';
})