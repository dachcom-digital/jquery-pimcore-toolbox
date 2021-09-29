# iFrame Extension
This Extension will enable the iFrame rendering.
We can't provide any out-of-the-box solution for changing the iframe height dynamically (cross-domain policy), so you need to take care about that by yourself.

If you're using the `toolboxCore` instance, you can skip this.

## Enable Extension
```js
import 'jquery-pimcore-toolbox/dist/jquery.tb.ext.iframe';
```

## Single Call
```javascript
document.addEventListener('DOMContentLoaded', () => {
    $('.toolbox-iframe').toolboxIframe({});
});
```

## Events
There are two events available:

### Event toolbox.iframe.load

```javascript
$('.toolbox-iframe').on('toolbox.iframe.load', function(ev) {
    console.log($(this), ev);
})
```

### Event toolbox.iframe.loaded

```javascript
$('.toolbox-iframe').on('toolbox.iframe.loaded', function(ev) {
    console.log($(this), ev);
    // use the iframe-resizer plugin for example
    // @see https://github.com/davidjbradshaw/iframe-resizer
    // $(this).find('iframe').iFrameResize( [{options}] );
})
```
