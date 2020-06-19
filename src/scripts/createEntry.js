const createEntry = (date, mood, concept, entry) => {
    const newEntry = {
        date: date,
        mood: mood,
        concept: concept,
        entry: entry
    }
    return newEntry
}

export default createEntry