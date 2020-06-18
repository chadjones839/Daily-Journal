// convert entries into single object

const entryConverter = (entryObject) => {
    const entryHTML = `<section class="entry">
    <h4 class="entry__date">${entryObject.date}</h4>
    <h2 class="entry__concept">${entryObject.concept}</h2>
    <h3 class="entry__mood">${entryObject.mood}</h3>
    <p class="entry__body">
    ${entryObject.entry}
    </p>
</section>`
return entryHTML
}



export default entryConverter