'use strict';

let num=1;

function book(firstname , lastname , passportnumber){
    //todo
    console.log("purchased for "+ firstname+lastname +" "+passportnumber);
    document.getElementById('infoNumber').innerHTML ="Enter information for passenger " +num;
}

function getInfo(){
    if (num < 5){
        let firstname = document.getElementById('firstname').value;
        let lastname = document.getElementById('lastname').value;
        let passportnumber = document.getElementById('passportnumber').value;
        let message = document.getElementById('infoNumber');

        if(!!firstname && !!lastname && !isNaN(passportnumber) && !isNaN(parseFloat(passportnumber))){
            event.preventDefault();
            event.stopPropagation();
            book(firstname , lastname , passportnumber);
            num++;
        }
        else{
            message.innerHTML = "Fill all fields!";
        }
    }
    else{
        console.log('done!');
    }
}

