---
title: Art
description: "@unkwowableart"
image: None
author_staff_member: Rodrigo_Cortez
layout: post
---

<style>
#instafeed {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin: auto;
}

#instafeed a {
  display: block;
}

#instafeed img {
  display: block;
  width: 100%;
}
</style>

<script src="https://raw.githubusercontent.com/stevenschobert/instafeed.js/master/dist/instafeed.min.js"></script>

<!-- The target container for the images -->
<div id="instafeed"></div>

<!-- The Token Agent service - make sure to use your own URL here -->
<script src='https://token-guy-12098.herokuapp.com/token.js'></script>

<!-- The Instafeed.js library (Don't use this URL in production!) -->
<script src="https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js"></script>

<!-- Configure and run instafeed -->
<script>
  console.log(Instafeed)
  var feed = new Instafeed({
    accessToken:"IGQVJYc1B1bkthN0J0T3R4MEFONGhPTngtMzJPOVR3Vnl6Y2pTY2ZA4UDlYdVRlbFBUUTVqZAGZASdkdxM1BYMU9RRWdETk81QVZAnaGtuUmZABRC01dngxMkQ4eTZAUQ04zOWY1dncyT3gyekI2RkJaamp1bAZDZD"
  });
  
  feed.run();
</script>