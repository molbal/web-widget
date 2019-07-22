# BotMan Web Widget

This is the Sunday IT web widget.

# Installation

## 1. Clone this repository
```$ git clone https://github.com/molbal/web-widget```

## Install dependencies
```$ npm install```

## Run development environment
```$ npm run dev```

More to follow, the rest of the documentation is not written yet.


# Build, add to Laravel

1. Run ```$ npm build``` 
2. In target project create file **resources/chatframe.blade.php**
3. From the output **build** folder copy **chat.html** contents to the newly created file.
4. Add the following line to **routes/web.php** 
```php
Route::view('/chat', "chatframe")
```
5. Copy resources to the appropriate locations (chat.js, widget.js, chat.js, jquery, if locally hosted)
