var request = require('request')

async function spendByHeadImage(data) {
    return new Promise((resolve, reject) => {
        try {
            var options = {
                'method': 'POST',
                'url': 'https://visualsmicroservice.azurewebsites.net/custom_barh',
                'headers': {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "metadata": {}, "data": data })
            };

            request(options, function (error, response) {
                if (error) {
                    console.error(error);
                    reject("error occured");

                } else {
                    resolve(response.body)
                }
            });

        } catch (error) {
            console.error(error);
            reject("error occured");
        }
    })
}
async function directIndirectImage(data) {
    return new Promise((resolve, reject) => {
        try {
            let Direct = parseInt(data.Direct)
            let Indirect = parseInt(data.InDirect)
            var options = {
                'method': 'POST',
                'url': 'https://visualsmicroservice.azurewebsites.net/direct_indirect',
                'headers': {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "metadata": {}, "data": {
                        "direct": Direct,
                        "indirect": Indirect
                    }
                })
            };

            request(options, function (error, response) {
                if (error) {
                    console.error(error);
                    reject("error occured");

                } else {
                    resolve(response.body)
                }
            });

        } catch (error) {
            console.error(error);
            reject("error occured");
        }
    })
}

async function plannedActualImage(data) {
    return new Promise((resolve, reject) => {
        try {
            let budget = []
            let actual = []
            for (let i = 0; i < data.length; i++) {
                budget.push(data[i].BUDGET);
                actual.push(data[i].ACTUAL);
            }
            var options = {
                'method': 'POST',
                'url': 'https://visualsmicroservice.azurewebsites.net/line_and_trend',
                'headers': {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "metadata": {}, "data": {
                        "budget": budget,
                        "actual": actual
                    }
                })
            };

            request(options, function (error, response) {
                if (error) {
                    console.error(error);
                    reject("error occured");

                } else {
                    resolve(response.body)
                }
            });

        } catch (error) {
            console.error(error);
            reject("error occured");
        }
    })
}

module.exports = { spendByHeadImage, directIndirectImage, plannedActualImage }
