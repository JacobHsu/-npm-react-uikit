* version : "1.0.40"

Menu.tsx Inner `{children} `

Menu載入Route的主頁

Route `<Home />` in Menu `{children}`

```js
      <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </SuspenseWithChunkError>
      </Menu>
```

* version : "1.0.14"

> Module '"npm-react-uikit"' has no exported member 'light'.
