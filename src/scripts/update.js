const url = "http://localhost:8088"

const updateFormFields = (entryId) => {

    // Get reference to input fields in the form
    const hiddenEntryId = document.querySelector("#editEntryId")
    const date = document.querySelector("#journalDate")
    const mood = document.querySelector("#mood")
    const concept = document.querySelector("#conceptsCovered")
    const entryField = document.querySelector("#entry")

    fetch(`${url}/entryLog/${entryId}`)
        .then(response => response.json())
        .then(entry => {
            hiddenEntryId.value = entry.id 
            date.date = entry.date
            mood.option = entry.mood
            concept.value = entry.concept
            entryField.value = entry.entry
        })
}

export default updateFormFields