var Registry = require('azure-iothub').Registry;
var connectionString = process.env.AzureIoTHubConnectionString;
var prettyjson = require('prettyjson');

module.exports = function (context, input) {
  var registry = Registry.fromConnectionString(connectionString);
  registry.list(function (err, list) {
    if (err) {
        context.log(err)
    } else {
        // context.log(prettyjson.render(list));
        context.log('Device ID\tShared Access Key\tStatus')
      list.forEach(function (device) {
        context.log(device.deviceId + '\t' + device.authentication.SymmetricKey.primaryKey + '\t' + device.status);
      });
    }
  });
};