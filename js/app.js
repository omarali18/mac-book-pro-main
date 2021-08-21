
function memoryCard(isadd) {
    const memoryCost = document.getElementById("memory-cost");
    if (isadd == true) {
        memoryCost.innerText = 120;
    }
    else {
        memoryCost.innerText = 0;
    }

}
document.getElementById("memory-16GB").addEventListener("click", function () {
    memoryCard(true)
});
document.getElementById("memory-8GB").addEventListener("click", function () {
    memoryCard(false)
})