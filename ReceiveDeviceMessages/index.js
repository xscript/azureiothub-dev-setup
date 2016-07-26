// This function is triggered each time a message is revieved in the IoTHub.  The device Id and temperature values
// are persisted in an Azure Storage Table
var moment = require('moment');

module.exports = function (context, myEventHubTrigger) {
    context.bindings.outputTable = myEventHubTrigger;
    context.bindings.outputTable.partitionKey = myEventHubTrigger.deviceId + ':' + moment().format('YYYY_MM_DD');
    context.bindings.outputTable.rowKey = moment().format('hh:mm:ss:SS');
    context.log('Message received: ' + myEventHubTrigger.deviceId + ' ' + myEventHubTrigger.temperature);
    context.done();
};

