const request = require('request');
const customerData = require('../database/customerProfile/CustomerData')
const titleList = require('../../utility/config').userProfileGraphTitle
const errorMessage = require('../../utility/config').errorMessage
module.exports.generateProfileImage = (dataForImage) => {
    return new Promise(async (resolve, reject) => {
        try {
            let images = [];
            let change = [-15, -12];
            var keys = Object.keys(dataForImage[0])
            for (let i = 0; i < keys.length; i++) {
                var options = {
                    'method': 'POST',
                    'url': 'https://visualsmicroservice.azurewebsites.net/trendtile',
                    'headers': {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "metadata": { "X": "XLabel", "Y": "YLabel" },
                        "data": {
                            "title": titleList[i], "measure": dataForImage[0][keys[i]],
                            "change": change[i], "changeUnit": "%"
                        }
                    })
                };

                request(options, function (error, response) {
                    if (error) {
                        console.error(error);
                        if (images.length === 2) {
                            resolve(images);
                        }
                    } else {
                        images.push(response.body)
                        if (images.length === 2) {
                            resolve(images);
                        }
                    }
                });
            }

        } catch (error) {
            console.error(error);
            reject(errorMessage)
        }

    })
}