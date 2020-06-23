# Daily-Journal


### Chapter 1 - Static Layout

#### Design & Layout

- [x] Build a `form` component in HTML with the following fields:

>- [x] **Date** with input type `date`
>- [x] **Concepts Covered** with input type `text`
>- [x] **Mood** `select` element with as many `option` child elements as needed.
>- [x] **JournalEntry** `textarea` field

- [x] Place a `button` element beneath the form labeled "Save Entry"

---

### Chapter 2 - Object DOM

#### Create Object Dom

- [x] Create new file `journal.js`

- [x] Declare variable `journalEntry` with a blank object as it's value to represent a single journal entry

- [x] Define the keys and a value for each for field.

- [x] Declare another variable `journalEntries` with a blank array as it's value to represent multiple journal entry objects.

- [x] use the `.push()` method to add the `journalEntry` object into the `journalEntries` array

- [x] Declare variables and define 2 or 3 objects to represent journal entries. 

---

### Chapter 3 - Data DOM

#### Render Entries to the DOM

- [x] Place all `journalEntry` objects into the `journalEntries` array and delete all `journalEntry` variables.

- [x] Assign an `id` key to each object, with value starting and ascending from `1`

- [x] Create HTML representations for the objects in the `journalEntries` array:

> - [x] Write a function that returns a journal entry HTML component as an HTML string template.
> - [x] Create new `<article>` element beneath `form` component in `index.html` to contain all rendered journal entries.
> - [x] Write function that iterates the `journalEntries` array and add them to the DOM.

---

### Chapter 4 - Journal Fetching

#### Setting up a JSON server API

- [x] Install `json-server` through terminal

- [x] Through Terminal, create `api` directory and create `entries.json` file within.

- [x] run `json-server`

#### Using `fetch()` to Query Data

- [x] Refactor the `journalEntries` array into `entries.json`, then delete the empty `journalEntries` variable.

- [x] use `fetch()` to get data from API

- [x] `.then()` parse as JSON

- [x] `.then()` define response

---

### Chapter 5 - Modular Code

#### Single Responsibility Modules

- [x] Create three new files in the `src/scripts` directory:

>- [x] `data.js` - Move the code that deals with getting the data into this file.
>- [x] `entryList.js` - Move the code that is responsible for modifying the DOM into this file.
>- [x] `entryComponent.js` - Move the code that is responsible for creating the journal entry HTML component into this file.

- [x] Refactor `index.html` to include all four .js files.

- [x] Refactor fetch function in `data.js` as an API access module.

#### Main Application Logic

****note:*** renamed `journal.js` to `main.js`*

- [x] use main application logic to get data from `data.js` into `main.js`

- [x] Pass the data to the render function in `entryList.js`

- [x] Refactor code in both `entryList.js` and `entryComponent.js` as object/method.

---

### Chapter 6 - ES6 Modules

- [x] Remove all other script tags from index.html so that it only has a single script tag for `main.js` with a type of `module`.

- [x] Add export statments at the bottom of the `data.js`, `entryList.js` and `entryComponent.js` modules.

- [x] Add import statements at the top the appropriate modules so that each module is importing any module it needs.

---

### Chapter 7 -- Saving Entries

#### Listen for Submit Button Click

- [x] Collect form field values using `document.querySelector` to select input fields and the `.value` property on teh input field elements to get the text.

#### Journal Entry Factory Function

- [x] Create `createEntry.js` module:

>- [x] Define a factory function to generate a journal entry object
>- [x] Create a new object with the same key/value pairs as the `entries.json` file.
>- [x] Return the object
>- [x] Import and invoke the factory function in `main.js`

#### Use POST Method

- [x] configue a POST method in the API access module.

- [x] Implement the POST operation byt importing and invoking it in `main.js`

- [x] Once the new entry is saved to the API, get all entries and render again

---

### Chapter 8 - Filtering Mood

#### Mood Radio Buttons

- [ ] Using <fieldset>, <legend>, <input type="radio">, and <label> HTML components, construct a set of radio buttons for selecting one of the moods

- [ ] Use the `filter()` and `find()` method on an array to show journal entries that match a certain mood.

- [ ] Add a click event listeners to each of the radio buttons

- [ ] Filter the journal entries by invoking the `getJournalEntries()` method, then `filter()` only the entries that have the selected mood.

### Chapter 9 - Deleting Entries

- [x] Add `Delete` button to each journal entry card that you display

- [x] Add event listener to delete button

- [x] On click, delete journal entry

- [x] Get all entries and display again

### Chapter 10 - Editing Entries

- [x] Add edit button to journal entry
- [x] Add hidden input field to form to store `id` value of edited entry
- [x] Add event listener to button. Give unique id which includes `id` property of entry
- [x] When clicked, get the individual entry and populate the form fields with text content.
- [x] When user clicks the save button, determine if editing or creating (does hidden input field have a value?)
- [x] If editing, perform a PUT request to the API
- [x] Get all entries and display again

### Chapter 11 - Journal Searching


### Chapter 12 - Mood Table