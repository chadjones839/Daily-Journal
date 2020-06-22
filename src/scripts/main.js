import API from "./data.js"
import renderEntries from "./entryList.js"
import todaysDate from "./todaysDate.js"
import getData from "./getData.js"
import events from "./buttonEvents.js"
import { createEntry, saveEntryButton } from "./createEntry.js"

getData()
saveEntryButton()
events.registerDeleteListener()
