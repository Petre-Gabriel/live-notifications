### Live Notifications

A simple backend server for live features using Node.JS, Express, Socket.IO

### Why you should use this?
- Easy to maintain and read code
- Simple configuration
- Modular architecture

## Configuration
First of all, you will need Node.JS and NPM for this project. After you have installed these, you can clone the project on your PC and open it with an IDE or a Code Editor.

1. Use `npm install`
2. Open the config file name `config.js` and edit the values according to your preferences
3. Add your own logic to the models that you can find in the folder named `models`
4. Enjoy!

### Customizability
I created this project with a simple idea in mind: make it easy to maintain and upgrade in the future. So, this being said, the folder structure is easy to understand and also all the things are easy to implement.

# Wiki
Here is a list of tutorials to make implementation easier for all of you.

## Create a new route with socket events to it.
To make another route you need to make a new `.js` file in the folder named `routes` and import it into the `index.js` file where you can use the logic inside the new route by passing it as a middleware.
![](https://i.imgur.com/SKbXGJb.png)

![](https://i.imgur.com/wRjlZ4w.jpg)

The `module.exports` should look like this:

![](https://i.imgur.com/EMYFZIE.jpg)

The `router` represents the `Express.Router()` and the validEvents represents the object that is used to listen to socket events. The `validEvents` object should look something like this. The key names are used to determine if the function should run based on the event name sent by the client. So the `ready` function runs when there is an event named `ready`. 

![](https://i.imgur.com/AqWNVJI.jpg)

## Use web socket in your route.
To make use of the validEvents, you need to do some work in the `index.js` file located in the `routes` folder. But first of all, you need to make sure that you export the validEvents object.

You need to import the specific route using `require()` and add it in the `validListeners` array like so:

![](https://i.imgur.com/5oDKTOh.jpg)
![](https://i.imgur.com/hMO4WAs.jpg)