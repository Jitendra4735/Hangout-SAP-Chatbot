module.exports.generateImage = (spendByHeads, purchaseManagerLandingLayout) => {
    var colourPalette = ["#69b3a2", "#ffc75f", "#c34a36", "#267C46", "#ffc75f", "#b39cd0"]
    var maxval = 4500000 //Math.max(spendByHeads => )
    var cardWidth = 380
    var plotAreaWidth = 210
    purchaseManagerLandingLayout["body"].push({
        "type": "ColumnSet",
        "separator": true,
        "spacing": "Default",
        "columns": [
            {
                "type": "Column",
                "items": [
                    {
                        "type": "TextBlock",
                        "text": "  ",
                        "horizontalAlignment": "Right",
                        "size": "Small",
                    }
                ]
            }
        ]
    })
    for (i = 0; i < spendByHeads.length; i++) {
        purchaseManagerLandingLayout["body"].push(
            {
                "type": "ColumnSet",
                "spacing": "None",
                "columns": [
                    {
                        "type": "Column",
                        "width": "16",
                        "spacing": "None",
                        "items": [
                            {
                                "type": "TextBlock",
                                "text": `${spendByHeads[i].name}`,
                                "horizontalAlignment": "Right",
                                "size": "Small",
                            }
                        ], "verticalContentAlignment": "Center"
                    },
                    {
                        "type": "Column",
                        "width": "1",
                        "spacing": "None",
                        "items": [
                            {
                                "type": "Image",
                                "altText": "",
                                "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=",
                                "size": "Small",
                                "width": "1px",
                                "height": "25px",
                                "spacing": "None",
                                "horizontalAlignment": "Center"
                            }
                        ]
                    },
                    {
                        "type": "Column",
                        "width": "70",
                        "items": [
                            {
                                "type": "ColumnSet",
                                "columns": [
                                    {
                                        "type": "Column",
                                        "width": "auto",
                                        "items": [
                                            {
                                                "type": "Image",
                                                "altText": "",
                                                "width": `${Math.floor(spendByHeads[i].value / maxval * plotAreaWidth)}px`,
                                                "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                                                "backgroundColor": `${colourPalette[i % 6]}`,
                                                "height": "21px",
                                                "spacing": "Small",
                                                "separator": true,
                                                "size": "Stretch"
                                            }
                                        ],
                                        "verticalContentAlignment": "Center"
                                    },
                                    {
                                        "type": "Column",
                                        "items": [
                                            {
                                                "type": "TextBlock",
                                                "text": `${(spendByHeads[i].value / 1000000).toPrecision(2)}M`,
                                                "horizontalAlignment": "Left",
                                                "size": "Small",
                                                "spacing": "Small"
                                            }
                                        ],
                                        "verticalContentAlignment": "Center",
                                        "width": "auto",
                                        "spacing": "Small",
                                        "horizontalAlignment": "Left"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        )
    }
    return purchaseManagerLandingLayout
}

module.exports.generatePipelineImage = (pipelineData, opportunityPipelineJson) => {
    var colourPalette = ["#69b3a2", "#ffc75f", "#c34a36", "#267C46", "#ffc75f", "#b39cd0"]
    var cardWidth = 380
    var plotAreaWidth = 210
    opportunityPipelineJson["body"].push({
        "type": "ColumnSet",
        "separator": true,
        "spacing": "Default",
        "columns": [
            {
                "type": "Column",
                "items": [
                    {
                        "type": "TextBlock",
                        "text": "  ",
                        "horizontalAlignment": "Right",
                        "size": "Small",
                    }
                ]
            }
        ]
    })
    var Stage = [];
    var Revenue = [];

    pipelineData.forEach((element, index) => {
        Stage.push(element.Stage)
        Revenue.push(element.Revenue)

    })
    for (var i = 0; i < Revenue.length; i++) {
        if (Revenue[i].charAt(Revenue[i].length - 1) === 'K') {
            Revenue[i] = Revenue[i].substring(1, Revenue[i].length - 1)
            Revenue[i] = parseInt(Revenue[i]) * 1000
        }
    }
    var maxval = Revenue.reduce(function (a, b) {
        return Math.max(a, b);
    });
    for (var i = 0; i < Stage.length; i++) {
        opportunityPipelineJson["body"].push(
            {
                "type": "ColumnSet",
                "spacing": "None",
                "columns": [
                    {
                        "type": "Column",
                        "width": "16",
                        "spacing": "None",
                        "items": [
                            {
                                "type": "TextBlock",
                                "text": `${Stage[i]}`,
                                "horizontalAlignment": "Right",
                                "size": "Small"
                            },
                        ],
                        "verticalContentAlignment": "Center"
                    },
                    {
                        "type": "Column",
                        "width": "1",
                        "items": [
                            {
                                "type": "Image",
                                "altText": "",
                                "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=",
                                "horizontalAlignment": "Center",
                                "size": "Small",
                                "width": "1px",
                                "height": "25px",
                                "spacing": "None",
                            }
                        ]
                    },
                    {
                        "type": "Column",
                        "width": "50",
                        "items": [
                            {
                                "type": "ColumnSet",
                                "columns": [
                                    {
                                        "type": "Column",
                                        "width": "stretch",
                                        "items": [
                                            {
                                                "type": "Image",
                                                "altText": "",
                                                "width": `${Math.floor(Revenue[i] / maxval * plotAreaWidth)}px`,
                                                "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                                                "backgroundColor": `${colourPalette[i % 6]}`,
                                                "height": "21px",
                                                "spacing": "Small",
                                                "separator": true,
                                                "size": "stretch",
                                                "horizontalAlignment": "Center",
                                            }
                                        ],
                                        "verticalContentAlignment": "Center"
                                    },
                                    {
                                        "type": "Column",
                                        "items": [
                                            {
                                                "type": "TextBlock",
                                                "text": `$${(Revenue[i] / 1000)}K`,
                                                "horizontalAlignment": "Left",
                                                "size": "Small",
                                                "spacing": "Small"
                                            }
                                        ],
                                        "verticalContentAlignment": "Center",
                                        "width": "auto",
                                        "spacing": "Small",
                                        "horizontalAlignment": "Left"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
    }
    return opportunityPipelineJson
}
