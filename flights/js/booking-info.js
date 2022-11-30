'use strict';

const airports = [
    {
        id: 1,
        city: 'تهران',
        country: 'ایران',
        title: 'مهرآباد',
        titleSmall: 'TE',
    },
    {
        id: 2,
        city: 'شیراز',
        country: 'ایران',
        title: 'فرودگاه بین‌المللی شیراز',
        titleSmall: 'SHI',
    },
    {
        id: 3,
        city: 'مشهد',
        country: 'ایران',
        title: 'مشهد',
        titleSmall: 'MA',
    },
    {
        id: 4,
        city: 'تبریز',
        country: 'ایران',
        title: 'فرودگاه بین‌المللی تبریز',
        titleSmall: 'TA',
    },
  ]

  let depart = document.getElementById('depart');
  let airline = document.getElementById('Airline');
  let currentFlight = localStorage.getItem('BookingFlight');

  depart.innerHTML = airports[+currentFlight].country;
  airline.innerHTML = airports[+currentFlight].city + "-" + airports[+currentFlight].title;

let num=2;

function book(str){
    let currentUser = localStorage.getItem('currentUser');

    localStorage.setItem(currentUser+"-"+currentFlight,str);
}

let finalStr = "";
function getInfo(){
    if (num <= 3){
        let firstname = document.getElementById('firstname').value;
        let lastname = document.getElementById('lastname').value;
        let passportnumber = document.getElementById('passportnumber').value;
        let message = document.getElementById('infoNumber');

        if(!!firstname && !!lastname && !isNaN(passportnumber) && !isNaN(parseFloat(passportnumber))){
            if(num==3){
                finalStr += ","+firstname+"-"+lastname;
                finalStr = new Date() + finalStr;
                book(finalStr);
                console.log('salam')
                window.location.href = 'userPanel.html';
            }
            else{
                event.preventDefault();
                event.stopPropagation();
                
                document.getElementById('infoNumber').innerHTML ="ورود اطلاعات مسافر " +num+":";
                console.log(num)
                finalStr += ","+firstname+"-"+lastname;
            }
            
            num++;
        }
        else{
            message.innerHTML = "تمام فیلدها را پر کنید";
        }
    }
}

