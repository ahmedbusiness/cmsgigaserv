const electron = require('electron');
const path = require('path');
const url = require('url');

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;
let addWindow;

app.on('ready', function () {

    mainWindow = new BrowserWindow({
        width: 1200, height: 600, frame: false, webPreferences: {
            nodeIntegration: true
        } });
    mainWindow.setMinimumSize(1200, 600);
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "svelte", "public" , 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

   
});

ipcMain.on('apptopmenu', (e, c) => {
    if (c == "close") {
        app.quit()
    } else if (c == "full") {
        if (mainWindow.isMaximized()) {
            mainWindow.unmaximize()
        } else {
            mainWindow.maximize()
        }
        
    } else if (c == "minimize") {
        mainWindow.minimize()
    }
})
