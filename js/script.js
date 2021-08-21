// function for memory cost
function memoryCost(increase) {
  const getMemoryCost = document.getElementById("memory-cost");
  const getTotalCost = document.getElementById("total-cost");
  if (increase == true) {
    getMemoryCost.innerText = 180;
    getTotalCost.innerText = parseFloat(getTotalCost.innerText) + 180;
    document.getElementById("memory-two").disabled = true;
    document.getElementById("memory-one").disabled = false;
  } else if (increase == false) {
    getMemoryCost.innerText = 0;
    getTotalCost.innerText = parseFloat(getTotalCost.innerText) - 180;
    document.getElementById("memory-two").disabled = false;
    document.getElementById("memory-one").disabled = true;
  }
}
// function for storage cost
function storageCost(storage) {
  const getStorageCost = document.getElementById("storage-cost");
  const getTotalCost = document.getElementById("total-cost");
  const getMemoryCost = document.getElementById("memory-cost");
  const storageone = document.getElementById("storage-one");
  const storageTwo = document.getElementById("storage-two");
  const storagethree = document.getElementById("storage-three");
  if (storage == "one") {
    getStorageCost.innerText = 0;
    getTotalCost.innerText = parseFloat(getMemoryCost.innerText) + 1299;
    storageone.disabled = true;
    storageTwo.disabled = false;
    storagethree.disabled = false;
  } else if (storage == "two") {
    getStorageCost.innerText = 100;
    getTotalCost.innerText = parseFloat(getMemoryCost.innerText) + 100 + 1299;
    storageone.disabled = false;
    storageTwo.disabled = true;
    storagethree.disabled = false;
  } else if (storage == "three") {
    getStorageCost.innerText = 180;
    getTotalCost.innerText = parseFloat(getMemoryCost.innerText) + 180 + 1299;
    storageone.disabled = false;
    storageTwo.disabled = false;
    storagethree.disabled = true;
  }
}
// function for delivary cost
function delivaryCost(early) {
  const delivaryCost = document.getElementById("delivary-cost");
  const getStorageCost = document.getElementById("storage-cost");
  const getTotalCost = document.getElementById("total-cost");
  const getMemoryCost = document.getElementById("memory-cost");
  const freeDelivary = document.getElementById("free-delivary");
  const earlyDelivary = document.getElementById("early-delivary");
  if (early == false) {
    delivaryCost.innerText = 0;
    getTotalCost.innerText =
      parseFloat(getStorageCost.innerText) +
      parseFloat(getMemoryCost.innerText) +
      0 +
      1299;
    freeDelivary.disabled = true;
    earlyDelivary.disabled = false;
  } else if (early == true) {
    delivaryCost.innerText = 20;
    getTotalCost.innerText =
      parseFloat(getStorageCost.innerText) +
      parseFloat(getMemoryCost.innerText) +
      20 +
      1299;
    freeDelivary.disabled = false;
    earlyDelivary.disabled = true;
  }
}
// memory formulas
document.getElementById("memory-two").addEventListener("click", function () {
  memoryCost(true);
});
document.getElementById("memory-one").addEventListener("click", function () {
  memoryCost(false);
});
// storage formulas
document.getElementById("storage-one").addEventListener("click", function () {
  storageCost("one");
});
document.getElementById("storage-two").addEventListener("click", function () {
  storageCost("two");
});
document.getElementById("storage-three").addEventListener("click", function () {
  storageCost("three");
});
// delivary formulas
document.getElementById("free-delivary").addEventListener("click", function () {
  delivaryCost(false);
});
document
  .getElementById("early-delivary")
  .addEventListener("click", function () {
    delivaryCost(true);
  });
