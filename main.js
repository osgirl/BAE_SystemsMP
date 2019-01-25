// nodemon --watch * --exec "electron ."

const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu} = electron;
const mainMenuTemplate = require('./controllers/main-menu');
let mainWindow;

// Wait for the app to be ready
app.on('ready', ()=>{
    mainWindow = new BrowserWindow({width: 850, height: 600});

    // Load index.html content in mainWindow
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views', 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.on('closed', ()=>{
        mainWindow = null;
        app.quit();
    });

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);

});
// Quit app when the last window is closed
app.on('window-all-closed', () => {
    app.quit()
  })

// If user is on Mac, add empty object to the menu as the first menu item
if (process.platform == 'darwin'){
    mainMenuTemplate.unshift({label: ""});
}


exports.allMissionsWindow = function createAllMissionsWindow(){
    let allMissionsWindow = new BrowserWindow({parent: mainWindow, width: 550, height: 350});
    
    allMissionsWindow.loadURL(url.format({
        pathname: path.join(__dirname, "views", "all-missions.html"),
        protocol: 'file:',
        slashes: true
    }))
}