---
title: Art
description: "@unknowableart"
image: ""
author_staff_member: Rodrigo_Cortez
layout: post
---

<br>

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
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
</style>

<!-- The target container for the images -->
<div id="instafeed"></div>

<!-- The Instafeed.js library (Don't use this URL in production!) -->
<script src="https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js"></script>

<!-- Configure and run instafeed -->
<script>
  var feed = new Instafeed({
    accessToken:"IGQVJXQl9uR2xaRjVrbzV3cTUydjNma0xNQlU5aEREeTJhMW9yRkNpR0VXVzJsN0pnWVJkUmNhYkpPVGZAwZAVRKOUlwdmttMXdqSDdJd0xWMzR6c0FGb0czNy10R2tPdjdLTDNWR2NTTFNHVmlueGxZANwZDZD",
    limit: 21
  });
  
  feed.run();
</script>

<br>