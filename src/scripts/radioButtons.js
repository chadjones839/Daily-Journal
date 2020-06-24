import API from "./data.js"
import getData from "./getData.js"
import events from "./buttonEvents.js"
import renderEntries from "./entryList.js"


let entries = []

API.getJournalEntries()
.then ((allEntries) => entries = allEntries)

const entryLog = document.querySelector("#entryLog")
const radioButton = document.getElementsByName("pain")

const filterEntries = {
    registerRadioClick() {
        radioButton.forEach(radio => {
            radio.addEventListener("click", event => {
                const mood = event.target.value
                console.log('MOOD BUTTON = ', mood)
                
                let newMood = filterEntries.filterRadioClick(mood)
                entryLog.innerHTML = ""
                renderEntries(newMood)
                
                console.log('RETURNED', filteredEntries)
                console.log('FILTERED ENTRIES:', newMood)               
            })
        })
    },
    filterRadioClick(val) {
        console.log('MOOD OBJECT VALUE = ', val)
        const all = entries.filter(entry => {
            let filteredMoods = false
            if (entry.mood === val) {
                filteredMoods = true
            }
            console.log('FILTER SUCCESS', filteredMoods)
            
            return filteredMoods
        })
        return all
    }
}       
        

export default filterEntries
