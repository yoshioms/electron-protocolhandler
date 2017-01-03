const path = require('path')
const { app, BrowserWindow, dialog } = require('electron')

app.setAsDefaultProtocolClient('electron-api-demos')

app.on('open-url', function(event, url) {
    dialog.showErrorBox('Welcome Back', `You arrived from: ${url}`)
})

app.on('ready', function() {
    mainWindow = new BrowserWindow({ width: 300, height: 200 });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});