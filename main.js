const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('ready', function () {
   mainWindow = new BrowserWindow({
       width:800,
       height: 800
   })
    mainWindow.loadURL("file://" + __dirname + "/index.html");
});