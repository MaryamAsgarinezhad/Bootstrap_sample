import {fromInput, ticketType, toInput} from "./flight-form/event-listeners";

// todo: add more event listeners
const elEventMapper = {...fromInput, ...toInput, ...ticketType}


export default function addAllEventListeners() {
    for (const [querySelector, events] of Object.entries(elEventMapper)) {
        const domEl = document.querySelector(querySelector)
        for (const {eventType, func} of events) {
            domEl.addEventListener(eventType, func)
        }

        if (!events.filter(item => item.eventType === 'clickOutside').length) {
            continue
        }

        window.addEventListener('click', (e) => {
            if (!domEl.contains(e.target)) {
                const clickOutsideEvent = new CustomEvent('clickOutside', {...e, type: 'clickOutside'})
                domEl.dispatchEvent(clickOutsideEvent)
            }
        });
    }
}