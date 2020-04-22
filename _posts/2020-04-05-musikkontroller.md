---
title: musikkontroller
date: 2020-04-05
description: OSC interactive music controller
categories:
  - Music
image: https://images.unsplash.com/photo-1518972559570-7cc1309f3229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80
author_staff_member: Rodrigo_Cortez
---

musikkontroller is an mac os app that creates a bridge between your phone and your computer to send OSC data and create simple-to-use mobile music interfaces for MaxMSP, SuperCollider etc.

![Checkmate](https://source.unsplash.com/random/1500x1000)

## Architecutre

When you open the app con your mac it promps for a PORT to rout OSC message in your localhost. It deploys a simple EXPRESS-based server to deploy the interface to your phone. Using Websockets the page on your phone communicates with a websocket server in the app and then musikkontroller routes the websocket info to OSC.

![Raspberries](https://source.unsplash.com/random/1500x1001)
