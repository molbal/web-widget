import { IConfiguration } from "../typings";

export const defaultConfiguration: IConfiguration = {
    chatServer: '/botman',
    frameEndpoint: 'chat.html',
    timeFormat: 'HH:MM',
    dateTimeFormat: 'm/d/yy HH:MM',
    title: 'Chat',
    cookieValidInDays: 1,
    introMessage: '',
    placeholderText: 'Send a message...',
    displayMessageTime: true,
    sendWidgetOpenedEvent: false,
    widgetOpenedEventData: '',
    mainColor: '#f37820',
    headerTextColor: '#fff',
    bubbleBackground: '#408591',
    bubbleAvatarUrl: '',
    desktopHeight: 450,
    desktopWidth: 370,
    mobileHeight: '100%',
    mobileWidth: '300px',
    videoHeight: 160,
    aboutLink: '',
    aboutText: '',
    chatId: '',
    userId: '',
    alwaysUseFloatingButton: false,
    useEcho: false,
    echoChannel: (userId: string) => '',
    echoConfiguration: {},
    echoEventName: '.message.created',
    echoChannelType: 'private',
    headerTextFontFamily: "'Open Sans', sans-serif",
    headerTextFontWeight: 'bolder',
    headerIconBorderRadius: '50%',
    headerIconDisplayed: true,
    headerIconSize: '72px',
    pingLocation: false
};
