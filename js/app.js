// extra function for memory
function memoryCard(isadd) {
    const memoryCost = document.getElementById("memory-cost");
    if (isadd == true) {
        memoryCost.innerText = 0;
    }
    else {
        memoryCost.innerText = 180;
    }
    totalPrice()
};
// extra function for storage
function ssdStorage(isStorageAdd) {
    // debugger;
    const storageCost = document.getElementById("storage-cost");
    if (isStorageAdd == true) {
        storageCost.innerText = 0;
    }
    else if (isStorageAdd == false) {
        storageCost.innerText = 100;
    }
    else {
        storageCost.innerText = 180;
    }
    totalPrice()

};
// extra function for delivery
function deliveryTime(isCostAdd) {
    const deliveryCost = document.getElementById("delivery-cost")
    if (isCostAdd == true) {
        deliveryCost.innerText = 0;
    }
    else {
        deliveryCost.innerText = 20;
    }
    totalPrice()
};
function extraDevice(device) {
    const extraDevicePrice = document.getElementById(device + '-cost');
    const extraDeviceCost = extraDevicePrice.innerText;
    return parseInt(extraDeviceCost)
}
// total price calculate.
function totalPrice() {
    // debugger;
    const bestPrice = document.getElementById("best-price");
    const bestPriceNumber = parseInt(bestPrice.innerText);
    const memoryCard = extraDevice("memory");
    const storageCard = extraDevice("storage");
    const deliveryCard = extraDevice("delivery");
    const netBill = bestPriceNumber + memoryCard + storageCard + deliveryCard;
    const totalPrice = document.getElementById("total-price");
    totalPrice.innerText = netBill;
    const inTotalPrice = document.getElementById("in-total-price");
    inTotalPrice.innerText = netBill;
}
// For discount and apply event add.
function pomocode() {
    const inputfield = document.getElementById("pomo-code");
    const inputPomo = inputfield.value;
    const inTotalPrice = document.getElementById("in-total-price");
    // stevekaku bar bar input kore apply korle bar bar discount diye dei tai "total-price" add kora
    const totalPrice = document.getElementById("total-price");
    const inTotalPriceNumber = parseInt(totalPrice.innerText);
    if (inputPomo.toLowerCase() == 'stevekaku') {
        let discount = inTotalPriceNumber * 20 / 100;
        discount = inTotalPriceNumber - discount;
        inTotalPrice.innerText = discount;
    }

    inputfield.value = '';
}
// Extarnal memory event added
document.getElementById("memory-8GB").addEventListener("click", function () {
    memoryCard(true);
});
document.getElementById("memory-16GB").addEventListener("click", function () {
    memoryCard(false);
});

// Extarnal storage event added
function storage256GB() {
    ssdStorage(true);
};
document.getElementById("storage-512GB").addEventListener("click", function () {
    ssdStorage(false);
});
function storage1TB() {
    ssdStorage("1TB");
};

// Delivery charge event added
document.getElementById("delivery-free").addEventListener("click", function () {
    deliveryTime(true);
});
document.getElementById("delivery-charge").addEventListener("click", function () {
    deliveryTime(false);
});
// Apply button event add
document.getElementById("apply").addEventListener("click", function () {
    pomocode();

})