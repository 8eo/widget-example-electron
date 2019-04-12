# ![](horn-logo.png) Horn's Widget Electron Example

Example of how how Horn Widget can be used with Electron apps.

After cloning, install dependencies:

```bash
npm install
```

Then replace `__channel_id__` with some real channel identifier in [index.html](index.html#L17) file and run:

```bash
npm start
```

This should open Electron instance with widget working on it.

## Missing Features

* **ScreenSharing** - Because native ScreenSharing has been turned on
  in [Chrome 72](https://www.chromestatus.com/feature/6744724455030784) and current stable Electron v4
  uses Chrome 69, ScreenSharing is not yet available. It should be working after next major Electron
  release as they update Chromium versions only for major releases. It seems Electorn v5 
  should arrive somewhere in mid of 2019r!

Check out [Widget Generator](https://widget.horn.co) to customize look and feel of your widget!