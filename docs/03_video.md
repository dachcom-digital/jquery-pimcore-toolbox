# Video Extension
This Extension will enable the video rendering. 
If you're using the `toolboxCore` instance, you can skip this.

## Enable Extension
```js
import 'jquery-pimcore-toolbox/dist/jquery.tb.ext.video';
```

Single Call (after new elements have been dynamically added for example)

```javascript
document.addEventListener('DOMContentLoaded', () => {
    $('.toolbox-video').toolboxVideo({});
});
```

## Extended Usage
```javascript
document.addEventListener('DOMContentLoaded', () => {
   $.toolboxVideo({
       theme: 'bootstrap4',
       videoIdExtractor: {
          custom: function (videoId) {
              console.log(videoId);
              return videoId;
          }
      },
      resources: {
          youtube: 'https://www.youtube.com/iframe_api',
          vimeo: 'https://player.vimeo.com/api/player.js',
      },
      apiParameter: {
          youtube: {
              rel: 0 //disable related videos
          },
          vimeo: {}
      }
    });
});
```
### Video Extended I: Open Video in a Light Box
If you have selected the Light Box option, you need to take care about the video by yourself:

```javascript
$('.toolbox-video')
    .on('toolbox.video.youtube.lightbox', function (ev, params) {
        // implement your own openVideo() function somewhere.
        openVideo('https://youtube.com/watch?v=' + params.videoId);
    })
    .on('toolbox.video.vimeo.lightbox', function (ev, params) {
        // implement your own openVideo() function somewhere.
        openVideo('https://vimeo.com/' + params.videoId);
    });
```

### Video Extended II: Use Pimcore Assets as Video
If you're using pimcore video assets, you need to provide your own player api.
Pimcore will render a default html5 video tag in frontend.

If you want to add the autoplay function, you need to add a play and pause event:

```javascript
$('.toolbox-video[data-type="asset"]')
    .on('toolbox.video.asset.play', function (ev, params) {
        // hit the play button of your html5 video.
        // this is also the place where to trigger the play state for your custom framework (video.js for example)
        console.log($(this).find('video'))
        $(this).find('video').get(0).play();
    })
    .on('toolbox.video.asset.pause', function (ev, params) {
        // hit the pause button of your html5 video.
        $(this).find('video').get(0).pause();
    });
```

### Video Extended III: Use a custom player engine
If you have a different engine, you need to do some further work.

#### Add some markup
```twig
<div class="col-12">
    <div class="toolbox-element toolbox-video" data-type="custom">
        <div class="video-inner">
            <div class="player" data-play-in-lightbox="false" data-video-uri="Ue80bTM1vmc"></div>
        </div>
    </div>
</div>
```

#### Initialize Player
```javascript
document.addEventListener('DOMContentLoaded', () => {
   $.toolboxVideo({
       theme: 'bootstrap4',
       videoIdExtractor: {
          custom: function (videoId) {
              // parse your video id
              console.log(videoId);
              return videoId;
          }
      }
   });
});
```

### Add a Setup Listener
```
$('.toolbox-video[data-type="custom"]')
    .on('toolbox.video.custom.setup', function (ev, videoClass) {
        // setup your element
        console.log(videoClass);
    });
```
