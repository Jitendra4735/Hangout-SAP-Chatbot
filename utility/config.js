module.exports.intentList = ['accountManager', 'cfoDashboard', 'greetings', 'invoices', 'opportunity', 'purchaseManager', 'purchaseOrder', 'purchaseRequisition', 'receiveables', 'salesManager', 'salesOrder']
module.exports.cardType = ['withAccount', 'withoutAccount']
module.exports.logoToDisplay = ['SAPLogo', 'Salesforce']
module.exports.createOpportunityAction = ['Submit', 'Cancel']
module.exports.errorMessage = "error occured"
module.exports.listCardAction = {
    "opportunity": "opportunityDetail",
    "sales": "salesDetail",
    "receiveables": "receiveablesDetail",
    "invoice": "invoiceDetail",
    "pr": "prDetail",
    "po": "poDetail"
}
module.exports.personaList = [{
    "nameToDisplay": "Account Manager",
    "logo": "Accountmanager"
}, {
    "nameToDisplay": "Sales Manager",
    "logo": "SalesManager"
}, {
    "nameToDisplay": "Purchase Manager",
    "logo": "Purchasemanager"
}, {
    "nameToDisplay": "CFO",
    "logo": "CFOLogo"
}]
module.exports.accountListAction = 'Customer Profile'
module.exports.stepOptionsvalue = 'action'
module.exports.cardTitle = {
    "customerList": "Please select an Account to Manage",
    "customerProfile": "Account Detail",
    "accountManagerServiceList": "Please select a service",
    "opportunityListCard": "Please select an Opportunity",
    "opportunityDetailCard": "Opportunity Detail",
    "salesListCard": "Please select a Sales Order",
    "salesDetailCard": "Sales Order Detail",
    "receiveablesListCard": "Please select a Receiveable",
    "receiveablesDetailCard": "Receivable Detail",
    "invoiceListCard": "Please select an Invoice",
    "invoiceDetailCard": "Invoice Detail",
    "prListCard": "Please select a Purchase Requisition",
    "prDetailCard": "Purchase Requisition Detail",
    "poListCard": "Please select a Purchase Order",
    "poDetailCard": "Purchase Order Detail",
    "cfoDashboard": "CFO Dashboard",
    "createOpportunity": "Create Opportunity",
    "createOpportunityAccountList": "Please select an Account to Create Opportunity"
}
module.exports.userProfileGraphTitle = ['Gross Profit', 'Total Sales']
module.exports.CFOserviceList = ['Home']
module.exports.accountManagerServiceList = ['Opportunities', 'Create Opportunity', 'Sales', 'Invoices', 'Receivables', 'Switch Account', 'Home']
module.exports.salesManagerServiceList = ['Sales Current Period', 'Target Achieved', '90 Days Pipeline', 'Team Members',
    'Sales', 'Opportunities', 'Create Opportunity', 'Home']
module.exports.purchaseManagerServiceList = [
    'Spend By Heads', 'Direct vs Indirect', 'Planned vs Actual', 'Team Members',
    'Purchase Requis.', 'Purchase Orders', 'Home']
module.exports.opportunityDetailCard = [{
    "lableValue": "Opportunity Id",
    "columnValue": "id"
},
{
    "lableValue": "Close Date",
    "columnValue": "date"
},
{
    "lableValue": "Description",
    "columnValue": "Description"
},
{
    "lableValue": "Account Name",
    "columnValue": "AccountName"
},
{
    "lableValue": "Status",
    "columnValue": "Status"
},
{
    "lableValue": "Stage",
    "columnValue": "Stage"
},
{
    "lableValue": "Amount",
    "columnValue": "Amount"
}]
module.exports.salesDetailCard = [{
    "lableValue": "Order No",
    "columnValue": "id"
},
{
    "lableValue": "Order Date",
    "columnValue": "date"
},
{
    "lableValue": "Description",
    "columnValue": "Description"
},
{
    "lableValue": "Account Name",
    "columnValue": "Account"
},
{
    "lableValue": "Status",
    "columnValue": "Status"
},
{
    "lableValue": "Delivery Date",
    "columnValue": "DeliveryDate"
},
{
    "lableValue": "Amount",
    "columnValue": "Amount"
}]
module.exports.invoiceDetailCard = [{
    "lableValue": "Invoice No",
    "columnValue": "id"
},
{
    "lableValue": "Invoice Date",
    "columnValue": "date"
},
{
    "lableValue": "Description",
    "columnValue": "Description"
},
{
    "lableValue": "Account Name",
    "columnValue": "Account"
},
{
    "lableValue": "Status",
    "columnValue": "Status"
},
{
    "lableValue": "Order No",
    "columnValue": "RefNo"
},
{
    "lableValue": "Amount",
    "columnValue": "Amount"
}]
module.exports.receiveablesDetailCard = [{
    "lableValue": "Document No",
    "columnValue": "id"
},
{
    "lableValue": "Document Date",
    "columnValue": "date"
},
{
    "lableValue": "Description",
    "columnValue": "Description"
},
{
    "lableValue": "Account Name",
    "columnValue": "Account"
},
{
    "lableValue": "Amount",
    "columnValue": "Amount"
}]
module.exports.prDetailCard = [{
    "lableValue": "PR Number",
    "columnValue": "id"
},
{
    "lableValue": "Created Date",
    "columnValue": "date"
},
{
    "lableValue": "Description",
    "columnValue": "Description"
},
{
    "lableValue": "Quantity",
    "columnValue": "Quantity"
},
{
    "lableValue": "Status",
    "columnValue": "Status"
},
{
    "lableValue": "Unit Price",
    "columnValue": "UnitPrice"
},
{
    "lableValue": "Amount",
    "columnValue": "Amount"
}]
module.exports.poDetailCard = [{
    "lableValue": "PO Number",
    "columnValue": "id"
},
{
    "lableValue": "PO Date",
    "columnValue": "date"
},
{
    "lableValue": "Description",
    "columnValue": "Description"
},
{
    "lableValue": "Quantity",
    "columnValue": "Quantity"
},
{
    "lableValue": "Status",
    "columnValue": "Status"
},
{
    "lableValue": "Unit Price",
    "columnValue": "UnitPrice"
},
{
    "lableValue": "Amount",
    "columnValue": "Amount"
}]
module.exports.salesTeamCard = [{
    "lableValue": "Sales Current Period",
    "columnValue": "CurrentPeriod"
},
{
    "lableValue": "Target",
    "columnValue": "SalesVsTarget"
},
{
    "lableValue": "Sales YTD",
    "columnValue": "SalesYtd"
},
{
    "lableValue": "90 Days Pipeline",
    "columnValue": "Pipeline"
},
{
    "lableValue": "Win Rate",
    "columnValue": "WinRate"
},
{
    "lableValue": "Avg Deal Size",
    "columnValue": "AverageDealSize"
}]
module.exports.procurmentTeamCard = [{
    "lableValue": "Compliance",
    "columnValue": "Compliance"
},
{
    "lableValue": "Spend This Month",
    "columnValue": "SpendThisMonth"
},
{
    "lableValue": "Total Spend",
    "columnValue": "TotalSpend"
},
{
    "lableValue": "Target this Month",
    "columnValue": "TargetThisMonth"
}]
module.exports.globalvariable = {}
module.exports.createOpportunityQuestion = ["None","OpportunityName","Amount","CloseDate","OpportunityStage","OpportunityType","LeadSource","StoreInDatabase"]

