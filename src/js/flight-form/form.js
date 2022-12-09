// ticketType:
// 1: one way
// 2: two way

import {getSubmitButtonEl} from "./submit-button";

const form = {
    from: undefined,
    to: undefined,
    ticketType: 1,
    startTime: undefined,
    returnTime: undefined,
    passengerCount: 1,
}

function isFormValid() {
    if (form.passengerCount && form.from && form.to && form.startTime && form.ticketType) {
        if (form.ticketType === 2) {
            return !!form.returnTime
        }
        return true
    }
    return false
}

const formProxy = new Proxy(form, {
    set(obj, prop, value) {
        Reflect.set(...arguments)
        const button = getSubmitButtonEl()
        if (isFormValid()) {
            button.classList.remove('btn-disabled')
            button.removeAttribute('disabled')
        } else {
            button.classList.add('btn-disabled')
            button.setAttribute('disabled', '')
        }
        return obj
    }
})

export default formProxy
