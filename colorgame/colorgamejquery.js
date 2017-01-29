function getRandomRGB(){
   let arrRGB = [Math.floor(Math.random() * 256),
                 Math.floor(Math.random() * 256),
                 Math.floor(Math.random() * 256)];

    return `RGB(${arrRGB[0]}, ${arrRGB[1]}, ${arrRGB[2]})`;
}

function newGame () {
    var answer = Math.floor(Math.random() * 6);
    var givenColorBlock = document.querySelector('#givenColor');
    $(".colorbox").css("display", "block");
    var colorBoxes = document.querySelectorAll(".colorbox");
    for (let i=0; i < colorBoxes.length; i++){
        colorBoxes[i].style.backgroundColor = getRandomRGB();
        if (i === answer) {
            givenColorBlock.textContent = colorBoxes[i].style.backgroundColor;
        }
        colorBoxes[i].addEventListener("click", function() {
            if (i === answer){
                $(".colorbox").css("background-color", colorBoxes[i].style.backgroundColor);
                $(".colorbox").css("display", "block");
                console.log('YEAH!', i)
            } else {
                colorBoxes[i].style.display = "none";
                console.log('FAIL', i);
            }
        })
}
}

newGame();

var reloadButton = document.querySelector("#reload");
reloadButton.addEventListener("click", () => {
    newGame();
})
