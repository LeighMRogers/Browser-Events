const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.addEventListener("scroll", function () {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
   scroll = window.scrollY;

   let width = scroll / 3;
        if (width < 50) {
            width = 50
            console.log();
        }
    audrey.style.width = width + "px";
    
    let height = scroll / 4;
        if (height < 100) {
            height = 100;
        }
    audrey.style.height = height + "px";
})