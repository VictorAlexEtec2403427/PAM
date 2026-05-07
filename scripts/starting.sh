#!/bin/sh
apk add bash
apk add shadow

addgroup Devs
adduser -g Devs -s /bin/bash vamg
addgroup vamg root

apk add curl
apk add npm
chsh -s /bin/bash
npm install -g bun
npm install -g yarn

bun install -g expo@55.0
bun install -g create-expo-app
