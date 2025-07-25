import { getPets, getWalkers } from "./database.js"

const pets = getPets()

document.addEventListener(
    'click',
    (e) => {
        const clickTarget = e.target
        const walkerId = clickTarget.dataset.walkerforeignkey
        
        // get walkers array and iterate to compare
        const walkers = getWalkers()
        for (const walker of walkers) {

            if(parseInt(walkerId) === walker.id){
                window.alert(`This dog is being walked by ${walker.name}`)
            }
        }

    }
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li class="pet-list" data-walkerForeignKey="${pet.walkerId}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

export const sortPetList = () => {
    const array = []
    // grab the li from the Ul
    const listItems = document.getElementsByClassName('pet-list')
    // convert li text to array
    for (const item of listItems) {
        array.push(item.innerHTML)
    }

    array.sort();
    for(let i = 0; i < array.length; i++){
        listItems[i].innerHTML = array[i]
    }

}
