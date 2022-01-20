---
title: Sol LeWitt
subtitle: A Generative Hommage to Sol Lewitt 
date: '2022-01-15'
thumb_image: https://images.unsplash.com/photo-1518972559570-7cc1309f3229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80
thumb_image_alt: 'White, black, and red shoe sole'
image: https://images.unsplash.com/photo-1518972559570-7cc1309f3229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80
image_alt: 'White, black, and red shoe sole'
seo:
  title: Sol LeWitt
  description: A Generative Hommage to Sol Lewitt 
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Project Title 1
      keyName: property
    - name: 'og:description'
      value: This is the project 1 description
      keyName: property
    - name: 'og:image'
      value: images/1.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Project Title 1
    - name: 'twitter:description'
      value: This is the project 1 description
    - name: 'twitter:image'
      value: images/1.jpg
      relativeUrl: true
layout: project
---

musikkcontroller is an mac os app that creates a bridge between your phone and your computer to send OSC data and create simple-to-use mobile music interfaces for MaxMSP, SuperCollider etc.

![Checkmate](/images/musikkcontroller/controller.png)

## Architecture

When you open the app con your mac it promps for a PORT to rout OSC message in your localhost. 

![Checkmate](/images/musikkcontroller/init.png)

It deploys a simple EXPRESS-based server to deploy the interface to your phone. Using Websockets the page oxsn your phone communicates with a websocket bridge in musikkontroller that routes the websocket info to OSC in roder to be usable in any OSC capable app. 

A QRCODE is also used for making more simple openning the webapp on your phone. Simply scan the QRCODE and it will connect automatically.

![Checkmate](/images/musikkcontroller/qrcode.png)

## Code

The code is available on [Github](https://github.com/roicort/musikkcontroller)