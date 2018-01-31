# react-detect-browser

[![npm](https://img.shields.io/npm/v/react-detect-browser.svg)](https://www.npmjs.com/package/react-detect-browser)

React component to detect the browser, built with [detect-browser](https://github.com/DamonOehlman/detect-browser).

## Installing

```bash
npm install react-detect-browser --save
```

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import DetectBrowser from 'react-detect-browser';

ReactDOM.render(
  <DetectBrowser>
    {({ browser }) =>
      browser ? (
        <div>
          <h1>Browser: {browser.name}</h1>
          <p>Version: {browser.version}</p>
          <p>OS: {browser.os}</p>
        </div>
      ) : (
        <h1>Could not identity browser</h1>
      )
    }
  </DetectBrowser>,
  document.getElementById('content')
);
```

`DetectBrowser` is the only component. It doesn't render anything itself, it just calls the children and renders that.

## License

MIT
