const header = require('./header')
const teamData = require('../../data/database/common/teamData')
const config = require('../../utility/config')
module.exports.teamCard = async (departmentName, buisnessRole, labels, update) => {
    try {
        console.log(departmentName)
        console.log(buisnessRole)
        var data = await teamData.getTeamData(departmentName, buisnessRole);
        console.log('data')
        console.log(data)
        var length = data.length;
        if (length % 2 !== 0) {
            length = length - 1
        }


        var card = {
            "cards": [
                {
                    "actionResponse": { "type": "NEW_MESSAGE" },
                    "sections": [
                        {
                            "widgets": [
                                {
                                    "image": {
                                        "imageUrl": "https://maps.googleapis.com/..."
                                    }
                                }
                            ]
                        },
                        {
                            "widgets": [
                                {
                                    "buttons": [
                                        {
                                            "textButton": {
                                                "text": "View Profile",
                                                "onClick": {
                                                    "action": {
                                                        "actionMethodName": `${config.purchaseManagerServiceList[3]}`,
                                                        "parameters": [
                                                            {
                                                                "key": "",
                                                                "value": ""
                                                            }
                                                        ]
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "textButton": {
                                                "text": "Team Members",
                                                "onClick": {
                                                    "action": {
                                                        "actionMethodName": `${config.purchaseManagerServiceList[3]}`,
                                                        "parameters": [
                                                            {
                                                                "key": "",
                                                                "value": ""
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
            ]
        }



        // for (let i = 0; i < data.length; i++) {
        //     var position;
        //     if (data[i].BusinessRole.toLowerCase().includes('manager')) {
        //         position = `${data[i].BusinessRole}`
        //     } else {
        //         position = `${data[i].Department} ${data[i].BusinessRole}`
        //     }







        //     var card = {
        //         "type": "AdaptiveCard",
        //         "version": "1.0",
        //         "body": [
        //             {
        //                 "type": "Container",
        //                 "items": [
        //                     {
        //                         "type": "Image",
        //                         "altText": "",
        //                         "horizontalAlignment": "Center",
        //                         "size": "Large",
        //                         "style": "Person",
        //                         "url": `${data[i].ProfilePhoto}`
        //                     }
        //                 ]
        //             },
        //             {
        //                 "type": "TextBlock",
        //                 "text": `${data[i].FirstName} ${data[i].LastName}`,
        //                 "horizontalAlignment": "Center",
        //                 "spacing": "Small",
        //                 "wrap": true,
        //                 "size": "Medium",
        //                 "weight": "Bolder"
        //             },
        //             {
        //                 "type": "TextBlock",
        //                 "text": `${position}`,
        //                 "spacing": "None",
        //                 "wrap": true,
        //                 "horizontalAlignment": "Center",
        //                 "size": "Small"
        //             },
        //             {
        //                 "type": "ColumnSet",
        //                 "columns": [
        //                     {
        //                         "type": "Column",
        //                         "width": "stretch",
        //                         "items": [
        //                             {
        //                                 "type": "ActionSet",
        //                                 "actions": [
        //                                     {
        //                                         "type": "Action.ShowCard",
        //                                         "title": "View Profile",
        //                                         "card": {
        //                                             "type": "AdaptiveCard",
        //                                             "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        //                                             "body": [

        //                                             ]
        //                                         }
        //                                     }
        //                                 ],
        //                                 "horizontalAlignment": "Center"
        //                             }
        //                         ]
        //                     },
        //                     {
        //                         "type": "Column",
        //                         "width": "auto",
        //                         "items": [
        //                             {
        //                                 "type": "ActionSet",
        //                                 "actions": [
        //                                     {
        //                                         "type": "Action.OpenUrl",
        //                                         "title": "Chat",
        //                                         "url": `${process.env.teamsChatUrl.replace('testUser', data[i].Email)}`
        //                                     }
        //                                 ],
        //                                 "horizontalAlignment": "Center"
        //                             }
        //                         ]
        //                     }
        //                 ]
        //             }
        //         ],
        //         "$schema": "http://adaptivecards.io/schemas/adaptive-card.json"
        //     }

        //     for (let j = 0; j < labels.length; j++) {
        //         card['body'][3]['columns'][0]['items'][0]["actions"][0]["card"]["body"].push(
        //             {
        //                 "type": "ColumnSet",
        //                 "columns": [
        //                     {
        //                         "type": "Column",
        //                         "verticalContentAlignment": "Center",
        //                         "width": "stretch",
        //                         "items": [
        //                             {
        //                                 "type": "TextBlock",
        //                                 "text": `${labels[j].lableValue}`,
        //                                 "horizontalAlignment": "Left",
        //                                 "wrap": true
        //                             },
        //                             {
        //                                 "type": "TextBlock",
        //                                 "text": `${data[i][labels[j].columnValue]}`,
        //                                 "horizontalAlignment": "Left",
        //                                 "wrap": true,
        //                                 "spacing": "Small",
        //                                 "weight": "Bolder"
        //                             }
        //                         ]
        //                     },
        //                     {
        //                         "type": "Column",
        //                         "spacing": "Large",
        //                         "verticalContentAlignment": "Center",
        //                         "width": "stretch",
        //                         "items": [
        //                             {
        //                                 "type": "TextBlock",
        //                                 "text": `${labels[++j].lableValue}`,
        //                                 "horizontalAlignment": "Left",
        //                                 "wrap": true
        //                             },
        //                             {
        //                                 "type": "TextBlock",
        //                                 "text": `${data[i][labels[j].columnValue]}`,
        //                                 "horizontalAlignment": "Left",
        //                                 "wrap": true,
        //                                 "spacing": "Small",
        //                                 "weight": "Bolder"
        //                             }
        //                         ]
        //                     }
        //                 ]
        //             }
        //         )
        //     }

        //     cards.push(CardFactory.adaptiveCard(card));
        // }
        return card
    } catch (error) {
        console.error(error);
        return "error occured"
    }
}