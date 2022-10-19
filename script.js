const form = document.getElementById("forma");

function ispitajime() {
    var imeiprez = document.getElementById("ime").value;
    var uzorakime = /^([A-Z]{2,3}[a-z]{4,6})\s([A-Z]{2,3}[a-z]{6,9})$/;

    if (uzorakime.test(imeiprez)) {
        return 1;
    }
    else return 0;
}
/*
/^([A-Z]{2,3}[a-z]{4,6})\s([A-Z]{2,3}[a-z]{6,9})|([A-Z]{2,3}[\.]{4,6})\s([A-Z]{2,3}[\.]{6,9})$/;
/^([A-Z]{2}[a-z]{4,6})|([A-Z]{3}[a-z]{3,5})\s([A-Z]{2}[a-z]{6,9})|([A-Z]{3}[a-z]{5,8})
|([A-Z]{2}[\.]{4,6})|([A-Z]{3}[\.]{3,5})\s([A-Z]{2}[\.]{6,9})|([A-Z]{3}[\.]{5,8})$/;
function ispitajmail() {
    var mejl = document.getElementById("email").value;
    var uzorakmail = /^(\w.+)+@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    if (uzorakmail.test(mejl)) {
        return 1;
    }
    else return 0;
}
/*
function ispitajporuku() {
    var poruka = document.getElementById("poruka").value;
    var uzorakporuka = /^[A-Za-z\s\.\\?\\!\\,]{50,250}$/;
    if (uzorakporuka.test(poruka)) {
        return 1;
    }
    else return 0;
}
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Math.floor(43.8))
console.log(Number.isInteger(2017))
*/
function ispitajmail() {
    var mejl = document.getElementById("email").value;
    var uzorakmail = /^[a-zA-Z.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z-]+(?:\.[a-zA-Z-]{2,3})*$/;
    if (uzorakmail.test(mejl)) {
        return 1;
    }
    else return 0;
}



function ispitajporuku() {
    var poruka = document.getElementById("poruka").value;
    var uzorakporuka = /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])/;
    if (uzorakporuka.test(poruka)) {
        return 1;
    }
    else return 0;
}


form.addEventListener("submit", (error) => {
    error.preventDefault();

    console.log('SUBIIIITT')

    var imeinput = document.getElementById("ime");
    var mailinput = document.getElementById("email");
    var porukainput = document.getElementById("poruka");

    if (!ispitajime()) {
        error.preventDefault();
        imeinput.style.border = "2px solid red";
    }
    else {
        error.preventDefault();
        imeinput.style.border = "2px solid green";
        
    }

    if (!ispitajmail()) {
        error.preventDefault();
        mailinput.style.border = "2px solid red";
    }
    else {
        error.preventDefault();
        mailinput.style.border = "2px solid green";
    }
    if (!ispitajporuku()) {
        error.preventDefault();
        porukainput.style.border = "2px solid red";
    }
    else {
        error.preventDefault();
        porukainput.style.border = "2px solid green";
    }
})
