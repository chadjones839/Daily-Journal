import API from "./data.js"

const saveButton = {
    saveEntry: () => {
        document
        .querySelector("#saveButton")
        .addEventListener("click", clickEvent => {
            
            const hiddenEntryId = document.querySelector("#editEntryId").value
            console.log(hiddenEntryId)
            let entry = {}

            entry.date = document.querySelector("#journalDate").value
            entry.mood = document.querySelector("#mood").value
            entry.concept = document.querySelector("#conceptsCovered").value
            entry.entry = document.querySelector("#entry").value

            if (hiddenEntryId !== "") {
                document.querySelector("#entryLog").innerHTML = ""
                API.editJournalEntry(hiddenEntryId)
                document.querySelector("#conceptsCovered").value = ""
                document.querySelector("#entry").value = ""
                console.log('update')
            }
            else if (entry.date !== "" && entry.mood !== "" && entry.concept !== "" && entry.entry !== "") {
                document.querySelector("#entryLog").innerHTML = ""
                API.saveJournalEntry(entry)
                console.log('new')
            }
            else {
                alert("Fill out all fields")
            }      
            console.log('Save Entry Clicked')
        })
    }
}


export default saveButton