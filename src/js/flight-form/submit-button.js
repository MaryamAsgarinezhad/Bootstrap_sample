import form from "./form";

export function getSubmitButtonEl() {
    return document.querySelector('#submit-button')
}

export function onSubmit(event) {
    event.preventDefault()
    // todo: search for flights and save them in localstorage
    console.log(form)
}
