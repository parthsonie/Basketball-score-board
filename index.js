let Hpoint = document.getElementById("HOME-screen")
let Gpoint = document.getElementById("GUEST-screen")

let Hcount = 0
let Gcount = 0

function inc1H(){
    Hcount += 1
    Hpoint.textContent = Hcount
}

function inc2H(){
    Hcount += 2
    Hpoint.textContent = Hcount
}

function inc3H(){
    Hcount += 3
    Hpoint.textContent = Hcount
}

function inc1G(){
    Gcount += 1
    Gpoint.textContent = Gcount
}

function inc2G(){
    Gcount += 2
    Gpoint.textContent = Gcount
}

function inc3G(){
    Gcount += 3
    Gpoint.textContent = Gcount
}

function reset(){
    Gcount = 0
    Hcount = 0
    Gpoint.textContent = Gcount
    Hpoint.textContent = Hcount
}