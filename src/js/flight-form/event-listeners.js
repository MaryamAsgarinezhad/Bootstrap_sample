import {airportSelectInputOnInputEventListener, hideSelectDialogEventListener, showSelectDialogEventListener} from "./index";
import form from "./form";
import {getAirportById} from "../const/airports";
import {ticketTypeInputEventListener} from "./ticket-type";

function getAirportIdFromEvent(event) {
    return event.target.getAttribute('value-id')
}

export function airportSelectInput(event, type) {
    const flightId = Number(getAirportIdFromEvent(event))
    if (!flightId) return
    event.target.parentElement.childNodes.forEach(item => {
        item?.classList?.remove('active')
    })
    event.target.classList.add('active')
    const flight = getAirportById(flightId)
    const input = document.querySelector(`#${type}-input`)
    input.value = `${flight.country} - ${flight.city} - ${flight.title}`
    form[type] = flightId
}

export const fromInput = {
    '#from-input': [
        {
            func: (e) => {
                showSelectDialogEventListener(e, '#options-from-input')
            },
            eventType: 'focus'
        },
        {
            func: airportSelectInputOnInputEventListener,
            eventType: 'input'
        },
    ],
    '#from-input-container': [
        {
            func: (e) => {
                hideSelectDialogEventListener(e, '#options-from-input')
            },
            eventType: 'clickOutside'
        },
    ]
}


export const toInput = {
    '#to-input': [
        {
            func: (e) => {
                showSelectDialogEventListener(e, '#options-to-input')
            },
            eventType: 'focus'
        },
        {
            func: airportSelectInputOnInputEventListener,
            eventType: 'input'
        },
    ],
    '#to-input-container': [
        {
            func: (e) => {
                hideSelectDialogEventListener(e, '#options-to-input')
            },
            eventType: 'clickOutside'
        },
    ]

}


export const ticketType = {
    '#ticket-type': [
        {
            func: ticketTypeInputEventListener,
            eventType: 'input'
        }
    ]
}
