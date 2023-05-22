document.querySelector("select").onchange = function () {
    mySelect = document.querySelector("select")
    valueSel = mySelect.value
    wordP = document.querySelector(".word p")
    if (valueSel == "Ubuntu"){
        wordP.className = " "
        wordP.classList.add("ubuntu")
    }
    else if(valueSel == "Cairo"){
        wordP.className = " "
        wordP.classList.add("cairo")
    }
    else if(valueSel == "Dongle"){
        wordP.className = " "
        wordP.classList.add("dongle")
    }else{
        wordP.className = " "
    }
}
document.querySelector(".bold").onclick = function(){
    document.querySelector(".word p").classList.toggle("boldWord")
}
document.querySelector(".color").onclick = function(){
    document.querySelector(".word p").classList.toggle("black")
}
document.querySelector(".plu").onclick = function(){
    document.querySelector(".sub").style = "cursor:pointer ;  opacity: 1;"
    element = document.querySelector(".word p")
    var fontSize =  window.getComputedStyle(element).fontSize;
    var fontPlu = parseInt(fontSize) + 1
    element.style.fontSize = fontPlu + "px";
    document.querySelector(".num").innerHTML = fontPlu;
    if(fontPlu >= "22"){
        document.querySelector(".plu").style = "cursor:no-drop ;  opacity: .5;"
        var fontPlu = parseInt(fontSize) 
        element.style.fontSize = fontPlu + "px";
    }
}
document.querySelector(".sub").onclick = function(){
    document.querySelector(".plu").style = "cursor:pointer ;  opacity: 1;"
    element = document.querySelector(".word p")
    var fontSize =  window.getComputedStyle(element).fontSize;
    var fontPlu = parseInt(fontSize) - 1
    element.style.fontSize = fontPlu + "px";
    document.querySelector(".num").innerHTML = fontPlu;
    if(fontPlu <= "16"){
        document.querySelector(".sub").style = "cursor:no-drop ;  opacity: .5;"
        var fontPlu = parseInt(fontSize) 
        element.style.fontSize = fontPlu + "px";
    }
}

