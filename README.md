Hi,

What you need to do is: 

run npm install

then npm run watch (should create dist folder)

go to extensions in brave or chrome. Turn on developer mode in top right corner.

then click load unpacked in top left corner and select the dist folder in the repo.

extension will show up as a card 

then click on Inspect views service worker which will open devtools window for background.js

There you'll see the "Unknown environment" error coming from FluenceAppService.js:85:1  

i have included browser-or-node to test the options they give ... None work, unfortunately. 

Finding out what would work is above my paygrade ;) It would be great if you can find a solution!
Please note that this is chrome extension Manifest v3, which has some major hotly debated changes since v2, but - as i understand - will become the standard. 

When you make changes in the code, the watch function will take care of the compile. You only need to click "update" in extension window and re-open the dev-tools




# Chrome Extension TypeScript Starter

![build](https://github.com/chibat/chrome-extension-typescript-starter/workflows/build/badge.svg)

Chrome Extension, TypeScript and Visual Studio Code

## Prerequisites

* [node + npm](https://nodejs.org/) (Current Version)

## Option

* [Visual Studio Code](https://code.visualstudio.com/)

## Includes the following

* TypeScript
* Webpack
* React
* Jest
* Example Code
    * Chrome Storage
    * Options Version 2
    * content script
    * count up badge number
    * background

## Project Structure

* src/typescript: TypeScript source files
* src/assets: static files
* dist: Chrome Extension directory
* dist/js: Generated JavaScript files

## Setup

```
npm install
```

## Import as Visual Studio Code project

...

## Build

```
npm run build
```

## Build in watch mode

### terminal

```
npm run watch
```

### Visual Studio Code

Run watch mode.

type `Ctrl + Shift + B`

## Load extension to chrome

Load `dist` directory

## Test
`npx jest` or `npm run test`
