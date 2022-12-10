'use strict';

function login() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let message = document.getElementById('comment');

    if(!!password.value && !!email.value){
        let str = localStorage.getItem(email.value);
        let obj = JSON.parse(str);

        if(obj != null){
            if(obj.password == password.value){
                message.innerHTML = "ورود موفق";
                localStorage.setItem('currentUser',email.value);
                window.location.href = "../src/pages/index.html";

            }
            else{
                event.preventDefault();
                event.stopPropagation();
                message.innerHTML = "رمز عبور نادرست است";
            }
        }
        else{
            event.preventDefault();
            event.stopPropagation();
            message.innerHTML = "نام کاربری نادرست است";

        }
    }
    else{
        message.innerHTML = "تمام فیلدها را پر کنید";
        test();
    }
}