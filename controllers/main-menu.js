const allMissions= require('../main');

// Create the menuTemplate
const mainMenuTemplate = [
    {
        label:'File',
        submenu: [
            { 
                label: 'New mission                       ',
                accelerator: process.platform == 'darwin' ? 'Command+N' : 'Ctrl+N'
            },
            { 
                label: 'Open a mission                    ',
                accelerator: process.platform == 'darwin' ? 'Command+O' : 'Ctrl+O'
            },
            {
                label: 'Save mission                      ',
                accelerator: process.platform == 'darwin' ? 'Command+S' : 'Ctrl+S'
            },
            {
                label: 'Save mission as                   ',
                accelerator: process.platform == 'darwin' ? 'Shift+Command+S' : 'Shift+Ctrl+S'
            },
            { 
                label: 'Close',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    },
    {
        label: 'View',
        submenu: [
            { 
                label: 'All Missions                      ',
                accelerator: process.platform == 'darwin' ? 'Command+A' : 'Ctrl+A',
                click(){
                    allMissions.allMissionsWindow();
                }
            },
            {
                label: 'Last Mission                      ',
                accelerator: process.platform == 'darwin' ? 'Command+L' : 'Ctrl+L'
            }
        ]
    },
    {
        label: 'Help',
        submenu: [
            {
                label: 'User Manual                       ',
                accelerator: process.platform == 'darwin' ? 'Command+U' : 'Ctrl+U'
            },
            {
                label: 'Feedback                          ',
                accelerator: process.platform == 'darwin' ? 'Command+F' : 'Ctrl+F'
            }
        ]
    }
];

module.exports = mainMenuTemplate;