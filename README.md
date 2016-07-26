# Azure IotHub Developer Setup 
An unofficial ARM template for deploying a developer friendly Azure IoT Hub, Azure Functions, and Azure Storage accounts for storing device data.  The Azure functions deployed in this template are as follows:
  - **RegisterDevice**: Creates a new IoT Hub device and prints the device ID and SharedAccessKey needed to authenticate as that device
  - **ListDevice**: List all device ids that are registered in the IoT Hub
  - **ReceiveDeviceMessage**: Called whenever a message is received on the IotHub.  The function stores the device message in an Azure Storage table by default
  - **SendDeviceCommand**: Sends a command to a device from Azure and prints the result
  - **GetDeviceInfo**: Gets the metadata for a device with a given device id.

### Deploy an Azure IoT Hub with Azure Functions ###

Click on the blue button below

<a href="https://azuredeploy.net/" target="_blank">
    <img src="http://azuredeploy.net/deploybutton.png"/>
</a>

**Note** The template attempts to use free tier resources by default.  You are only allowed on F1 IoTHub in your subscription, so select S1 if you already have an F1 IoTHub deployed.
