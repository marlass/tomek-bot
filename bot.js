const botBuilder = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;

module.exports = botBuilder(request => {
    if (request.type === 'facebook') {
        if (request.text === 'quick') {
            const newMessage = new fbTemplate.Text('What\'s your favorite House in Game Of Thrones');

            return newMessage
            .addQuickReply('Stark', 'STARK')
            .addQuickReply('Lannister', 'LANNISTER')
            .addQuickReply('Targaryen', 'TARGARYEN')
            .addQuickReply('None of the above', 'OTHER')
            .get();
        } else if (request.text === 'generic') {
            const generic = new fbTemplate.Generic();

            return generic
            .addBubble('Claudia.js', 'Deploy Node.js microservices to AWS easily')
                .addUrl('https://claudiajs.com')
                .addButton('Say hello', 'HELLO')
                .addButton('Go to Github', 'https://github.com/claudiajs/claudia')
            .addBubble('Claudia Bot Builder')
                .addButton('Go to Github', 'https://github.com/claudiajs/claudia-bot-builder')
            .get();
        }
    }   

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
