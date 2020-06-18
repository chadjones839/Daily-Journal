import API from "./data.js"
import renderEntries from "./entryList"
import entryConverter from "./entryComponent"


API.getJournalEntries()
    .then ((response) => {
        console.log(response)
        renderEntries()
    })

