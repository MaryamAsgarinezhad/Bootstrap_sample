import {isNumeric, perToEngDigits} from "../utils";
import form from './form'

function getPassengerCountInput() {
    return document.querySelector('#passenger-count')
}

export function increasePassengerCount() {
    form.passengerCount += 1
    const input = getPassengerCountInput()
    input.value = form.passengerCount
}

export function decreasePassengerCount() {
    if (form.passengerCount === 1) return
    form.passengerCount -= 1
    const input = getPassengerCountInput()
    input.value = form.passengerCount
}

export function passengerCountOnInput(e) {
    const value = e.target.value
    if (!value || value == '0') {
        e.target.value = 1
        form.passengerCount = 1
        return;
    }
    if (!isNumeric(value)) {
        e.target.value = form.passengerCount
        return
    }
    form.passengerCount = perToEngDigits(value)
}
