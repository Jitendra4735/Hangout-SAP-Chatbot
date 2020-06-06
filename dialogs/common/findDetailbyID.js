const { CardFactory, ActivityTypes, InputHints, TeamsInfo } = require('botbuilder');
const { LuisRecognizer } = require('botbuilder-ai');
const {
    Dialog,
    DialogSet,
    WaterfallDialog,
    ComponentDialog,
    DialogTurnStatus
} = require('botbuilder-dialogs');

const config = require('../../utility/config')
const detailByIdData = require('../../data/database/common/findDetailbyIdData')

const detailByIdWaterfall = 'detailByIdWaterfall';

class detailbyId extends ComponentDialog {
    constructor(userData) {
        super(detailByIdWaterfall);

        this.userData = userData
        this.addDialog(new WaterfallDialog(detailByIdWaterfall, [
            this.detailByIdWaterfallStep1.bind(this)
        ]));

        this.initialDialogId = detailByIdWaterfall
    }
    async detailByIdWaterfallStep1(step) {
        try {
            let accountDetails = await this.userData.get(step.context)
            var idTypes = await detailByIdData.detailIdfunction(accountDetails.Id);
            if(idTypes[0].idType==='None'){
                await step.context.sendActivity("Could not find any details for this Id, please try again!")
            }
            step.context.activity.value.action = idTypes[0].idType
        } catch (error) {
            console.error(error);
        }
        return await step.beginDialog('mainWaterfall', step.options)
    }
}

module.exports.detailbyId = detailbyId
module.exports.detailByIdWaterfall = detailByIdWaterfall
