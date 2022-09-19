// Fetch target elements
let countEle = document.getElementById("count");
let saveEle = document.getElementById("save-el");
let count = 0;

// defined in onclick -  html
function increment() {
    count += 1;
    countEle.textContent = count;
}


// define save function
// using textContent instead of innerText
function save() {
    let saveCount = count + " - ";
    saveEle.textContent += saveCount;
    count = 0;
    countEle.textContent = count;
}