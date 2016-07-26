// Create a new device in the hub
var Registry = require('azure-iothub').Registry;
var connectionString = process.env.AzureIoTHubConnectionString;
var prettyjson = require('prettyjson');

module.exports = function (context, input) {
    var registry = Registry.fromConnectionString(connectionString); 
    var newDevice = {
        deviceId: input,
        status: 'enabled'
    };
    registry.create(newDevice, function (err, device) {
        if (err){
            context.log(err);  
        } else {
            context.log(prettyjson.render(device));
        }
    });
    context.done();
};