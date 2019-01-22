
// Require the app object from electron
const {app} = require('electron');

//Require the browser window object. 
const {BrowserWindow} = require('electron');

// Wait for the app to be ready
app.on('ready', ()=>{
    let win = new BrowserWindow({width: 800, height: 400});
    win.on('closed', ()=>{
        win = null;
    });

});

