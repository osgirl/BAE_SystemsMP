
const {app} = require('electron');
const {BrowserWindow} = require('electron');


app.on('ready', function(){
    let win = new BrowserWindow({width: 800, height: 400})
})

