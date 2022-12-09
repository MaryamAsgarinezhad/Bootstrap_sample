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
  let currentFlight = JSON.parse(localStorage.getItem('BookingFlight'));

  depart.innerHTML = "زمان حرکت : "+currentFlight.startFlightDateAndTime.substring(0,10);
  airline.innerHTML = airports[currentFlight.fromAirportId-1].city + "-" + airports[currentFlight.toAirportId-1].city;

let num=2;

function book(str){
    let currentUser = localStorage.getItem('currentUser');

    localStorage.setItem(currentUser+"-"+currentFlight.id,str);
}

let finalStr = "";
function getInfo(){
    let passNum = JSON.parse(localStorage.getItem('submittedForm'));
    if (num <= passNum+1){
        let firstname = document.getElementById('firstname').value;
        let lastname = document.getElementById('lastname').value;
        let passportnumber = document.getElementById('passportnumber').value;
        let message = document.getElementById('infoNumber');

        if(!!firstname && !!lastname && !isNaN(passportnumber) && !isNaN(parseFloat(passportnumber))){
            if(num==passNum+1){

                finalStr += ","+firstname+"-"+lastname;
                finalStr = new Date() + finalStr;
                book(finalStr);
                window.location.href = 'userPanel.html';
                console.log9('did')
            }
            else{
                event.preventDefault();
                event.stopPropagation();
                
                document.getElementById('infoNumber').innerHTML ="ورود اطلاعات مسافر " +num+":";
                console.log(1);
                finalStr += ","+firstname+"-"+lastname;
            }
            
            num++;
        }
        else{
            console.log(3);
            message.innerHTML = "تمام فیلدها را پر کنید";
        }
    }
}

