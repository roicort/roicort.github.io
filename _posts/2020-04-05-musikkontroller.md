---
title: musikkcontroller
date: 2020-04-05
description: OSC interactive music controller
categories:
  - Music
image: https://images.unsplash.com/photo-1518972559570-7cc1309f3229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80
author_staff_member: Rodrigo_Cortez
---

musikkcontroller is an mac os app that creates a bridge between your phone and your computer to send OSC data and create simple-to-use mobile music interfaces for MaxMSP, SuperCollider etc.

![Checkmate](/images/screenshots/controller.png)

## Architecture

When you open the app con your mac it promps for a PORT to rout OSC message in your localhost. 

![Checkmate](/images/screenshots/init.png)

It deploys a simple EXPRESS-based server to deploy the interface to your phone. Using Websockets the page oxsn your phone communicates with a websocket bridge in musikkontroller that routes the websocket info to OSC in roder to be usable in any OSC capable app. 

A QRCODE is also used for making more simple openning the webapp on your phone. Simply scan the QRCODE and it will connect automatically.

![Checkmate](/images/screenshots/qrcode.png)

## Code

The code is available on [Github](https://github.com/roicort/musikkcontroller)