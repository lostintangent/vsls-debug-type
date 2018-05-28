# Visual Studio Live Share Debug Type

This library provides a reliable way of retrieving the `type` of the active VS Code debug session, even when the end-user is using Visual Studio Live Share.

## Getting Started

1. Install this module into your VS Code debug adapter extension by running the following command `npm install -s vsls-debug-type`

2. Import the `vsls-debug-type` module, which returns a function for retrieving the debug session `type`

3. Call this method anytime you need to retrieve the `type` for a `DebugSession` instance (e.g. within a handler for the `vscode.debug.onDidStartDebugSession` event)

```javascript
// #1) Import this module
const vslsDebugType = require("vsls-debug-type");

vscode.debug.onDidStartDebugSession(session => {
    const type = await vslsDebugType(session);

    // Perform your custom logic
});
```

## API Reference

The `vsls-debug-type` module returns a single function, which accepts a VS Code `DebugSession` instance, and returns a `Promise<string>` that resolves to the type (e.g. `dart`, `node`, `cpp`) of the debug adapter that is associated with the specified `DebugSession`.