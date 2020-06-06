const logos = require('../utility/logos')
const header = require('./common/header')

module.exports.cardToDisplay = async (logo, cardTitle, imageData) => {
    try {
        var card = header.headerWithoutAccountName(logo, cardTitle);
        for (let i = 0; i < imageData.length; i++) {
            card['body'].push(
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "Image",
                                    "altText": "CFO Kpi",
                                    "url": `data:image/png;base64,${imageData[i]}`,

                                }
                            ]
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "Image",
                                    "altText": "CFO Kpi",
                                    "url": `data:image/png;base64,${imageData[++i]}`,

                                    "horizontalAlignment": "Right"
                                }
                            ]
                        }
                    ]
                }
            )
        }
        return card;
    } catch (error) {
        console.error(error);
        return "error occured"
    }
}
