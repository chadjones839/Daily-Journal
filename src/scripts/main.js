import API from "./data.js"
import renderEntries from "./entryList.js"
import todaysDate from "./todaysDate.js"
import getData from "./getData.js"
import events from "./buttonEvents.js"
import createEntry from "./createEntry.js"
import saveButton from "./saveButton.js"
import updateFormFields from "./update.js"

getData()
saveButton.saveEntry()
events.registerDeleteListener()
events.registerEditListener()
