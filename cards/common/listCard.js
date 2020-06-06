const header = require('./header')
const cardType = require('../../utility/config').cardType
const serviceListCard=require('./serviceList')
const errorMessage = require('../../utility/config').errorMessage
module.exports.itemListCard = (data, logo, cardTitle, action,serviceList) => {
    var card = header.headerWithoutAccountName(logo, cardTitle)
    let i = 0;
    try {
        for (let i = 0; i < data.length; i++) {
            // let color = "Default";
            // if ((data[i].Status.toLowerCase().trim() === 'won') || (data[i].Status.toLowerCase().trim() === 'new') || (data[i].Status.toLowerCase().trim() === 'delivered') || (data[i].Status.toLowerCase().trim() === 'paid')) {
            //     color = "Good"
            // }
            // else if ((data[i].Status.toLowerCase().trim() === 'lost') || (data[i].Status.toLowerCase().trim() === 'cancelled') || (data[i].Status.toLowerCase().trim() === 'held')) {
            //     color = "Attention"
            // }
            // else if ((data[i].Status.toLowerCase().trim() === 'open') || (data[i].Status.toLowerCase().trim() === 'existing') || (data[i].Status.toLowerCase().trim() === 'active') || (data[i].Status.toLowerCase().trim() === 'posted')) {
            //     color = "Warning"
            // }
            card.cards.push(
                {
                    "sections": [
                        {
                            "widgets": [
                                {
                                    "buttons": [
                                        {
                                            "textButton": {
                                                "text": "<b>" + data[i].Description + "</b>",
                                                "onClick": {
                                                    "action": {
                                                        "actionMethodName": `${action}`,
                                                        "parameters": [
                                                            {
                                                                "key": `${i}`,
                                                                "value": data[i].id
                                                            }
                                                        ]
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "textParagraph": {
                                        "text": data[i].date + "<font color=\"#008000\"> \t" + data[i].Status + "</font>\t" + data[i].Amount,
                                    }
                                }
                            ]
                        }
                    ]
                }
            )
            
        }
        return serviceListCard.cardtoDisplay(serviceList,card);
    }
    catch (error) {
        console.error(error);
        return errorMessage
    }
}
