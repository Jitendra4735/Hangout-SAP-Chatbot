const personaList = require('../utility/config').personaList
const logos = require('../utility/config')
const cardType = require('../utility/config').cardType
const errorMessage = require('../utility/config').errorMessage
exports.showPersonaCard = (userName,text) => {
    var card = {
        "cards": [
            {
                "header": {
                    "title": "Hello " + userName + ", Please select a persona",
                }
            }
        ]
    }
    let i = 0;
    try {
        for (let i = 0; i < personaList.length; i++) {
            card.cards.push(
                {
                    "sections": [
                        {
                            "widgets": [
                                {
                                    "buttons": [
                                        {
                                            "textButton": {
                                                "text": `${personaList[i].nameToDisplay}`,
                                                "onClick": {
                                                    "action": {
                                                        "actionMethodName": `${personaList[i].nameToDisplay}`,
                                                        "parameters": [
                                                            {
                                                                "key": "personaName",
                                                                "value": `${personaList[i].nameToDisplay}`
                                                            }
                                                        ]
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            )
        }
        
        return card;
    }
    catch (error) {
        console.error(error);
        return errorMessage
    }
}