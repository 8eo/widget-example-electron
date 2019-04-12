const {app, BrowserWindow} = require('electron');

app.commandLine.appendSwitch('ignore-certificate-errors', 'true'); // so it works with localhost https

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // This is required because Electron has some bug with redirects in popups that breaks out authorization flow
      nativeWindowOpen: false
    }
  }).loadFile('index.html');

  // mainWindow.webContents.openDevTools()
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});

app.on('activate', function () {
  if (mainWindow === null) createWindow()
});