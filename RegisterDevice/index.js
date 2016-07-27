// Create a new device in the hub
var Registry = require('azure-iothub').Registry;
var connectionString = process.env.AzureIoTHubConnectionString;
var Client = require('azure-iothub').Client;

module.exports = function (context, input) {
    var registry = Registry.fromConnectionString(connectionString); 
    var client = Client.fromConnectionString(connectionString);

    var newDevice = {
        deviceId: input,
        status: 'enabled'
    };
    registry.create(newDevice, function (err, device) {
        if (err){
            context.log(err);  
        } else {
            var result = {
                Device: {
                    DeviceId: device.deviceId,
                    SharedAccessKey: device.authentication.SymmetricKey.primaryKey
                },
                IotHub: {
                    HostName: client._transport._config.host 
                }
            };
            context.log();
            // Print out the resulting configuration for the newly created device.
            context.log(JSON.stringify(result, null, 2));
            context.log();
        }
    });
    context.done();
};