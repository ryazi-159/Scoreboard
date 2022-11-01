let homescore = document.getElementById("home-score")
let guestscore = document.getElementById("guest-score")
let addhome=0
let addguest=0
function add1home(){
    addhome += 1
    homescore.textContent = addhome
}
function add2home(){
    addhome += 2
    homescore.textContent = addhome
}
function add3home(){
    addhome += 3
    homescore.textContent = addhome
}

function add1guest(){
    addguest += 1
    guestscore.textContent = addguest
}
function add2guest(){
    addguest += 2
    guestscore.textContent = addguest
}
function add3guest(){
    addguest += 3
    guestscore.textContent = addguest
}
function reset(){
    guestscore.textContent = addguest = 0
    homescore.textContent = addhome = 0
}