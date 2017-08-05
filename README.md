
Create new app on FB:
    Get appId and appSecret from facebook
    Go to https://developers.facebook.com/ 'Add new App' from drop down

Permissions:
    In App Review section request permission for publish_stream

facebook api:
    Initialize fb sdk on your page
        https://developers.facebook.com/docs/javascript/reference/FB.init/v2.10
    Post image using fb api:
        https://developers.facebook.com/docs/graph-api/photo-uploads




For twitter:
    Go to https://apps.twitter.com/app/new create new app.

First Image need to be uploaded and then use the reference id of image to be used in tweet post
For image upload: https://dev.twitter.com/rest/reference/post/media/upload
For tweet update: https://dev.twitter.com/rest/reference/post/statuses/update