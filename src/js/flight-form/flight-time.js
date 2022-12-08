import form from "./form";
import {dateIsValid} from "../utils";
import PersianDate from 'persian-date'

function getTimeInput(id) {
    const selector = `#${id}`
    return document.querySelector(selector)
}

export function startTimeOnInput(event) {
    const value = event.target.value
    const input = value.split('/').map(item => parseInt(item, 10))
    const persianDate = new PersianDate(input)
    const date = persianDate.toDate();
    if (dateIsValid(date)) {
        form.startTime = date
    } else {
        getTimeInput('start-time').value = ''
        form.startTime = undefined
    }
}

export function returnTimeOnInput(event) {
    const value = event.target.value
    const input = value.split('/').map(item => parseInt(item, 10))
    const persianDate = new PersianDate(input)
    const date = persianDate.toDate();
    if (dateIsValid(date)) {
        form.returnTime = date
    } else {
        getTimeInput('return-time').value = ''
        form.startTime = undefined
    }
}
