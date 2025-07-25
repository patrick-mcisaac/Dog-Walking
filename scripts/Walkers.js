import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    'click',
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target
        
        if(whatWasClickedOn.dataset.type === 'walker'){
            window.alert(`This walker works in ${whatWasClickedOn.dataset.city}`)
        }
    }
)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li class="walker-list" data-id="${walker.id}"
                           data-city="${walker.city}"
                           data-type="walker"
                           >${walker.name}
                        </li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}

export const sortWalkerList = () => {
    const array = []
    // grab the li from the Ul
    const listItems = document.getElementsByClassName('walker-list')
    // convert li text to array
    for (const item of listItems) {
        array.push(item.innerHTML)
    }

    array.sort();
    for(let i = 0; i < array.length; i++){
        listItems[i].innerHTML = array[i]
    }

}
