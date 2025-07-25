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
    let citiesHTML = "<ul id=cityList>"

    for (const city of cities) {
        citiesHTML += `<li class="city-list" data-type='city'
                            data-city-id="${city.id}"
                            >${city.city}
                        </li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

// declare function
export const sortCityList = () => {
    const array = []
    // grab the li from the Ul
    const listItems = document.getElementsByClassName('city-list')
    // convert li text to array
    for (const item of listItems) {
        array.push(item.innerHTML)
    }

    array.sort();
    for(let i = 0; i < array.length; i++){
        listItems[i].innerHTML = array[i]
    }

}



// sort li
