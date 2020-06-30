import todaysDate from "./todaysDate.js"
import API from "./data.js"
import getData from "./getData.js"
import events from "./buttonEvents.js"
import saveButton from "./saveButton.js"
import filterEntries from "./radioButtons.js"



getData()
saveButton.saveEntry()
events.registerDeleteListener()
events.registerEditListener()
filterEntries.registerRadioClick()





