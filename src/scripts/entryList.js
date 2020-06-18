import API from "./data.js"
import entryConverter from "./entryComponent"

const renderEntries = (entries) => {
    for(const entry of entries) {
        const entryHTML = entryConverter(entry)
        const entryLog = document.querySelector(".entryLog")
        entryLog.innerHTML += entryHTML
    }
}

export default renderEntries

