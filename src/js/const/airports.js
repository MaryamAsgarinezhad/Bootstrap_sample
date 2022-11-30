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

export function filterAirports(value) {
    if (!value) return [...airports]
    return airports.filter((item) => {
        return [item.title, item.titleSmall, item.city, item.country].some((record) => record.includes(value))
    })
}

export function getAirportById(id) {
    return airports.find(item => item.id === id)
}
