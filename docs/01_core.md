# Core Plugin
This Plugin will automatically register all toolbox extensions:

## Enable Plugin

```js
import 'jquery-pimcore-toolbox/dist/jquery.tb.core';
import 'jquery-pimcore-toolbox/dist/jquery.tb.ext.google-maps';
import 'jquery-pimcore-toolbox/dist/jquery.tb.ext.googleOptOutLink';
import 'jquery-pimcore-toolbox/dist/jquery.tb.ext.iframe';
import 'jquery-pimcore-toolbox/dist/jquery.tb.ext.video';
```

```javascript
document.addEventListener('DOMContentLoaded', () => {
   $.toolboxCore({});
});
```

## Extended Usage
```javascript
document.addEventListener('DOMContentLoaded', () => {
   $.toolboxCore({
       editmode: false,
       theme: 'bootstrap4',
       googleMapsHandler: {
           enabled: true,
           selector: '.toolbox-googlemap',
           config: {
                centerMapOnResize: true
           }
       },
       videoHandler: {
           enabled: true,
           config: {
               videoIdExtractor: {
                   custom: function (videoId) {
                       console.log(videoId);
                       return videoId;
                   }
               },
               apiParameter: {
                   youtube: {
                       rel: 0 //disable related videos
                   },
                   vimeo: {}
               }
           }
       },
       iframeHandler: {
           enabled: true,
           config: {
           }
       }
    });
});
```
