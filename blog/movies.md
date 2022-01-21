---
title: Restaurar y colorear películas con IA
excerpt: >-
  Restauración y coloración de Cine de Oro Mexicano con Redes Neuronales. Caso de estudio de El Brazo Fuerte
date: '2018-01-09'
thumb_image: https://i.ytimg.com/vi/e7DWYhHvsY8/maxresdefault.jpg
thumb_image_alt: A handheld game console on a yellow background
image: https://i.ytimg.com/vi/e7DWYhHvsY8/maxresdefault.jpg
image_alt: A handheld game console on a yellow background
seo:
  title: Restaurar y colorear películas con IA
  description: Restauración y coloración de Cine de Oro Mexicano con Redes Neuronales. Caso de estudio de El Brazo Fuerte
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: What are some of the best designed video games
      keyName: property
    - name: 'og:description'
      value: Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer
      keyName: property
    - name: 'og:image'
      value: images/6.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: What are some of the best designed video games
    - name: 'twitter:description'
      value: Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer
    - name: 'twitter:image'
      value: images/6.jpg
      relativeUrl: true
layout: post
---

<style>
  iframe{
    padding-top:2vh;
    padding-bottom:3vh;
  }
</style>
En años recientes se han publicado distintas arquitecturas de redes neuronales que nos posibilitan escalar, interpolar o colorarear *frames* de un video. A continuación se presentan una serie de arquitecturas para los propósitos anteriormente mencionados y los resultados de algunos experimentos realizadas con las mismas.

* Super-scaling Residual Dense Network described in Residual Dense Network for Image Super-Resolution (Zhang et al. 2018)
* Super-scaling Residual in Residual Dense Network described in ESRGAN: Enhanced Super-Resolution Generative Adversarial Networks (Wang et al. 2018)
* DAIN (Depth-Aware video frame INterpolation) para interpolación de *frames*.
* DeOldify para coloreado de *frames*.

## El Brazo Fuerte (1958)
<br>
### Original
![Checkmate](/images/restauraria/Original.jpg)
### RDN GAN + NoiseCancelling
![Checkmate](/images/restauraria/RDN.jpg)
### RRDN GAN
![Checkmate](/images/restauraria/RRDN.jpg)

### Original
![Checkmate](/images/restauraria/ZoomOriginal.png)
### RDN GAN + NoiseCancelling
![Checkmate](/images/restauraria/ZoomRDN.jpg)
### RRDN GAN
![Checkmate](/images/restauraria/ZoomRRDN.jpg)

### RDN GAN (NoiseCancelling) + DeOldify

Una semana de procesamiento en la nube con dos NVIDIA Tesla V100.

<iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/e7DWYhHvsY8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


