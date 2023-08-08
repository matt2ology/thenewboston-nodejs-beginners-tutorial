// movies.js
function printGarden() {
    console.log("The Garden of Words: PG-13");
}

function printVoice() {
    console.log("A Silent Voice : PG");
}

// Only function printGarden() is able to be exported into another file
module.exports.garden = printGarden; // Don't need the parentheses