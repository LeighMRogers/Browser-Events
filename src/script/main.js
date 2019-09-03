let outputEl1 = document.querySelector("#article1");
let outputEl2 = document.querySelector("#article2");

document.querySelector("#message").addEventListener("keyup", event => {
    outputEl1.innerHTML = event.target.value;
    outputEl2.innerHTML = event.target.value;
})

