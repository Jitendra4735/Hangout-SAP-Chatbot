
exports.askQuestion = (text) => {

var card ={
"cards":[
    {
        "sections": [
            {
                "widgets": [
                    {
                        "textParagraph": {
                            "text": `${text}`,
                        }
                    }
                ]
            }
        ]
    }
]
}
return card;
}