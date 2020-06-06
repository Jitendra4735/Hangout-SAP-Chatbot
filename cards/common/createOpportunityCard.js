const header = require('./header')
const actionList = require('../../utility/config').createOpportunityAction

module.exports.creatOpportuniy = (logo, cardTitle, accountName) => {
    try {
        var card = header.headerWithAccountName(logo, cardTitle, accountName);
        card['body'].push({
            "type": "Container",
            "items": [
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Opportunity Name",
                                    "wrap": true,
                                    "separator": true
                                },
                                {
                                    "type": "Input.Text",
                                    "placeholder": "Opportunity Name",
                                    "id": "opportunityName"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Amount",
                                    "wrap": true
                                },
                                {
                                    "type": "Input.Number",
                                    "placeholder": "Amount",
                                    "id": "amount",
                                    "style": "text"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Close Date",
                                    "wrap": true
                                },
                                {
                                    "type": "Input.Date",
                                    "placeholder": "Close Date",
                                    "id": "closeDate"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Opportunity Stage",
                                    "wrap": true
                                },
                                {
                                    "type": "Input.ChoiceSet",
                                    "placeholder": "Prospecting",
                                    "choices": [
                                        {
                                            "title": "Prospecting",
                                            "value": "Prospecting"
                                        },
                                        {
                                            "title": "Value Proposition",
                                            "value": "Value Proposition"
                                        },
                                        {
                                            "title": "Needs Analysis",
                                            "value": "Needs Analysis"
                                        },
                                        {
                                            "title": "Close Won",
                                            "value": "Close Won"
                                        },
                                        {
                                            "title": "Close Lost",
                                            "value": "Close Lost"
                                        }
                                    ],
                                    "id": "opportunityStage"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Opportunity Type",
                                    "wrap": true
                                },
                                {
                                    "type": "Input.ChoiceSet",
                                    "placeholder": "New",
                                    "choices": [
                                        {
                                            "title": "New",
                                            "value": "New"
                                        },
                                        {
                                            "title": "Existing",
                                            "value": "Existing"
                                        }
                                    ],
                                    "id": "opportunityType"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Lead Source",
                                    "wrap": true
                                },
                                {
                                    "type": "Input.ChoiceSet",
                                    "placeholder": "Web",
                                    "choices": [
                                        {
                                            "title": "Web",
                                            "value": "Web"
                                        },
                                        {
                                            "title": "Partner Referral",
                                            "value": "Partner Referral"
                                        },
                                        {
                                            "title": "Phone Inquiry",
                                            "value": "Phone Inquiry"
                                        },
                                        {
                                            "title": "TIDE 2019",
                                            "value": "TIDE 2019"
                                        },
                                        {
                                            "title": "Other",
                                            "value": "Other"
                                        }
                                    ],
                                    "id": "leadSource"
                                },
                                {
                                    "type": "ColumnSet",
                                    "columns": [
                                        {
                                            "type": "Column",
                                            "width": "stretch",
                                            "items": [
                                                {
                                                    "type": "ActionSet",
                                                    "actions": [
                                                        {
                                                            "type": "Action.Submit",
                                                            "title": `${actionList[0]}`,
                                                            "data": {
                                                                "action": `${actionList[0]}`
                                                            }
                                                        },
                                                        {
                                                            "type": "Action.Submit",
                                                            "title": `${actionList[1]}`,
                                                            "data": {
                                                                "action": `${actionList[1]}`
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
                    ]
                }
            ]
        })
        return card;
    } catch (error) {
        console.error(error);
        return "error occured"
    }
}