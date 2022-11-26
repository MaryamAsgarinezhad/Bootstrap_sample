const flights = [
    {
        id: 1,
        city: 'تهران',
        country: 'ایران',
        airPortTitle: 'مهرآباد',
        airPortTitleSmall: 'TE',
    },
    {
        id: 2,
        city: 'شیراز',
        country: 'ایران',
        airPortTitle: 'فرودگاه بین‌المللی شیراز',
        airPortTitleSmall: 'SHI',
    },
    {
        id: 3,
        city: 'مشهد',
        country: 'ایران',
        airPortTitle: 'مشهد',
        airPortTitleSmall: 'MA',
    },
    {
        id: 4,
        city: 'تبریز',
        country: 'ایران',
        airPortTitle: 'فرودگاه بین‌المللی تبریز',
        airPortTitleSmall: 'TA',
    },
]

export function filterFlights(value) {
    if (!value) return [...flights]
    return flights.filter((item) => {
        return [item.airPortTitle, item.airPortTitleSmall, item.city, item.country].some((record) => record.includes(value))
    })
}

export function getFlightById(id) {
    return flights.find(item => item.id === id)
}
