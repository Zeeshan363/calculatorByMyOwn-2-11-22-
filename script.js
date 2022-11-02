let textOutput = document.getElementById("text")

function Display(num){
    textOutput.value += num;
}
function Clear(){
    textOutput.value = ""
}
function Calculate(){
    textOutput.value = eval(textOutput.value)
}
function Delete(){
    textOutput.value = textOutput.value.slice(0,-1)
}