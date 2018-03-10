const electron = require('electron')
const { app, BrowserWindow } = electron
const path = require('path')
const url = require('url')

let win

function createWindow() {

  let screenWidth = electron.screen.getPrimaryDisplay().workAreaSize.width
  let screenHeight = electron.screen.getPrimaryDisplay().workAreaSize.height

  win = new BrowserWindow({
    width: screenWidth,
    height: screenHeight,
    minWidth: 800,
    minHeight: 600,
    frame: false,
    title: 'Gifchat',
    icon: 'logo.ico'
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  //win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })

}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
