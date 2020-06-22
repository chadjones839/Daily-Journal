import API from "./data.js"
import renderEntries from "./entryList.js"

let getData = () => {
    API.getJournalEntries()
    .then(renderEntries)
}

export default getData
