# fail-on-git-dirty

Fails if git status is dirty. 

Has many uses but especially useful for stopping deploy scripts if
uncommitted changes are detected.

## Install

Local:
```bash
npm install --save-dev fail-on-git-dirty
```

Global:
```bash
npm install -g fail-on-git-dirty
```

## Usage

Best used in `package.json` deploy scripts:
```js
{
    // ...
    "scripts": [
        // Ensure `node deploy.js` only runs if git status is clean.
        "deploy": "fail-on-git-dirty && node deploy.js"
    ]
}
```
