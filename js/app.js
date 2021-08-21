// Memory section
function getInput(isEight) {
    const memoryPrice = document.getElementById('memory-price')
    
    if (isEight) {
        memoryPrice.innerText = '0';
    }
    else {
        memoryPrice.innerText = '180';
    }
    let memoryPriceText = memoryPrice.innerText;
    const memoryPriceNumber = parseInt(memoryPriceText);
    // console.log(memoryPriceNumber)
    getTotal()
}
document.getElementById('button-8').addEventListener('click', function () {
    getInput(true);
})
document.getElementById('button-16').addEventListener('click', function () {
    
    getInput(false);
})
// storage section
function storageInput(storageType) {
    const storagePrice = document.getElementById('storage-price')
    if (storageType == "256") {
        storagePrice.innerText = '0';
    }
    else if (storageType == "512") {
        storagePrice.innerText = '100';
    }
    else {
        storagePrice.innerText = '180';
    }
    let storagePriceText = storagePrice.innerText;
    const storagePriceNumber = parseInt(storagePriceText)
    // console.log(storagePriceNumber)
    getTotal()
}
document.getElementById('button-256').addEventListener('click', function () {
    storageInput("256")
})
document.getElementById('button-512').addEventListener('click', function () {
    storageInput("512")
    
})
document.getElementById('button-1').addEventListener('click', function () {
    storageInput("1")
})
// delivery section
function getdCharge(isFree) {
    const deliveryPrice = document.getElementById('delivery-price')
    if (isFree) {
        deliveryPrice.innerText = '0';
    }
    else {
        deliveryPrice.innerText = '20';
    }
    let deliveryPriceText = deliveryPrice.innerText;
    const deliveryPriceNumber = parseInt(deliveryPriceText);
    // console.log(deliveryPriceNumber)
    getTotal()
}
document.getElementById('free-delivery').addEventListener('click', function () {
   getdCharge(true)
})
document.getElementById('express-delivery').addEventListener('click', function () {
   getdCharge(false)
})
// common price

// console.log(commonNumber);
// Total calculation
function getTotal() {
    const commonPrice = document.getElementById('common-price');
    const commonPriceText = commonPrice.innerText;
    let commonNumber = parseInt(commonPriceText);
    const memory = document.getElementById('memory-price');
    const memoryPrice = parseInt(memory.innerText)
    const storage = document.getElementById('storage-price');
    const storagePrice = parseInt(storage.innerText)
    const delivery = document.getElementById('delivery-price');
    const deliveryPrice = parseInt(delivery.innerText)
    let total = commonNumber + memoryPrice + storagePrice + deliveryPrice;
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalNumber = parseInt(totalPriceText);
    totalPrice.innerText = total;
    document.getElementById('promo-button').addEventListener('click', function () {
        const promo = document.getElementById('promo-code')
        const promoCode = promo.value;
        if (promoCode == 'stevekaku') {
            document.getElementById('grand-total').innerText = parseInt(totalPrice.innerText )* 0.80;
        }
        promo.value=''
    })
}





