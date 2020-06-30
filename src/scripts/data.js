import getData from "./getData.js";

const url = "http://localhost:8088"

const API = {
    getJournalEntries: () => {
        return fetch(`${url}/entryLog`)
        .then(response => response.json())
    },
    saveJournalEntry: (newEntryObject) => {
        return fetch(`${url}/entryLog`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)

        })
        .then(response => response.json())
        .then(() => {
            document.querySelector("#conceptsCovered").value = ""
            document.querySelector("#entry").value = ""
            getData()
        })
    },
    deleteJournalEntry: (id) => {
        return fetch(`${url}/entryLog/${id}`, {
            method: "DELETE"
        })
        .then (response => response.json())
    },
    editJournalEntry: (id) => {
        const updatedObject = {
            date: document.querySelector("#journalDate").value,
            mood: document.querySelector("#mood").value,
            concept: document.querySelector("#conceptsCovered").value,
            entry: document.querySelector("#entry").value
        } 
        console.log('updated object', updatedObject)
        return fetch(`${url}/entryLog/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedObject)
         })
        .then(response => response.json())
        .then(() => {
            document.querySelector("#editEntryId").value = ""
            getData()
        })
    }
}

export default API