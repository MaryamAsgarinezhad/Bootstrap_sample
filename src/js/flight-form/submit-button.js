import form from "./form";
import {filterFlights} from "../const/flights";

export function getSubmitButtonEl() {
    return document.querySelector('#submit-button')
}

export function onSubmit(event) {
    event.preventDefault()
    const filterValue = {
        willReturn: form.ticketType === 2,
        from: form.from,
        to: form.to,
        startTime: form.startTime,
        returnTime: form.returnTime,
    }
    const filteredFlights = filterFlights(filterValue)
    localStorage.setItem('filteredFlights', JSON.stringify(filteredFlights))
    localStorage.setItem('submittedForm', JSON.stringify(form))
    window.location.href = '../../flights/flights.html'
}
