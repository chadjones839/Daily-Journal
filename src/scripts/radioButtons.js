import API from "./data.js"
import getData from "./getData.js"
import events from "./buttonEvents.js"

// const entries = document.querySelector("entryLog")
const entries = API.getJournalEntries()

const filterEntries = () => {
    entries.filter(entry => {
        let noPain = false
        let mildPain = false
        let moderatePain = false
        let severePain = false
        let verySeverePain = false
        let worstPossiblePain = false
        let allEntries = false
    
        if (entry.mood === "No Pain") {
            noPain = true
            events.registerRadioClick(noPain)
            return noPain
        }
        else if (entry.mood === "Mild Pain") {
            mildPain = true
            return mildPain
        }
        else if (entry.mood === "Moderate Pain") {
            moderatePain = true
            return moderatePain
        }
        else if (entry.mood === "Severe Pain") {
            severePain = true
            return severePain
        }
        else if (entry.mood === "Very Severe Pain") {
            verySeverePain = true
            return verySeverePain
        }
        else if (entry.mood === "Worst Possible Pain") {
            worstPossiblePain = true
            return worstPossiblePain
        }
        else if (entry.mood !== "") {
            allEntries = true
            return allEntries
        }
    })
}

export default filterEntries


