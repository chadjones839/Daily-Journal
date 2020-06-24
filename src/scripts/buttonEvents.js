import API from "./data.js"
import updateFormFields from "./update.js"
import getData from "./getData.js"
import filterEntries from "./radioButtons.js"

const entryLog = document.querySelector("#entryLog")
const radioButton = document.getElementsByName("pain")

export default {
    registerDeleteListener () {
        entryLog.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteEntry__")) {
                // Extract recipe id from the button's id attribute
                const entryToDelete = event.target.id.split("__")[1]
                console.log('clicked')
                // Invoke the delete method, then get all recipes and render them
                API.deleteJournalEntry(entryToDelete)
                    // .then(API.getJournalEntries)
                .then(() => {
                    document.querySelector("#entryLog").innerHTML = ""
                    getData()
                })
            }
        })
    },
    registerEditListener() {
        entryLog.addEventListener("click", event => {
            if (event.target.id.startsWith("editEntry__")) {
                const entryIdToEdit = event.target.id.split("__")[1]
                updateFormFields(entryIdToEdit)
            }
        })
    }
    // registerRadioClick() {
    //     radioButton.forEach(radio => {
    //         radio.addEventListener("click", event => {
    //             const mood = event.target.value
                
    //             API.getJournalEntries(mood)
    //             // .then(() => {
    //             //     document.querySelector("#entryLog").innerHTML = ""
    //             //     getData() 
    //             // })
    //             console.log(mood)
    //             return mood
                
    //         })
    //     })
    // }
}





