# solution challenge 2023 - Chuo University Team1

## Team members
Yuto Kamezaki, Rio Kobayashi, Karin Yariwake, and Rin Kokubo

## **PinPointMe**  -- Location Sharing App

With this app, although anonymous you can see people's location.  This is for emergency such as an earthquake, people can visualize where they are gathered to find a safe place to evacuate.  We made this app focusing on the goal

## SDGs11 Sustainable cities and communities

**In particular, we focused to limit the damage caused by disasters for the sustainable the cites.**

Our app can provide people's safe living place even if it is an emergency.  Also, people in the community could gather and help each other. 
In addition, if you follow other person, you could see the person's location. 

## Features
|User registrations|Register user|
|:--|:--|
|Follow function|You could follow and followed|
|Account Authentication|Authenticate your account|
|Location Sharing|You could share your location|

## Development Environments
* language: HTML, CSS(tailwindCSS), JavaScript
* framework: React
* database: firebase
* API: Google Maps API

## How to start

### set your Google Map API Key
Generate env file in your local environment and describe the Google Map API Key.


**.env**
<pre>
REACT_APP_GOOGLE_MAP_API=××××××××××××××××××××××××××
</pre>

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Database
#### Users  
|class name|type|limitation|
|:--|:--|:--|
|name|string|not null|
|age|number|not null|
|sex|string|not null|
|laitude|number||
|longitude|number||

## Directory structure
<pre>
.
├── public
│   └── favicon.ico
│   └── index.html
│   └── logo192.png
│   └── logo512.png
│   └── manifest.json
│   └── robots.txt
├── src
│   └── conponents
│       ├── Confirm.js
│       └── CreateAccount.js
│       ├── Home.js
│       └── Map.js
│       ├── SignIn.js
│       └── Start.js
│   └── images
│       ├── app_logo.png
│       └── icon_blue.svg
│       └── icon_green.svg
│       ├── icon_me.svg
│       └── icon_pink.svg
│       ├── icon_purple.svg
│       └── icon_yellow.svg
│   └── App.css
│   └── App.js
│   └── firebase.js
│   └── index.css
│   └── index.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js

</pre>
