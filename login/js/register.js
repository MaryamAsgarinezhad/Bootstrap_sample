'use strict';

function registerNewUser() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let passNO = document.getElementById('passNO');

    if(!!name.value && !!email.value && !!password.value && !isNaN(passNO.value) && !isNaN(parseFloat(passNO.value))){
        let user = {
            name : name.value ,
            email : email.value ,
            passNO : passNO.value ,
            password : password.value , 
            tickets : ""
        };
    
        let userJson = JSON.stringify(user);
        let userName = user.email;
    
        localStorage.setItem(userName, userJson);
        
        console.log(localStorage.getItem(userName));
    }
    else{
        console.log("error");
    }

}