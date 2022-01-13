# Debug

> `Error: useHref() may be used only in the context of a <Router> component.`

> `Error: useLocation() may be used only in the context of a <Router> component.`

`npm i react-router-dom@5.3.0 @types/react-router-dom -D`  

 "react-router-dom": "^6.2.1",

 pancake-uikit react-router-dom v5  
 pancake-frontend react-router-dom v5 
 
 > Each child in a list should have a unique "key" prop.

Menu\components\PanelBody.tsx
`<MenuEntry key={entry.label}`

> Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined.

widgets\Menu\components\PanelBody.tsx

```js
{links.map((entry) => {
    const Icon =  Icons[entry.icon]; // ex: FarmIcon but not found
    const iconElement = <Icon width="24px" mr="8px" />;

 {iconElement}
```
