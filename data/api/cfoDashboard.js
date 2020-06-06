const request = require('request')
const cfoData = require('../database/cfo/cfoData')
const async = require('async')
module.exports.generateCFODashboard = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let images = [];
            for (let i = 0; i < data.length; i++) {
                let trend = [];
                trend.push(parseInt(`${data[i].M0}`),
                    parseInt(`${data[i].M1}`),
                    parseInt(`${data[i].M2}`),
                    parseInt(`${data[i].M3}`),
                    parseInt(`${data[i].M4}`),
                    parseInt(`${data[i].M5}`),
                    parseInt(`${data[i].M6}`),
                    parseInt(`${data[i].M7}`),
                    parseInt(`${data[i].M8}`),
                    parseInt(`${data[i].M9}`),
                    parseInt(`${data[i].M10}`),
                    parseInt(`${data[i].M11}`),
                    parseInt(`${data[i].M12}`));
                var body = JSON.stringify(
                    {
                        "metadata": { "X": "XLabel", "Y": "YLabel" },
                        "data": {
                            "title": `${data[i].KpiName}`,
                            "measure": `${data[i].currency.trim()}${data[i].KpiValue}${data[i].Percentage}`,
                            "change": `${data[i].PercentSwing}`,
                            "trend": trend,
                            "yoyComparison": `${data[i].YoyGrowth}`
                        }
                    })
                var options = {
                    'method': 'POST',
                    'url': 'https://visualsmicroservice.azurewebsites.net/trendtile2',
                    'headers': {
                        'Content-Type': 'application/json'
                    },
                    body: body
                };

                request(options, function (error, response) {
                    if (error) {
                        console.error(error);
                        if (images.length === 6) {
                            resolve(images);
                        }
                    } else {
                        images.push(response.body)
                        if (images.length === 6) {
                            resolve(images);
                        }
                    }
                });
            }
        } catch (error) {
            console.error(error);
            reject("error occured")
        }
    })
}