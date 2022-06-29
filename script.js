let generateButton = document.querySelector('.generate-button')
let password1 = document.querySelector('.password1')
let password2 = document.querySelector('.password2')
let isEmpty = true
const characters = ["A","B","C","D","E","F","G","H","I",
"J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
"Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let maxLength = 15

function generate(){
    if(isEmpty === true){
        render()
    }   
}

function render(){
    for(i=0; i < maxLength; i++){
        let random1 = characters[Math.floor(Math.random() * characters.length)]
        let random2 = characters[Math.floor(Math.random() * characters.length)]
            password1.textContent += random1 + " "
            password2.textContent += random2 + " "
            isEmpty = false
    }
}