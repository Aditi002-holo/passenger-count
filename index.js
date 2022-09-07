let count = 0;
let countEle = document.getElementById("count");

// defined in onclick -  html
function increment() {
    count += 1;
    countEle.textContent = count;

    console.log(count);
}


