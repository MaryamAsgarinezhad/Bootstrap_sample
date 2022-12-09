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
        capacity: 10,
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
        capacity: 10,
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
        capacity: 10,
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
        capacity: 10,
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
        capacity: 10,
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
        capacity: 10,
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
        capacity: 10,
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
        capacity: 10,
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
        capacity: 10,
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
        capacity: 10,
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
        capacity: 10,
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
        capacity: 10,
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
        capacity: 10,
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
        capacity: 10,
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
        capacity: 10,
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
        capacity: 10,
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
        capacity: 10,
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
        capacity: 10,
        class: 'فرست کلاس'
    },
]

export function filterFlights(value) {
    // value: form = {
    //     from: airportId,
    //     to: airportId,
    //     startTime: Date,
    //     returnTime: Date,
    //     willReturn: bool: if true then use returnTime to add more flights
    // }
    if (!value) return [...flights]
    return flights.filter((item) => {
        const res = item.fromAirportId === value.from && item.toAirportId === value.to && item.startFlightDateAndTime.toDateString() === value.startTime.toDateString()
        if (!value.willReturn) {
            return res
        }
        return res || (item.fromAirportId === value.to && item.toAirportId === value.from && item.startFlightDateAndTime.toDateString() === value.returnTime.toDateString())
    })
}

export function getFlightById(id) {
    return flights.find(item => item.id === id)
}
