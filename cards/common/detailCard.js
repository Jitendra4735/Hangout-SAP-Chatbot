const logos = require('../../utility/logos')
const serviceListCard=require('./serviceList')
const header = require('./header')
module.exports.detailCard = async (data, labels, source, logo, cardTitle,serviceList) => {
   // console.log('detailcard called')
    try {
        if (source === 'opportunity') {
            var valueofId = `[${data[labels[0].columnValue]}](https://ap8.salesforce.com/${data[labels[0].columnValue]})`
        } else {
            valueofId = data[labels[0].columnValue]
        }
        let color = "Default";
        if ((data[labels[4].columnValue].toLowerCase().trim() === 'won') || (data[labels[4].columnValue].toLowerCase().trim() === 'new') || (data[labels[4].columnValue].toLowerCase().trim() === 'delivered') || (data[labels[4].columnValue].toLowerCase().trim() === 'paid')) {
            color = "Good"
        }
        else if ((data[labels[4].columnValue].toLowerCase().trim() === 'lost') || (data[labels[4].columnValue].toLowerCase().trim() === 'cancelled') || (data[labels[4].columnValue].toLowerCase().trim() === 'held')) {
            color = "Attention"
        }
        else if ((data[labels[4].columnValue].toLowerCase().trim() === 'open') || (data[labels[4].columnValue].toLowerCase().trim() === 'existing') || (data[labels[4].columnValue].toLowerCase().trim() === 'active') || (data[labels[4].columnValue].toLowerCase().trim() === 'posted') || (data[labels[4].columnValue].toLowerCase().trim() === 'open order')) {
            color = "Warning"
        }

        var card = header.headerWithoutAccountName(logo, cardTitle)

        card['cards'][0]["sections"].push({

            "widgets": [
                {
                    "textParagraph": {
                        "text": `<b>${data[labels[2].columnValue]}</b>`
                    }
                },
                {
                    "keyValue": {
                        "topLabel": `${labels[0].lableValue}`,
                        "content": `${data[labels[0].columnValue]}`
                    }
                },
                {
                    "keyValue": {
                        "topLabel": `${labels[1].lableValue}`,
                        "content": `${data[labels[1].columnValue]}`
                    }
                },
                {
                    "keyValue": {
                        "topLabel": `${labels[3].lableValue}`,
                        "content": `${data[labels[3].columnValue]}`
                    }
                },
                {
                    "keyValue": {
                        "topLabel": `${labels[4].lableValue}`,
                        "content": `${data[labels[4].columnValue]}`
                    }
                },

            ]
        })
        var length = labels.length - 5;
        if (length % 2 !== 0) {
            length = length - 1;
        }
        let i = 5;
        //console.log(card['cards'][0]["sections"])
        for (i = 5; i < labels.length; i++) {
            card['cards'][0]["sections"][1]["widgets"].push(
                {
                    "keyValue": {
                        "topLabel": `${labels[i].lableValue}`,
                        "content": `${data[labels[i].columnValue]}`
                    }
                },
                {
                    "keyValue": {
                        "topLabel": `${labels[++i].lableValue}`,
                        "content": `${data[labels[i].columnValue]}`
                    }

                })
        }
        if ((labels.length - 5) % 2 !== 0) {
            card['cards'][0]["sections"].push(
                {
                    "widgets": [{
                        "keyValue": {
                            "topLabel": `${labels[i].lableValue}`,
                            "content": `${data[labels[i].columnValue]}`
                        }
                    },
                    {

                    }]
                }
            )
        }

        return serviceListCard.cardtoDisplay(serviceList,card);
    } catch (error) {
        console.error(error);
        return "error occured"
    }
}