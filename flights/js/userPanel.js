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
let currentUser = localStorage.getItem('currentUser');

for (i=0 ; i<airports.length ; i++){
    let str = localStorage.getItem(currentUser+"-"+i);

    if(str != null){
        const myArray = str.split(",");
        let date = myArray[0];
        for(j=1 ; j<myArray.length ; j++){
            let Ticket = airports[i];

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
            cell1.innerHTML = Ticket.city;
            cell5.innerHTML = Ticket.title;
            cell8.innerHTML = date;
            cell7.innerHTML = myArray[j];
        }
    }
}