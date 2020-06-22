import API from "./data.js"
import updateFormFields from "./update.js"
import getData from "./getData.js"

const entryLog = document.querySelector("#entryLog")

export default {
    registerDeleteListener () {
        entryLog.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteEntry__")) {
                // Extract recipe id from the button's id attribute
                const entryToDelete = event.target.id.split("__")[1]

                // Invoke the delete method, then get all recipes and render them
                API.deleteJournalEntry(entryToDelete)
                    // .then(API.getJournalEntries)
                .then(() => {
                    document.querySelector("#entryLog").innerHTML = ""
                    getData()
                })
                    
                    // window.location.reload()
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
}





