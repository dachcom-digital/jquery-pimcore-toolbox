# Google Opt-Out Link Extension
This Extension searches for google opt-out links.
By clicking on a link with the class `a.google-opt-out-link` a cookie will be stored to prevent future analytic tracking.

If you're using the `toolboxCore` instance, you can skip this.

## Enable Extension
```js
import 'jquery-pimcore-toolbox/dist/jquery.tb.ext.googleOptOutLink';
```

## Single Call
```javascript
document.addEventListener('DOMContentLoaded', () => {
    $('a.google-opt-out-link').toolboxGoogleOptOutLink({});
});
```

## Extended Usage
```javascript
document.addEventListener('DOMContentLoaded', () => {
   $('a.google-opt-out-link').toolboxGoogleOptOutLink({
       notify: function(message) {
            // implement your message style here
            console.log(message);
       }
    });
});
```
