const sampleDates = [
    new Date('2022-12-08T16:00:00.000Z'), // 0
    new Date('2022-12-08T18:00:00.000Z'), // 1
    new Date('2022-12-08T20:00:00.000Z'), // 2
    new Date('2022-12-08T22:00:00.000Z'), // 3

    new Date('2022-12-09T16:00:00.000Z'), // 4
    new Date('2022-12-09T18:00:00.000Z'), // 5
    new Date('2022-12-09T20:00:00.000Z'), // 6
    new Date('2022-12-09T22:00:00.000Z'), // 7

    new Date('2022-12-10T18:00:00.000Z'), // 8
    new Date('2022-12-10T18:00:00.000Z'), // 9
    new Date('2022-12-10T20:00:00.000Z'), // 10
    new Date('2022-12-10T22:00:00.000Z'), // 11

    new Date('2022-12-11T18:00:00.000Z'), // 12
    new Date('2022-12-11T18:00:00.000Z'), // 13
    new Date('2022-12-11T20:00:00.000Z'), // 14
    new Date('2022-12-11T22:00:00.000Z'), // 15

    new Date('2022-12-12T18:00:00.000Z'), // 16
    new Date('2022-12-12T18:00:00.000Z'), // 17
    new Date('2022-12-12T20:00:00.000Z'), // 18
    new Date('2022-12-12T22:00:00.000Z'), // 19
]

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

const flights = [
    {
        id: 0,
        airline: 'ایران ایر',
        fromAirportId: 1,
        toAirportId: 2,
        startFlightDateAndTime: sampleDates[0],
        arrivingDateAndTime: sampleDates[1],
        flightInterval: '۲ ساعت',
        price: 1000000,
        class: 'اکونومی کلاس'
    },
    {
        id: 1,
        airline: 'ایران ایر',
        fromAirportId: 1,
        toAirportId: 2,
        startFlightDateAndTime: sampleDates[0],
        arrivingDateAndTime: sampleDates[1],
        flightInterval: '۲ ساعت',
        price: 1000000,
        class: 'فرست کلاس'
    },
    {
        id: 2,
        airline: 'ایران ایر',
        fromAirportId: 1,
        toAirportId: 2,
        startFlightDateAndTime: sampleDates[1],
        arrivingDateAndTime: sampleDates[2],
        flightInterval: '۲ ساعت',
        price: 1000000,
        class: 'اکونومی کلاس'
    },
    {
        id: 3,
        airline: 'ایران ایر',
        fromAirportId: 2,
        toAirportId: 1,
        startFlightDateAndTime: sampleDates[16],
        arrivingDateAndTime: sampleDates[19],
        flightInterval: '۲ ساعت',
        price: 1000000,
        class: 'اکونومی کلاس'
    },
    {
        id: 4,
        airline: 'ایران ایر',
        fromAirportId: 2,
        toAirportId: 1,
        startFlightDateAndTime: sampleDates[16],
        arrivingDateAndTime: sampleDates[17],
        flightInterval: '۲ ساعت',
        price: 1000000,
        class: 'بیزنس کلاس'
    },
    {
        id: 5,
        airline: 'ایران ایر',
        fromAirportId: 2,
        toAirportId: 1,
        startFlightDateAndTime: sampleDates[16],
        arrivingDateAndTime: sampleDates[17],
        flightInterval: '۲ ساعت',
        price: 1000000,
        class: 'بیزنس کلاس'
    },
    {
        id: 6,
        airline: 'ایران ایر',
        fromAirportId: 1,
        toAirportId: 3,
        startFlightDateAndTime: sampleDates[0],
        arrivingDateAndTime: sampleDates[2],
        flightInterval: '۲ ساعت',
        price: 1000000,
        class: 'بیزنس کلاس'
    },
    {
        id: 7,
        airline: 'ایران ایر',
        fromAirportId: 3,
        toAirportId: 1,
        startFlightDateAndTime: sampleDates[16],
        arrivingDateAndTime: sampleDates[17],
        flightInterval: '۲ ساعت',
        price: 1000000,
        class: 'بیزنس کلاس'
    },
    {
        id: 8,
        airline: 'ایران ایر',
        fromAirportId: 1,
        toAirportId: 4,
        startFlightDateAndTime: sampleDates[0],
        arrivingDateAndTime: sampleDates[3],
        flightInterval: '۲ ساعت',
        price: 1000000,
        class: 'فرست کلاس'
    },
    {
        id: 9,
        airline: 'ایران ایر',
        fromAirportId: 4,
        toAirportId: 1,
        startFlightDateAndTime: sampleDates[18],
        arrivingDateAndTime: sampleDates[19],
        flightInterval: '۲ ساعت',
        price: 1000000,
        class: 'فرست کلاس'
    },
    {
        id: 10,
        airline: 'ایران ایر',
        fromAirportId: 2,
        toAirportId: 3,
        startFlightDateAndTime: sampleDates[0],
        arrivingDateAndTime: sampleDates[3],
        flightInterval: '۲ ساعت',
        price: 1000000,
        class: 'فرست کلاس'
    },
    {
        id: 11,
        airline: 'ایران ایر',
        fromAirportId: 2,
        toAirportId: 3,
        startFlightDateAndTime: sampleDates[0],
        arrivingDateAndTime: sampleDates[3],
        flightInterval: '۲ ساعت',
        price: 1000000,
        class: 'اکونومی کلاس'
    },
    {
        id: 12,
        airline: 'ایران ایر',
        fromAirportId: 2,
        toAirportId: 3,
        startFlightDateAndTime: sampleDates[0],
        arrivingDateAndTime: sampleDates[2],
        flightInterval: '۲ ساعت',
        price: 1000000,
        class: 'اکونومی کلاس'
    },
    {
        id: 13,
        airline: 'ایران ایر',
        fromAirportId: 2,
        toAirportId: 3,
        startFlightDateAndTime: sampleDates[1],
        arrivingDateAndTime: sampleDates[4],
        flightInterval: '۲ ساعت',
        price: 1000000,
        class: 'بیزنس کلاس'
    },
    {
        id: 14,
        airline: 'ایران ایر',
        fromAirportId: 3,
        toAirportId: 2,
        startFlightDateAndTime: sampleDates[12],
        arrivingDateAndTime: sampleDates[13],
        flightInterval: '۲ ساعت',
        price: 1000000,
        class: 'اکونومی کلاس'
    },
    {
        id: 15,
        airline: 'ایران ایر',
        fromAirportId: 3,
        toAirportId: 2,
        startFlightDateAndTime: sampleDates[16],
        arrivingDateAndTime: sampleDates[17],
        flightInterval: '۲ ساعت',
        price: 1000000,
        class: 'فرست کلاس'
    },
    {
        id: 16,
        airline: 'ایران ایر',
        fromAirportId: 3,
        toAirportId: 2,
        startFlightDateAndTime: sampleDates[8],
        arrivingDateAndTime: sampleDates[10],
        flightInterval: '۲ ساعت',
        price: 1000000,
        class: 'بیزنس کلاس'
    },
    {
        id: 17,
        airline: 'ایران ایر',
        fromAirportId: 3,
        toAirportId: 2,
        startFlightDateAndTime: sampleDates[10],
        arrivingDateAndTime: sampleDates[12],
        flightInterval: '۲ ساعت',
        price: 1000000,
        class: 'فرست کلاس'
    },
]
let table = document.getElementsByTagName('table')[0];
let currentUser = localStorage.getItem('currentUser');

for (i=0 ; i<flights.length ; i++){
    let str = localStorage.getItem(currentUser+"-"+i);

    if(str != null){
        const myArray = str.split(",");
        let date = myArray[0];
        for(j=1 ; j<myArray.length ; j++){
            let Ticket = flights[i];

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
            let num1 = Ticket.fromAirportId;
            let num2 = Ticket.toAirportId;

            cell1.innerHTML = airports[num1-1].city +" - " +airports[num2-1].city;
            cell2.innerHTML = Ticket.startFlightDateAndTime;
            cell3.innerHTML = Ticket.arrivingDateAndTime;
            cell4.innerHTML = Ticket.flightInterval;
            cell5.innerHTML = Ticket.class;
            cell6.innerHTML = Ticket.price;
            cell7.innerHTML = date;
            cell8.innerHTML = myArray[j];
        }
    }

    function mainPage(){
        window.location.href = "../src/pages/index.html";
    }
}