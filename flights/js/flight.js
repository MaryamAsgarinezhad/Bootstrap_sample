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

  
    let btn = document.createElement('Button');
    btn.id = i;
    btn.textContent = "خرید";
    btn.onclick = myFunction;
    let str = JSON.stringify(element);

    function myFunction() {
      //todo
      localStorage.setItem('BookingFlight',str);
      window.location.href = "bookpage.html";
    }
  
    cell8.append(btn);
    i++;
  }