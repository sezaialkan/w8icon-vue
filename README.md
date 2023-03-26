
## w8icon

[![NPM Version](https://img.shields.io/badge/npm-v1.0.1-blue.svg)](https://www.npmjs.com/package/w8icon-vue) 
[![CDN Js Version](https://img.shields.io/badge/cdn-v2.0.4-blue.svg)](https://www.npmjs.com/package/w8icon-vue)

## using w8icon

The svg icons presented to you with w8icon are designed on a 24x24 grid. You can customize size, color, stroke-width values ​​on svg icons.

#### cdn
```
<script src="https://cdn.jsdelivr.net/gh/w8icon/dist@v2.0.4/all.min.js"></script>
```

## w8icon vue setup

#### npm
```
npm i w8icon-vue
```

Add the w8icon package in the component you want to use after installation.

```Javascript
import w8icon from 'w8icon-vue'
```
ready to use
```Javascript
<w8icon name="#" />
```

You can call the icon you want to get by sending the value of the name props of the w8icon component.

The w8icon component can take the following values, except for the name props value.


## Parameters

| Name             | Value | Default Value |
| ----------------- | ------------------------------------------------------------------ | ---- |
| name | icon name you can visit https://www.w8icon.com/ to view all icons | empty
| color | represents the main color of the icon, fill color in fill icons, stroke value effects in line icons | currentColor |
| secondColor | represents the second color in dual color icons | currentColor |
| size  | It affects the height and width of the icon. |  100px
|strokeWidth | Icons with a stroke value affect the frame thickness. It can be used in line, dash, duo icons. | 1 |