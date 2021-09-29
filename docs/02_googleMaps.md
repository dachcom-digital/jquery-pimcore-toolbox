# Google Maps Extension
This Extension will enable the google maps rendering. 
If you're using the `toolboxCore` instance, you can skip this.

## Enable Extension
```js
import 'jquery-pimcore-toolbox/dist/jquery.tb.ext.google-maps';
```

Single Call (after new elements have been dynamically added for example)
```javascript
document.addEventListener('DOMContentLoaded', () => {
    $('.toolbox-googlemap').toolboxGoogleMaps({});
});
```

## Extended Usage
```javascript
document.addEventListener('DOMContentLoaded', () => {
   $.toolboxGoogleMaps({
       centerMapOnResize: true,
       theme: 'bootstrap4'
    });
});
```

## Options
--
