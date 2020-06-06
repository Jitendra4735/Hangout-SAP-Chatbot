exports.submitOpportunity = () =>
{var card = {
    "cards": [
        {
            "sections": [
                {
                    "widgets": [
                        {
                            "buttons": [
                                {
                                    "textButton": {
                                        "text": "<b> Submit </b>",
                                        "onClick": {
                                            "action": {
                                                "actionMethodName": `Submit`
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "buttons": [
                                {
                                    "textButton": {
                                        "text": "<b> Cancel </b>",
                                        "onClick": {
                                            "action": {
                                                "actionMethodName": `default`
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        
                    ]
                }
            ]
        }
    ]
}
return card;
}