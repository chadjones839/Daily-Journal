import API from "./data.js"
import updateFormFields from "./update.js"
import getData from "./getData.js"

const entryLog = document.querySelector("#entryLog")

export default {
    registerDeleteListener () {
        entryLog.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteEntry__")) {
                const entryToDelete = event.target.id.split("__")[1]
                console.log('clicked')
                API.deleteJournalEntry(entryToDelete)
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
}