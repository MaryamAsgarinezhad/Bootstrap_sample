export function startTimeOnInput(event) {
    const value = event.target.value
    form.startTime = new Date(value)
}

export function returnTimeOnInput(event) {
    const value = event.target.value
    form.returnTime = new Date(value);
}
