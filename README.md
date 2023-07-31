# Menubar.js
Create a Menubar app with Electron

## Installation
[`npm i menubar.js`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)


## Setup
```js
const menubar = require('menubar.js');

menubar({ /* Config, passed to BrowserWindow */ }, './path/to/tray/icon', 'mode').then(menubar_app => {
// menubar_app.app - Electron app instance
// menubar_app.tray - Electron Tray instance
// menubar_app.window - Electron Window instance
// menubar_app.positioner - Electron Positioner instance
})
```
> Set mode to "detach" to detach the window from the tray icon.

## Other info
Get more in-depth help on [Discord](https://discord.gg/nzTmfZ8), or ask a question on [GitHub](https://github.com/coolstone-tech/menubar.js/discussions)

Report feedback & bugs [here](https://github.com/coolstone-tech/menubar.js/issues)

Like our work? [Support us on Patreon](https://www.patreon.com/coolstone)
