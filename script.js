let screen=document.getElementById("screen");
let cont=document.querySelectorAll(".container");

const promise= new Promise((resolve) => {
        setTimeout(() => {
            resolve("Your order.");
        }, 5000);
    });
 
promise.then(values => {
    console.log(values);
    let msz=document.createElement("h1");
    msz.textContent="Your order is accepted."
    screen.append(msz);
});