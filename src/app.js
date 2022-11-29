import addAllEventListeners from "./js/event-listeners";

addAllEventListeners()


// start date pickers
jalaliDatepicker.startWatch({
    time: true,
    minDate: "attr",
    maxDate: "attr"
});
