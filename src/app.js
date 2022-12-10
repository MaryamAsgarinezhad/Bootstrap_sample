import addAllEventListeners from "./js/event-listeners";

addAllEventListeners()

const body = document.querySelector('body')
const footer = document.querySelector('footer')

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('bg-dark')
    footer?.classList.add('bg-black')


    body.classList.remove('bg-light')
    footer?.classList.remove('bg-white')
} else {
    body.classList.add('bg-light')
    footer?.classList.add('bg-white')

    body.classList.remove('bg-dark')
    footer?.classList.remove('bg-black')
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? ['dark', 'black'] : ['light', 'white'];
    const oldColorScheme = !event.matches ? ['dark', 'black'] : ['light', 'white'];
    body.classList.add(`bg-${newColorScheme[0]}`)
    body.classList.remove(`bg-${oldColorScheme[0]}`)

    footer?.classList.add(`bg-${newColorScheme[1]}`)
    footer?.classList.remove(`bg-${oldColorScheme[1]}`)
});



// start date pickers
jalaliDatepicker.startWatch({
    minDate: "attr",
    maxDate: "attr"
});
