import form from "./form";

function getContainer() {
    return document.querySelector('#return-time-container')
}

function showReturnTimeDatePicker() {
    getContainer().classList.remove('visually-hidden')
}

function hideReturnTimeDatePicker() {
    getContainer().classList.add('visually-hidden')
}

export function ticketTypeInputEventListener(e) {
    const value = Number(e.target.value)
    form.ticketType = value
    if (value === 2) showReturnTimeDatePicker()
    else if (value === 1) hideReturnTimeDatePicker()
}
