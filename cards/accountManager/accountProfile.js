const customerData = require('../../data/database/customerProfile/CustomerData')
const config = require('../../utility/config')
const cardHead = require('../common/header')
const logos = require('../../utility/logos')
const ServiceList=require('../common/serviceList')

exports.accountProfile = async (userPersonalProfileData, imageData,serviceList) => {
    return new Promise(async (resolve, reject) => {
        try {
            var cardToDisplay = cardHead.headerWithoutAccountName(config.logoToDisplay[0], config.cardTitle.customerProfile)
            cardToDisplay['cards'].push(
                {
                    "sections": [
                        {
                            "header": "Contact Person",
                            "widgets": [
                                {
                                    "keyValue": {
                                        "topLabel": "",
                                        "content": `${userPersonalProfileData[0].PersonName}`
                                    }
                                },
                                {
                                    "keyValue": {
                                        "topLabel": "Business",
                                        "content": `[+${userPersonalProfileData[0].TelephoneNumber.replace(/[^A-Z0-9]/g, "")}](+${userPersonalProfileData[0].TelephoneNumber.replace(/[^A-Z0-9]/g, "")})`
                                    }
                                },
                                {
                                    "keyValue": {
                                        "topLabel": "Mobile",
                                        "content": `[+${userPersonalProfileData[0].MobileNumber.replace(/[^A-Z0-9]/g, "")}](+${userPersonalProfileData[0].MobileNumber.replace(/[^A-Z0-9]/g, "")})`
                                    }
                                },
                                {
                                    "keyValue": {
                                        "topLabel": "",
                                        "content": `[${userPersonalProfileData[0].Email}](mailto:${userPersonalProfileData[0].Email})`
                                    }
                                },
                                {
                                    "keyValue": {
                                        "topLabel": "",
                                        "content": `[Office Location]('https://www.google.com/maps/place/N+Marketplace+Blvd,+Delta+Charter+Township,+MI+48917,+USA/@42.7388795,-84.6750431,17z/data=!3m1!4b1!4m5!3m4!1s0x8822be1e6eadeaf3:0xb2b6cf14f1359f4b!8m2!3d42.7388795!4d-84.6728544')`
                                    }
                                }

                            ]
                        }
                    ]
                }
            )
            resolve(ServiceList.cardtoDisplay(serviceList ,cardToDisplay))

        } catch (error) {
            console.error(error);
            reject(config.errorMessage)
        }
    })
}