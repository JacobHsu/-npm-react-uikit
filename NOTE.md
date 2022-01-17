# deploy

`npm run local`

比對 dist\index.cjs.js

## local deploy

`npm run local`  
`xcopy dist C:\2-ex\study\react-pancakeswap-study\node_modules\npm-react-uikit\dist`  
`xcopy dist C:\2-ex\study\pancake-frontend\node_modules\npm-react-uikit\dist`  

npm更新 專案重啟 `yarn start`

## Rollup

Rollup 是一個 JavaScript 的打包工具，目前我們常使用的 Webpack 也常拿來跟他做比較，基本上兩者皆能達到我們想要的效果，但其各自有較擅長的領域，Webpack 適合應用程式的打包，而 Rollup 則比較適合 library 的打包

`$ npm install --global rollup`

`-c`, --config：使用 `rollup.config.js` 的設定

`yarn add rollup @rollup/plugin-typescript @rollup/plugin-url -D`  
`yarn add tslib -D` (@rollup/plugin-typescript)

rollup.config.js -> dist/index.cjs.js index.esm.js

## lodash

`npm i @types/lodash lodash`  

util\getThemeValue.ts `import get from "lodash/get";`

## react-router-dom

`npm uninstall react-router-dom @types/react-router-dom`  
`npm i react-router-dom@5.3.0 @types/react-router-dom -D`  

 "react-router-dom": "^6.2.1",

widgets\Menu\components\Logo.tsx `import { Link } from "react-router-dom";`

### Styled System

Styled system 是比 styled components 更低階的套件，能夠使用在 styled components 或是 emotion 上，並基於自定義的 theme，以及搭配 styled system，讓你能夠輕鬆建立高可擴充性樣式的 component。

components\Box\Box.tsx
components\Box\types.ts

## theme DefaultTheme

C:\2-ex\study\npm-react-uikit\src\widgets\Menu\Menu.tsx

```js
// Property 'nav' does not exist on type 'DefaultTheme'
 background-color: ${({ theme }) => theme.nav.background};
```

theme\light.ts

```js
const lightTheme: DefaultTheme = {
    nav: lightNav,
```

https://github.com/JacobHsu/npm-react-uikit/wiki/styled.d.ts

src\theme\index.ts

```js
export interface PancakeTheme {
    nav: NavTheme;
}
```
