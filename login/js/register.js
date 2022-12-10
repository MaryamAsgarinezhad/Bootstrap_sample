'use strict';
localStorage.clear;
function registerNewUser() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let passNO = document.getElementById('passNO');
    let message = document.getElementById('message');

    if(!!name.value && !!email.value && !!password.value && !isNaN(passNO.value) && !isNaN(parseFloat(passNO.value))){
        let user = {
            name : name.value ,
            email : email.value ,
            passNO : passNO.value ,
            password : password.value , 
            tickets : "",
        };
    
        let userJson = JSON.stringify(user);
        let userName = user.email;
    
        localStorage.setItem(userName, userJson);
        
        console.log(localStorage.getItem(userName));
        localStorage.setItem('currentUser', email.value);

        window.location.href = "../src/pages/index.html";
    }
    else{
        message.innerHTML = "تمام فیلدها را پر کنید";
    }

}