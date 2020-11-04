const {app, BrowserWindow} = require('electron');

const CreateWindow = () => {
    const win = new BrowserWindow({
        width : 820,
        height : 570,
        resizable: false,
        icon: "./self-awareness.png"
    });
    win.setMenu(null)
    win.loadFile("index.html");
    win.setTitle("Plagiat checker 1.0");
};

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})

app.whenReady().then(CreateWindow);