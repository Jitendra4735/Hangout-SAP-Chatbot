const { CardFactory, ActivityHandler, MessageFactory } = require("botbuilder");
class DialogBot extends ActivityHandler {
    constructor(conversationState, userState, dialog) {
        super();
        if (!conversationState) throw new Error('ConversationState is required')
        if (!userState) throw new Error('UserState is required')
        if (!dialog) throw new Error('Dialog is required')

        this.conversationState = conversationState;
        this.userState = userState;
        this.dialog = dialog;
        this.dialogState = this.conversationState.createProperty('DialogState');
        this.onMessage(async (context, next) => {
            await this.dialog.run(context, this.dialogState);
            await next();
        });
        this.onMembersAdded(async (context, next) => {
            for (const idx in context.activity.membersAdded) {
                if (context.activity.membersAdded[idx].id !== context.activity.recipient.id) {
                    // await context.sendActivity(MessageFactory.list([{
                    //         "contentType": "application/vnd.microsoft.teams.card.list",
                    //         "content": {
                    //             "title": "Card title",
                    //             "items": [
                    //                 {
                    //                     "type": "file",
                    //                     "id": "https://contoso.sharepoint.com/teams/new/Shared%20Documents/Report.xlsx",
                    //                     "title": "Report",
                    //                     "subtitle": "teams > new > design",
                    //                     "tap": {
                    //                         "type": "imBack",
                    //                         "value": "editOnline https://contoso.sharepoint.com/teams/new/Shared%20Documents/Report.xlsx"
                    //                     }
                    //                 },
                    //                 {
                    //                     "type": "resultItem",
                    //                     "icon": "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Trello-128.png",
                    //                     "title": "Trello title",
                    //                     "subtitle": "A Trello subtitle",
                    //                     "tap": {
                    //                         "type": "openUrl",
                    //                         "value": "http://trello.com"
                    //                     }
                    //                 },
                    //                 {
                    //                     "type": "section",
                    //                     "title": "Manager"
                    //                 },
                    //                 {
                    //                     "type": "person",
                    //                     "id": "JohnDoe@contoso.com",
                    //                     "title": "John Doe",
                    //                     "subtitle": "Manager",
                    //                     "tap": {
                    //                         "type": "imBack",
                    //                         "value": "whois JohnDoe@contoso.com"
                    //                     }
                    //                 }
                    //             ],
                    //             "buttons": [
                    //                 {
                    //                     "type": "imBack",
                    //                     "title": "Select",
                    //                     "value": "whois"
                    //                 }
                    //             ]
                    //         }
                    //     }])
                    // )
                    
                    await context.sendActivity(`Welcome to **CRM and ERP Bot**!`)
                    await context.sendActivity("I can help you to manage your accounts, access various KPIs, Create Opportunities and much more.")
                    await context.sendActivity("To access my all capabilities, type anything and get started!")
                }
            }
            await next();
        })
    }
    async run(context) {
        await super.run(context);
        await this.conversationState.saveChanges(context, this);
        await this.userState.saveChanges(context, this);
    }
}
module.exports.DialogBot = DialogBot;