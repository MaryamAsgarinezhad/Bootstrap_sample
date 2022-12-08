import form from "./form";
import {dateIsValid} from "../utils";

function getTimeInput(id) {
    const selector = `#${id}`
    return document.querySelector(selector)
}

export function startTimeOnInput(event) {
    const value = event.target.value
    const date = new Date(value);
    if (dateIsValid(date)) {
        form.startTime = date
    } else {
        getTimeInput('start-time').value = ''
        form.startTime = ''
    }
}

export function returnTimeOnInput(event) {
    const value = event.target.value
    const date = new Date(value);
    if (dateIsValid(date)) {
        form.returnTime = date
    } else {
        getTimeInput('return-time').value = ''
        form.startTime = ''
    }
}
