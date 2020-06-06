const config = require('./Utility/config')
const MainDialog = require('./dialogs/main/MainDialog')
const express = require('express');
const PORT = process.env.PORT || 9000;


const mainDialog = new MainDialog();


const app = express()
    .use(express.urlencoded({ extended: false }))
    .use(express.json());

app.post('/', (req, res) => {
   
    if (!config.globalvariable[`${req.body.user.email}`]) {
        config.globalvariable[`${req.body.user.email}`]={}
    }
    mainDialog.mainDialogStep2(req, res, config.globalvariable);
});

app.listen(PORT, () => {
    console.log(`Server is running in port - ${PORT}`);
});
