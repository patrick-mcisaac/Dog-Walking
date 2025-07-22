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
        petHTML += `<li data-walkerForeignKey="${pet.walkerId}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

