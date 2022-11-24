import {selectInputOnInputEventListener, hideSelectDialogEventListener, showSelectDialogEventListener} from "./index";
import form from "./form";
import {getFlightById} from "../const/flights";

function getFlightIdFromEvent(event) {
    return event.target.getAttribute('value-id')
}

export function selectInput(event, type) {
    const flightId = Number(getFlightIdFromEvent(event))
    if (!flightId) return
    event.target.parentElement.childNodes.forEach(item => {
        item?.classList?.remove('active')
    })
    event.target.classList.add('active')
    const flight = getFlightById(flightId)
    const input = document.querySelector(`#${type}-input`)
    input.value = `${flight.country} - ${flight.city} - ${flight.airPortTitle}`
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
            func: selectInputOnInputEventListener,
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
            func: selectInputOnInputEventListener,
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
