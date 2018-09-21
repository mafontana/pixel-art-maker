var square = document.querySelector(".square")

var pixelCanvas = document.querySelector(".pixelCanvas")



for (i=0; i < 400; i++) {
    var newSquare = document.createElement("div")
    newSquare.className = "square"
    pixelCanvas.appendChild(newSquare);
    }


    newSquare.addEventListener("click", function(){
        newSquare.style.color = "blue"






    })




