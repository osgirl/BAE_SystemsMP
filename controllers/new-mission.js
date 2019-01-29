const url = require('url');
const path = require('path');

const electron = require('electron');
const { BrowserWindow} = electron;

let newMissionWindow;
const main = require('../main');

exports.createNewMissionWindow = function createNewMissionWindow(){
    newMissionWindow = new BrowserWindow(
        {
            parent: main.mainWindow, 
            width: 450, 
            height: 250,
            movable: false,
            fullscreenable: false,
            show: false,
            alwaysOnTop: true,
            webPreferences: {
                nodeIntegration: true,
                preload: path.join(__dirname, "preload.js"),
                contextIsolation: false
            }
        });

        newMissionWindow.once('ready-to-show', ()=>{
            newMissionWindow.show();
        });
    
    newMissionWindow.loadURL(url.format({
        pathname: path.join(__dirname, "../", "views", "new-mission.html"),
        protocol: 'file:',
        slashes: true
    }));

    exports.newMissionWindow = newMissionWindow;

}