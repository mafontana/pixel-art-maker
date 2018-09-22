var square = document.querySelector(".square")

var pixelCanvas = document.querySelector(".pixelCanvas")

var color = document.querySelector("#colorPicker")

for (i=0; i < 100; i++) {
    let newSquare = document.createElement("div")
    newSquare.className = "square"
    pixelCanvas.appendChild(newSquare);

    newSquare.addEventListener("click", function(){
        newSquare.style.background = color.value
    })
}






// var pixels = document.querySelectorAll("newSquare")
    // for (i=0; i < 25; i++) {
    // var pixels = document.querySelecto(".pixelCanvas")
        
    //     // var pixels = document.querySelector(".square")
    //     newSquare.addEventListener("click", function(){
    //     newSquare.style.background = "blue"
    // })


    //event object javascript event

    


