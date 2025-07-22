import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    'click',
    (e) => {
        const clickTarget = e.target
        const clickId = clickTarget.dataset.cityId

        let walkerNames = ''

        if(clickTarget.dataset.type === 'city'){
        // for loop through walkers 
        for (const walker of walkers) {
            // if click id matches walker cityId
            if(walker.cityId === parseInt(clickId)){
                // add name to walker name
                walkerNames += `${walker.name} `
            }
        }
            window.alert(`${walkerNames} is servicing this city.`)
        }
    }
)


export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li data-type='city'
                            data-city-id="${city.id}"
                            >${city.city}
                        </li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

