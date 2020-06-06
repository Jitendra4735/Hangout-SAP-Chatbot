const config = require('../../Utility/config');
module.exports.cardtoDisplay = (serviceList) => {
    try {
        var length = serviceList.length;

        if (length % 2 !== 0) {
            length = length - 1
        }
        // if(graph === 'Purchase Manager'){

        //     graphImage.graphImageMainStep1(graph);
        // }
        var card = {
            "cards": [
                {
                    "header": {
                        "title": `${config.cardTitle.accountManagerServiceList}`,
                    }
                }
            ]
        }
        let i = 0;
        for (i = 0; i < length; i += 2) {
            card['cards'].push({
                "sections": [
                    {
                        "widgets": [
                            {
                                "buttons": [
                                    {
                                        "textButton": {
                                            "text": `${serviceList[i]} \t`,
                                            "onClick": {
                                                "action": {
                                                    "actionMethodName":`${serviceList[i]}`,
                                                    "parameters": [
                                                        {
                                                            "key": `${i}`,
                                                            "value": `${serviceList[i]}`
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "textButton": {
                                            "text": `${serviceList[i+1]}`,
                                            "onClick": {
                                                "action": {
                                                    "actionMethodName":`${serviceList[i+1]}`,
                                                    "parameters": [
                                                        {
                                                            "key": `${i}`,
                                                            "value": `${serviceList[i+1]}`
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
            })

        }
        if (serviceList.length % 2 !== 0) {
            card['cards'].push({
                "sections": [
                    {
                        "widgets": [
                            {
                                "buttons": [
                                    {
                                        "textButton": {
                                            "text": `${serviceList[i]} \t`,
                                            "onClick": {
                                                "action": {
                                                    "actionMethodName":`${serviceList[i]}`,
                                                    "parameters": [
                                                        {
                                                            "key": `${i}`,
                                                            "value": `${serviceList[i]}`
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
            })
        }
        return card;
    } catch{
        console.error(error);
        return "error occured";
    }
}