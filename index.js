const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passOne = ""
let passTwo = ""
let passElOne = document.getElementById("pass-one")
let passElTwo = document.getElementById("pass-two")


function generatePasswordOne() {
    passOne = ""
    for (let i = 0; i < 15; i++){
        randomIndex = Math.floor(Math.random() * characters.length)
        passOne += characters[randomIndex]
    }
}

function generatePasswordTwo() {
    passTwo = ""
    for (let i = 0; i < 15; i++){
        randomIndex = Math.floor(Math.random() * characters.length)
        passTwo += characters[randomIndex]
    }
}

function generatePasswords() {
    generatePasswordOne()
    generatePasswordTwo()
    passElOne.textContent = passOne
    passElTwo.textContent = passTwo
}

function copyPasswordOne() {
    navigator.clipboard.writeText(passOne)
    alert("Password copied to clipboard")
}

function copyPasswordTwo() {
    navigator.clipboard.writeText(passTwo)
    alert("Password copied to clipboard")
}