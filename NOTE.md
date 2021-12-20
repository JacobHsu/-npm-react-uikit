# Rollup

Rollup 是一個 JavaScript 的打包工具，目前我們常使用的 Webpack 也常拿來跟他做比較，基本上兩者皆能達到我們想要的效果，但其各自有較擅長的領域，Webpack 適合應用程式的打包，而 Rollup 則比較適合 library 的打包

`$ npm install --global rollup`

`-c`, --config：使用 `rollup.config.js` 的設定

`yarn add rollup @rollup/plugin-typescript @rollup/plugin-url -D`  
`yarn add tslib -D` (@rollup/plugin-typescript)

rollup.config.js -> dist/index.cjs.js index.esm.js
