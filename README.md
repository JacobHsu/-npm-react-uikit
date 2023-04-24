# @npm-react/uikit

Pancake UIkit is a set of React components and hooks used to build pages on Pancake's apps. It also contains a theme file for dark and light mode.

[@pancakeswap/uikit](https://www.npmjs.com/package/@pancakeswap/uikit)  
[@pancakeswap-libs/uikit](https://www.npmjs.com/package/@pancakeswap-libs/uikit) 2 years ago


pancake-toolkit/packages/[pancake-uikit](https://github.com/pancakeswap/pancake-toolkit/tree/master/packages/pancake-uikit)

## Install

`yarn add @pancakeswap/uikit`

***Note**: In case you want to use the older version of the Pancake UIkit, you should install @pancakeswap-libs/uikit, instead, but we recommend using the latest version of the UIkit.*

### Theme

Before using Pancake UIkit, you need to provide the theme file to styled-component.

```js
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@pancakeswap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```js
// import { ResetCSS } from '@pancakeswap/uikit'
import { ResetCSS } from '@npm-react/uikit'
...
<ResetCSS />
```

pancake-frontend\apps\web\src\pages\[_app.tsx](https://github.com/pancakeswap/pancake-frontend/blob/develop/apps/web/src/pages/_app.tsx)

```js
import { ResetCSS } from '@pancakeswap/uikit'
<ResetCSS />
```
