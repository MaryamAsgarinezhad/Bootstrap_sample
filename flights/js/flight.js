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

  let table = document.getElementsByTagName('table')[0];
  let filteredFlights = [1,3];

  let i=0;
  for (const element of filteredFlights) {
    let selectedFlight = airports[+element];
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
    cell1.innerHTML = selectedFlight.city;
    cell5.innerHTML = selectedFlight.country;
  
    let btn = document.createElement('Button');
    btn.id = i;
    btn.textContent = "خرید";
    btn.onclick = myFunction;
  
    function myFunction() {
      //todo
      localStorage.setItem('BookingFlight',element);
      window.location.href = "bookpage.html";
    }
  
    cell8.append(btn);
    i++;
  }