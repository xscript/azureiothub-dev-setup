var Registry = require('azure-iothub').Registry;
var connectionString = process.env.AzureIoTHubConnectionString;

module.exports = function (context, input) {
  var registry = Registry.fromConnectionString(connectionString);
  registry.list(function (err, list) {
    if (err) {
        context.log(err)
    } else {
      list.forEach(function (device) {
        context.log(device.deviceId + '\t' + device.status);
      });
    }
  });
};