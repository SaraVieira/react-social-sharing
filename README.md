[![npm](https://img.shields.io/npm/v/react-social-sharing.svg)](https://www.npmjs.com/package/react-social-sharing)

# React Sharing Buttons

React Implementation of @mxstbr [sharingbuttons.io](http://sharingbuttons.io/) No Extra Javascript Imports. No Tracking. Just Links, SVG and CSS

## Basic Usage

```
yarn add react-social-sharing
```

```js
import React from 'react'
import { Twitter } from 'react-social-sharing'

export default () => <Twitter link="https://github.com" />
```

## Localization

To any button for localization of the `aria-label` you can pass a function like so:

```js
<Twitter
  link="https://github.com"
  label={serviceName => localise('share_label', { serviceName })}
/>
```

This function receives the name of the service and the return value is the `aria-label` and `title` used in the anchor.

This name is automatically filled by the package but you can override this with the name prop.

## License

react-social-sharing is available under MIT. See LICENSE for more details.

## Acknowledgements

- Thank you to [bebraw](https://github.com/bebraw) for creating [react-component-boilerplate](https://github.com/survivejs/react-component-boilerplate)
- Thank you to [mxstbr](https://github.com/mxstbr) for creating [sharingbuttons.io](https://github.com/mxstbr/sharingbuttons.io)
- Icons by [Streamline](http://streamlineicons.com/).
