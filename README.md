# solution challenge 2023 - Chuo University Team1

## Features
|User registrations|Register user|
|:|:|
|Follow function|You could follow and followed|
|Account Authentication|Authenticate your account|
|Location Sharing|You could share your location|

## Development Environments
* language: HTML, CSS(tailwindCSS), JavaScript
* framework: React
* database: firebase
* API: Google Maps API

## How to start

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
│       ├── icon_blue.svg
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
├── tailwind.config.js

</pre>
