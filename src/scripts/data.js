const url = "http://localhost:8088"

const API = {
    // Fetch from the API
    getJournalEntries () {
        return fetch(`${url}/entryLog`)
        .then (response => response.json());
    }
}

export default API
