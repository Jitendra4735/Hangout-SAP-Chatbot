const logos = require('../../utility/logos')

exports.headerWithAccountName = (logoToDisplay, text, accountName) => {
    var card = {
        "cards": [
            {
                "header": {
                    "title": "",
                    "subtitle": "",
                    "imageUrl": 'https://media-exp1.licdn.com/dms/image/C510BAQEj_0svnI6_0w/company-logo_200_200/0?e=2159024400&v=beta&t=l0D9P2XMuQJIw3541OCV6h9Z5TOkHMqbLRHM7LbLrqk',
                    "imageStyle": "AVATAR"
                },
                "sections": [
                    {
                        "widgets": [
                            {

                                "keyValue": {
                                    "topLabel": "",
                                    "content": `${text} [${accountName}]`
                                }
                            }
                        ]
                    }]
            }
        ]
    }
    return card;
}

exports.headerWithoutAccountName = (logoToDisplay, text) => {
    var card = {
        //"actionResponse": { "type": 'NEW_MESSAGE' },
        "cards": [
            {
                "header": {
                    "imageUrl": 'https://media-exp1.licdn.com/dms/image/C510BAQEj_0svnI6_0w/company-logo_200_200/0?e=2159024400&v=beta&t=l0D9P2XMuQJIw3541OCV6h9Z5TOkHMqbLRHM7LbLrqk',
                    "imageStyle": "AVATAR"
                },
                "sections": [
                    {
                        "widgets": [
                            {
                                "keyValue": {
                                    "topLabel": "",
                                    "content": `${text}`
                                }
                            },
                            {
                                "buttons": []
                            }
                        ]
                    }]
            }
        ]
    }
    return card;
}