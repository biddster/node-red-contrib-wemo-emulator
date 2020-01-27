# node-red-contrib-wemo-emulator

**NOTE** if you're upgrading from a version prior to 1.0.0, it is recommended that you get Alexa to forget all devices and rediscover. This is due to the fix to prevent duplicated wemo-emulator devices appearing in the Alexa app.

Why might you want to emulate Wemo? Well I wanted to be able to control my Node-RED Raspberry Pi using my Amazon Echo. The
Echo has Wemo support built in so I thought I'd give it a try.

It's pretty cool to be able to say 'Alexa, turn my garden watering system on' and my Pi turns on the outdoor watering system.

This Node-RED node is only a slim wrapper around the marvellous [wemore](https://github.com/dhleong/wemore) Wemo library written by Daniel Leong.

### Installation

Change directory to your node red installation:

    $ npm install node-red-contrib-wemo-emulator

### Configuration

Drag the node on to your workspace, configure it as below and then ask Alexa to discover devices.

| Config          | Description                                                                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Node Name`     | This is the name of the node as it appears in the Node-RED workspace                                                                                                                                                      |
| `Friendly Name` | This is the name that you'll see in the list of devices known to Alexa, it's also the name that you use in voice commands                                                                                                 |
| `Unique ID`     | This ID should be unique across all the wemo-emulator nodes in your workspace                                                                                                                                             |
| `Port`          | Wemore can automatically select a port to listen on, but it is recommended that you enter a unique port and increment it for each wemo emulator node you add to your workspace. This ensures that the port never changes. |
| `On Topic`      | This is the topic sent when you ask Alexa to turn your thing on                                                                                                                                                           |
| `On Payload`    | This is the payload sent when you ask Alexa to turn your thing on                                                                                                                                                         |
| `Off Topic`     | This is the topic sent when you ask Alexa to turn your thing off                                                                                                                                                          |
| `Off Payload`   | This is the payload sent when you ask Alexa to turn your thing off                                                                                                                                                        |

### Troubleshooting

If Alexa can't discover the devices emulated by this node, please check you don't have a firewall blocking the following ports:

-   1900/udp
-   You must also open the ports for all of the wemo emulator nodes configured

### Enabling extra debugging

Install `node-red-contrib-config` and drag a config node into your workspace. Configure the node to set a global variable called `wemo-emulator`
with a JSON value of `{"debug": true}`. Also make sure that the config tickbox for `active` is unchecked. Redeploy. Now click the button on the config node.
This will trigger all instances of `wemo-emulator` to write extra logging to the os syslog next time they're invoked.

### Experimental

The node-red `msg` object now contains a sender object which attempts to identify the echo which was spoken to. This is still under scrutiny and may or may not work for you.
