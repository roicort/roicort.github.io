---
title: 'Lewitt y los algoritmos (ES)'
description: >-
  "En 1969, Sol LeWitt publicó "Declaraciones sobre el arte conceptual", en las que afirma que: "Las ideas pueden ser obras de arte" y "No es necesario que todas las ideas se hagan físicas".
pubDate: 'Jul 08 2022'
heroImage: https://sal-bucket-1.s3.amazonaws.com/wp-content/uploads/2021/01/30135426/lewitt5-1.jpg
tags:
  - Essays
---

En 1969, Sol LeWitt publicó "Declaraciones sobre el arte conceptual", en las que afirma que: "Las ideas pueden ser obras de arte" y "No es necesario que todas las ideas se hagan físicas". 

Partiendo de este concepto y con poco o nulo interés en el artista, LeWitt pretendía que su obra fuese recreada (o interpretada) múltiples veces por cualquiera que tuviera el interés. Su obra consistió entonces en una serie de instrucciones que permiten construir sus dibujos por cualquiera que la siga. De esta manera podríamos decir que por un lado LeWitt generaliza al artísta y por otro rompe con la tradición y desmitifica a la obra de arte cono un objeto sagrado y tangible. 

La obra entonces consiste en una idea (o una serie de ellas) que tiene un resultado y no el resultado en sí. Es sobre todo interesante el hecho de que el resultado de seguir esta serie de instrucciones no siempre será el misma ya que las instrucciones dependen de distintas variables que podriamos llamar aleatorias, así como a la interpretación de aquel que sigue las instrucciones.

A partir de un lenguaje de elementos básicos como puntos y lineas, LeWitt construye geometrías complejas. Para LeWitt el acto de dibujar es la base de la expresión visual y la línea el compontente fundamental del dibujo.

Todo estos conceptos, desde un lenguaje básico, una serie de instrucciones y nociones matemáticas, evocan al concepto del algoritmo dentro de las ciencias de la computación.

Un claro ejemplo es *Wall Drawing #118* cuyas instrucciones son las siguientes.

<iframe id="frame19" src="https://www.youtube-nocookie.com/embed/ky9K_-NJoPU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

* En una superficie de pared, cualquier tramo continuo de pared, con un lápiz duro, coloque cincuenta puntos al azar.  

* Los puntos deben estar distribuidos uniformemente en el área de la pared. 

* Todos los puntos deben estar conectados por líneas rectas

Qué podriamos traducir en lenguaje de programación a:

```
  for(let i = 0; i < 50; i++) {
    points.push(new Point(x,y))
  }

  for(let i = 0; i < 50; i++){
    for(let j = 0; j < 50; j++){
      line(points[i].x,points[i].y,points[j].x,points[j].y)
    }
  }
```

y como resultado final con más elementos podemos obtener el siguiente resultado.

<iframe id="frame11" src="https://openprocessing.org/sketch/1482269/embed/?plusEmbedHash=ZWVjZWYxN2NlZDRjNGMxMTJmZDI2MWMzZDFiZjMwMjIxYTBlZDBlZTBjYzBjN2U5YmNmZGIwNjhlOTBmYjNhNGMxYjI4NDJlYTVkNDUyYzIwMDYxMTM5MGFkMjk0MWI4M2FiYzVkMmVkZGE5OTU2Y2RhM2Y2OTE4OTJmMjFiYzVUQmNYRzVvdVhIQThlMzAvdUNQM3lwQmlEc0k3WnkyMkJMTTdpV014RFNud2F5ek5iN1phMlM0U0prTCtnL296VkRZWTE1c0hwTXlkR29jL3MwcXJWUT09&plusEmbedFullscreen=true" style="width:100%; height:100vh;"></iframe>

No ha de soprendernos que LeWitt puede ser considerado uno de los grandes precursores del Arte Generativo incluso cuando su obra se dió en un contexto en que la computación aún no estaba extendida a todos los ámbitos y el acceso a ella no era sencillo.