// extra function for memory
function memoryCard(isadd) {
    const memoryCost = document.getElementById("memory-cost");
    if (isadd == true) {
        memoryCost.innerText = 0;
    }
    else {
        memoryCost.innerText = 180;
    }
    const extraMemoryCost = memoryCost.innerText;
    return extraMemoryCost;
};
// extra function for storage
function ssdStorage(isStorageAdd) {
    const storageCost = document.getElementById("512GBstorage-cost");
    if (isStorageAdd == true) {
        storageCost.innerText = 0;
    }
    else if (isStorageAdd == false) {
        storageCost.innerText = 100;
    }
    else {
        storageCost.innerText = 180;
    }
    const extraStorageCost = storageCost.innerText;
    return extraStorageCost;

};

function deliveryTime(isCostAdd) {
    const deliveryCost = document.getElementById("delivery-cost")
    if (isCostAdd == true) {
        deliveryCost.innerText = 0;
    }
    else {
        deliveryCost.innerText = 20;
    }
};

function totalPrice() {
    const bestPrice = document.getElementById()
}
// Extarnal memory event added
document.getElementById("memory-8GB").addEventListener("click", function () {
    memoryCard(true)
});
document.getElementById("memory-16GB").addEventListener("click", function () {
    memoryCard(false)
});

// Extarnal storage event added
function storage256GB() {
    console.log("kire nana 333");
    ssdStorage(true)
};

document.getElementById("storage-512GB").addEventListener("click", function () {
    ssdStorage(false)
});
function storage1TB() {
    ssdStorage("1TB")
};

// Delivery charge event added
document.getElementById("delivery-free").addEventListener("click", function () {
    deliveryTime(true)
});
document.getElementById("delivery-charge").addEventListener("click", function () {
    deliveryTime(false)
})