const botBuilder = require('claudia-bot-builder');

module.exports = botBuilder(request => {
    if (request.text.includes("?")) {
        return 'Nie wiem'
    } else if (request.text.includes("kurwa") ||
        (request.text.includes("jebać")) ||
        (request.text.includes("pierdol"))
    ) {
        return "Ale nie musisz przeklinać."
    } else if (request.text === ".") {
        return "Kaj idziesz?";
    } else if (request.text.toUpperCase() === request.text) {
        return "Nie krzycz";
    } else {
        return "OK"
    }
});
