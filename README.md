# node-red-contrib-wemo-emulator

Why might you want to emulate Wemo?  Well I wanted to be able to control my Node-RED Raspberry Pi using my Amazon Echo. The
Echo has Wemo support built in so I thought I'd give it a try.

It's pretty cool to be able to say 'Alexa, turn my garden watering system on' and my Pi turns on the outdoor watering system.

This Node-RED node is only a slim wrapper around the marvellous [wemore](https://github.com/dhleong/wemore) Wemo library written by Daniel Leong.

### Installation

Change directory to your node red installation:

    $ npm install node-red-contrib-wemo-emulator

### Configuration

Drag the node on to your workspace, configure it as below and then ask Alexa to discover devices.


| Config  | Description                                                              |
| --------------- | ------------------------------------------------------------------------ |
| `Node Name`       | This is the name of the node as it appears in the Node-RED workspace |
| `Friendly Name`   | This is the name that you'll see in the list of devices known to Alexa, it's also the name that you use in voice commands |
| `Unique ID`   | This ID should be unique across all the wemo-emulator nodes in your workspace |
| `Port`   | Wemore can automatically select a port to listen on, but it is recommended that you enter a unique port and increment it for each wemo emulator node you add to your workspace. This ensures that the port never changes. |
| `On Topic`   | This is the topic sent when you ask Alexa to turn your thing on |
| `On Payload`   | This is the payload sent when you ask Alexa to turn your thing on |
| `Off Topic`   | This is the topic sent when you ask Alexa to turn your thing off |
| `Off Payload`   | This is the payload sent when you ask Alexa to turn your thing off |


