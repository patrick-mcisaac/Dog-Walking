import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    'click',
    (e) => {
        const clickTarget = e.target
        if(clickTarget.dataset.type === 'city'){
            window.alert(`${clickTarget.dataset.walkername} is servicing this city.`)
        }
    }
)


export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const walker of walkers) {
        citiesHTML += `<li data-type='city'
                            data-walkername="${walker.name}"
                            >${walker.city}
                        </li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

