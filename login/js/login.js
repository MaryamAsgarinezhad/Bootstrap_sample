'use strict';

function login() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if(!!password.value && !!email.value){
        let str = localStorage.getItem(email.value);
        let obj = JSON.parse(str);

        if(obj != null){
            if(obj.password == password.value){
                console.log("success");
            }
            else{
                event.preventDefault();
                event.stopPropagation();
                console.log("Incorrect password!");
            }
        }
        else{
            event.preventDefault();
            event.stopPropagation();
            console.log("Incorrect username!");
        }
    }
    else{
        console.log("Fill all fields!");
    }
}