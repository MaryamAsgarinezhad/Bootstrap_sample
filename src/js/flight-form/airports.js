import {filterAirports} from "../const/airports";
import {createElementFromHTML, insertAfter} from "../utils";
import {airportSelectInput} from "./event-listeners";
import form from "./form";

function createIdWithEvent(event) {
    return `options-${event.target.id}`
}


export function renderAirportOption(parentId, item, type) {
    const isActive = form[type] === item.id
    return `
        <li
            class="
                btn
                list-group-item-action
                list-group-item
                d-flex
                flex-row
                align-items-center
                justify-content-between
                user-select-none
                clickable
                ${isActive ? 'active' : ''}
            "
            value-id="${item.id}"
        >
            <div>
                <h6> ${item.titleSmall} </h6>
                <span> ${item.title} </span>
            </div>
            <div>
                <h6> ${item.city} </h6>
                <span> ${item.country} </span>
            </div>
        </li>
    `
}

function createEmptyAlert() {
    const htmlString = `
        <div class="alert alert-danger mb-0" role="alert">
            فرودگاهی یافت نشد
        </div>
    `
    return createElementFromHTML(htmlString)
}

export function renderOptionsNode(event, flights) {
    const id = createIdWithEvent(event)
    const type = id.split('-')[1]
    const listGroupHtml = `
        <ul id="${id}" class="airport-options-container list-group overflow-scroll border-0 shadow rounded-bottom position-absolute w-100"></ul>
    `
    const listGroupNode = createElementFromHTML(listGroupHtml)
    flights.forEach(item => {
        const itemString = renderAirportOption(id, item, type)
        const newNode = createElementFromHTML(itemString)
        // id: options-{type}-input: type will be 'from' or 'to' and we need to use from-input and to-input in dom
        newNode.addEventListener('click', (e) => airportSelectInput(e, type))
        // newNode.childNodes.forEach(child => {
        //     child.addEventListener('click', (e) => airportSelectInput(e, type))
        // })
        listGroupNode.appendChild(newNode)
    })
    return listGroupNode
}

function replaceSelectDialog(event, newNode) {
    const querySelector = `#${createIdWithEvent(event)}`
    const node = document.querySelector(querySelector)
    if (!node) insertAfter(newNode, event.target)
    else if (newNode.children.length) {
        insertAfter(newNode, event.target)
        node.remove()
    } else {
        node.innerHTML = createEmptyAlert().outerHTML
    }
}

export function hideSelectDialogEventListener(event, querySelector) {
    const node = document.querySelector(querySelector)
    node?.classList.add('visually-hidden')
}

export function showSelectDialogEventListener(event, querySelector) {
    const node = document.querySelector(querySelector)
    if (node) node?.classList.remove('visually-hidden')
    else airportSelectInputOnInputEventListener(event)
}

export function airportSelectInputOnInputEventListener(event) {
    const value = event.target.value
    const flights = filterAirports(value)
    const newNode = renderOptionsNode(event, flights)
    replaceSelectDialog(event, newNode)
}
