import API from "./data.js"
import renderEntries from "./entryList.js"
import createEntry from "./createEntry.js"




// GET - all entries from DB
const allEntries = () => {
    API.getJournalEntries()
    .then((entries) =>
        console.log(entries))
}

const newEntry1 = createEntry("6/18/20", 1, 1, "learned saving entries and factory functions")
console.log('NEW ENTRY 1', newEntry1)


// API.saveJournalEntry(newEntry1)
// .then(() => {
//     allEntries();
// })

const getData = () => {
    API.getJournalEntries()
    .then(renderEntries)
}

getData()
