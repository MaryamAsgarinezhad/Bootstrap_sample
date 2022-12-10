  let table = document.getElementsByTagName('table')[0];
  let filteredFlights = JSON.parse(localStorage.getItem('filteredFlights'));

  let i=0;
  for (const element of filteredFlights) {
    let newRow = table.insertRow(1);
    newRow.align = "center";
  
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);
    let cell8 = newRow.insertCell(7);
  
    //todo
    cell1.innerHTML = element.airline;
    cell2.innerHTML = element.startFlightDateAndTime;
    cell3.innerHTML = element.arrivingDateAndTime;
    cell4.innerHTML = element.flightInterval;
    cell5.innerHTML = element.class;
    cell6.innerHTML = element.price;

    let alert;
    let passNum = JSON.parse(localStorage.getItem('submittedForm')).passengerCount;
    if(element.capacity < 3*passNum){
      cell7.innerHTML = "ظرفیت محدود است"
    }
    else{
      cell7.innerHTML = "--------------"
    }

  
    let btn = document.createElement('Button');
    btn.id = i;
    btn.textContent = "خرید";
    btn.onclick = myFunction;
    btn.className = "mt-3 btn btn-primary disabled-btn ms-auto me-0";
    let str = JSON.stringify(element);

    function myFunction() {
      
    if (!!localStorage.getItem('currentUser')) {
      localStorage.setItem('BookingFlight',str);
      window.location.href = "bookpage.html";
      }

    else{
      window.location.href = "../login/index.html";
      }
    }
    
  
    cell8.append(btn);
    i++;
  }

  function mainPage(){
    window.location.href = "../src/pages/index.html";
}