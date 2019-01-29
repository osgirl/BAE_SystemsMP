const url = require('url');
const path = require('path');

const electron = require('electron');
const { BrowserWindow} = electron;

const main = require('../main');
const mainWindow = main.mainWindow;


exports.allMissionsWindow = function createAllMissionsWindow(){
    let allMissionsWindow = new BrowserWindow(
        {
            parent: mainWindow, 
            width: 650, 
            height: 450,
            movable: false,
            fullscreenable: false,
            alwaysOnTop: true,
            webPreferences: {
                nodeIntegration: true,
                preload: path.join(__dirname, "preload.js"),
                contextIsolation: false
            }
        });
    
    allMissionsWindow.loadURL(url.format({
        pathname: path.join(__dirname, "../", "views", "all-missions.html"),
        protocol: 'file:',
        slashes: true
    }))
}