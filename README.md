# Gapple API
A nodejs api wrapper for https://api.gapple.pw

## Installation

```bash
npm i gapple
```

## Usage

```javascript
const GappleApi = require('gapple');

GappleApi.checkStatus('f30de451a4db4d99aa71e4dea1941080').then(resp => {
    console.log(resp)
});
```