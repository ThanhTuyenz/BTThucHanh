let output = document.getElementById("output");

function press(key) {
    if (key === "C") {
        output.innerHTML = "";
    } 
    else if (key === "=") {
        try {
        output.innerHTML = eval(output.innerHTML);
        } 
        catch (e) {
        output.innerHTML = "Error";
        }
    } else {
        output.innerHTML += key;
    }
}

let keys = document.querySelectorAll(".key");

keys.forEach(function(key) {
    key.addEventListener("click", function() {
        press(this.innerHTML);
    });
});

document.addEventListener("keydown", function(event) {
    let key = event.key.toUpperCase();
    let validKeys = "0123456789+-*/.C= ";
    if (validKeys.includes(key)) {
        event.preventDefault();
        press(key);
    }
});