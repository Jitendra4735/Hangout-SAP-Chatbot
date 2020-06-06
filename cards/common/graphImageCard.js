var header = require('./header')
var graphData = require('../../data/database/common/graphData')
var imageApi = require('../../data/api/graphApi')
const config = require('../../utility/config')
var serviceListCard = require('./serviceList')
//const genImage = require('./generateSpendbyGraphImage')
exports.graphImage = (logo, cardTitle, serviceList) => {
  try {
    var card = header.headerWithoutAccountName(logo, cardTitle)
    if (cardTitle === config.purchaseManagerServiceList[0]) {
      image = 'https://www.sapanalytics.cloud/wp-content/uploads/2017/03/Bar-stacked.png'
      // var data = await graphData.getSpendByHeadData();
      // var image = await imageApi.spendByHeadImage(data);
      // return genImage.generateImage(data, card)
    }
    else if (cardTitle === config.purchaseManagerServiceList[1]) {
      image='https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2017/11/1.52-Chart-Toolbar-Size-L-1.png'
      // var data = await graphData.getDirectIndirect();
      // var image = await imageApi.directIndirectImage(data);
    }
    else if (cardTitle === config.purchaseManagerServiceList[2]) {
      image = 'https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2017/11/variation-Through-Time-v1_edit_53.png'
      // var data = await graphData.getplannedActual();
      // var image = await imageApi.plannedActualImage(data);
    }
    else if (cardTitle === config.salesManagerServiceList[2]) {
      image = 'https://help.anaplan.com/anapedia/Content/Resources/Images/DV/Charts/Funnel%20Charts/0.png'
      // var data = await graphData.getOppPipelineData();
      // var image = await imageApi.plannedActualImage(data);
      // return genImage.generatePipelineImage(data, card)
    }
    card['cards'][0]["sections"].push(
      {
        "widgets": [
          {
            "image": {
              "imageUrl": image,
              "onClick": {
                "openLink": {
                  "url": image
                }
              }
            }
          }
        ]
      }
    );
    

    return serviceListCard.cardtoDisplay(serviceList,card);
  }
  catch (error) {
    console.error(error);
    return errorMessage
  }
}