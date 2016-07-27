// This function is triggered each time a message is revieved in the IoTHub.  
// The message payload is persisted in an Azure Storage Table
var moment = require('moment');

module.exports = function (context, iotHubMessage) {
    context.log('Message received: ' + JSON.stringify(iotHubMessage));
    context.bindings.outputTable = iotHubMessage;
    context.bindings.outputTable.partitionKey = moment().format('YYYY_MM_DD');
    context.bindings.outputTable.rowKey = moment().format('hh:mm:ss:SS');
    context.done();
};