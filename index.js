const { app, BrowserWindow, Tray } = require('electron');
const path = require('path');
const fs = require('fs');
const electronPositioner = require('electron-positioner')

module.exports = async (config, icon, mode, showIcon) => {
await app.whenReady()
if(!icon) icon = path.join(__dirname, 'icon.png')
if(!config) config = {}
if(!config.frame && mode != 'detach') config.frame = false

const window = new BrowserWindow(config)
const tray = new Tray(fs.realpathSync(icon))
const positioner = new electronPositioner(window)

if(!showIcon){
window.hide()
window.setSkipTaskbar(true)
app.dock.hide()
}

tray.on('click', () => {
window.isVisible() ? window.hide() : window.show()
})


if(mode != 'detach') {
positioner.move(process.platform == 'darwin' ? 'topCenter' : 'trayBottomCenter', tray.getBounds())
}

return {
window, tray, app, positioner
}
}