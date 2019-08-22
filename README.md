# BotMan Web Widget

This is the Sunday IT web widget. Forked from [botman/web-widget](https://github.com/botman/web-widget) but heavily modified. 
This widget can be used with default Botman 2.0 installations, but best used with [molbal/sundayit-chatbot-admin](https://github.com/molbal/sundayit-chatbot-admin)

With the extended control panel functionality, this widget sends some metadata and can reecive messages back from the control panel.

# Installation

## 1. Clone this repository
```$ git clone https://github.com/sunday-ltd/web-widget```

## Install dependencies
```$ npm install```

## Run development environment
```$ npm run dev```


#### Widget
Next you need to add the widget to your website and tell it to use the chat frame URL that you just created.
Simply add the Javascript to your website and configure it using a global config object. Place the URL that you created for the chat frame in the `frameEndpoint` configuration key.


```html
<script>
var botmanWidget = {
        chatServer: 'http://127.0.0.1:8000,
        frameEndpoint: 'chat.html',
        pingLocation: "http://127.0.0.1:8000/chat-activity"
};
</script>
<script src='https://cdn.jsdelivr.net/npm/botman-web-widget@0/build/js/widget.js'></script>
```
##### All configuration options
When adding the widget to your own website, you probably want to customize the look of the widget, the title that get's displayed in the widget bar, background images etc. That's why the web widget comes with a detailed set of configuration options.

To apply these options to your widget, just declare an option called botmanWidget before loading the widget's Javascript.

The UI of the chat widget itself can simply be customized via CSS - take a look at the default CSS to see the available selectors.

| Key                      | Default                   | Description                                                                                                     |
|--------------------------|---------------------------|-----------------------------------------------------------------------------------------------------------------|
| `chatServer`             | `/botman`                 | The URL of the BotMan route / server to use.                                                                    |
| `frameEndpoint`          | `chat.html`               | The location of your chat frame URL / route.                                                                    |
| `timeFormat`             | `HH:MM`                   | Time format to use                                                                                              |
| `dateTimeFormat`         | `m/d/yy HH:MM`            | Date-Time format to use                                                                                         |
| `title`                  | `Chat`                    | The title to use in the widget.                                                                                 |
| `introMessage`           | `null`                    | This is a welcome message that every new user sees when the widget is opened for the first time.                |
| `placeholderText`        | `Send a message...`       | Input placeholder text                                                                                          |
| `displayMessageTime`     | `true`                    | Determine if message times should be shown                                                                      |
| `mainColor`              | `#f37820`                 | The main color used in the widget header.                                                                       |
| `headerTextColor`        | `#fff`                    | Color for the header  text                                                                                      |
| `bubbleAvatarUrl`        | `null`                        | The image url to use in the chat bubble.                                                                        |
| `desktopHeight`          | `450`                     | Height of the opened chat widget on desktops.                                                                   |
| `desktopWidth`           | `370`                     | Width of the opened chat widget on desktops.                                                                    |
| `mobileHeight`           | `100%`                    | Height of the opened chat widget on mobile.                                                                     |
| `mobileWidth`            | `300`                     | Width of the opened chat widget on mobile.                                                                      |
| `videoHeight`            | `160`                     | Height to use for embedded videos.                                                                              |
| `userId`                 |                           | Optional user-id that get's sent to BotMan. If no ID is given, a random id will be generated on each page-view. |
| `headerTextFontFamily`   | `'Open Sans', sans-serif` | Header text font family                                                                                         |
| `headerTextFontWeight`   | `bolder`                  | Header text font weight                                                                                         |
| `headerIconBorderRadius` | `0,5`                     | Border radius for the icon at the top                                                                           |
| `headerIconDisplayed`    | `true`                    | Should draw header icon?                                                                                        |
| `headerIconSize`         | `72px`                    | Size for the header icon (width and height)                                                                     |
| `pingLocation`           | `false`                   | Sunday admin service's ping location                                                                            |

## API functions

The web widget also comes with an API to programatically send messages from the user or chatbot. You might use this feature when the user clicks on a button on your website to instantly trigger the chatbot, without having the user to type something. Once the chat widget is initialized, you can access it's API on the botmanChatWidget object that get's exposed to the window containing the chat widget.

|   Method                          | Description                                                                   |
|-----------------------------------|-------------------------------------------------------------------------------|
| `botmanChatWidget.open()`         | Open the chat widget.                                                         |
| `botmanChatWidget.close()`        | Close the chat widget.                                                        |
| `botmanChatWidget.toggle()`       | Toggle the chat widget.                                                       |
| `botmanChatWidget.say(text)`      | Say something on behalf of the user. The given text is visible in the widget. |
| `botmanChatWidget.whisper(text)`  | Similar to say, with the difference that the text is not visible.             |
| `botmanChatWidget.sayAsBot(text)` | Say something on behalf of the chatbot. The text is visible in the widget.    |
| `botmanChatWidget.isOpen()`       | Returns whether the widget is open or not.                                    |

# Build, add to Laravel

See the chatframe repository, [here](https://github.com/sunday-ltd/chatframe)


## Credits
![](https://img.icons8.com/cotton/64/000000/cloud-user-group.png)

- [Sunday Ltd.](https://sundayit.hu/chatbots)
- [Botman](https://botman.io) / [Botman docs](https://github.com/botman/docs/blob/master/web-widget.md)
- [Icons8](https://icons8.com)
