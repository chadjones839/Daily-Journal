const entryConverter = (entryObject) => {
    const entryHTML = `<section class="entry" id="${entryObject.id}">
    <h4 class="entry__date">${entryObject.date}</h4>
    <h2 class="entry__concept">${entryObject.concept}</h2>
    <h3 class="entry__mood">${entryObject.mood}</h3>
    <p class="entry__body">
    ${entryObject.entry}
    </p>
    <div class="entryButtonContainer">
        <button id="editEntry__${entryObject.id}" class="editButton" type="button">Edit</button>
        <button id="deleteEntry__${entryObject.id}" class="deleteButton type="button">Delete</button>
    </div>
</section>`

return entryHTML
}

export default entryConverter