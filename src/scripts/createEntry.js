import API from "./data.js"
import getData from "./getData.js";

const createEntry = (date, mood, concept, entry) => {
    const newEntry = {
        date: date,
        mood: mood,
        concept: concept,
        entry: entry
    }
    return newEntry
}


const saveEntryButton = () => {
    document
    .querySelector("#saveButton")
    .addEventListener("click", clickEvent => {
        
        let entry = {}

        entry.date = document.querySelector("#journalDate").value
        entry.mood = document.querySelector("#mood").value
        entry.concept = document.querySelector("#conceptsCovered").value
        entry.entry = document.querySelector("#entry").value

        if (entry.date !== "" && entry.mood !== "" && entry.concept !== "" && entry.entry !== "") {
            API.saveJournalEntry(entry)
            document.querySelector("#conceptsCovered").value = ""
            document.querySelector("#entry").value = ""
            window.location.reload()
        }
        else {
            alert("Fill out all fields")
        }      
        console.log('saved')
    })
};

export {
    createEntry, 
    saveEntryButton
}