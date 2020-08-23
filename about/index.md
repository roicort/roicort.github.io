---
title: About
date: Today
description: Some things I've done
image: None
author_staff_member: Rodrigo_Cortez
layout: post
---

<br>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.bundle.min.js"></script>

## Profile 
Graduate of Information Technology in Sciences from the Area of Engineering and Sciences of the UNAM, graduated from the Physical Mathematical Baccalaureate at the Marist High School, Valladolid. Interested in the sciences and the arts, but especially in their intersection.

## Skills
Advanced computer skills with knowledge in programming languages (Python, C++, Processing, Arduino) for data science and application development, Data Mining, Optimization and Artificial Intelligence.  Knowledge in Web development and Design (Adobe Suite), knowledge in electronics with the Arduino and Raspberry Pi platform, knowledge in Solfeggio and Piano. Ability to speak in a group, work and lead a team, experience in front of a group and spirit of social service.

<section> 
  <div id="timeline-content">
    <ul class="timeline">
  <li class="event" data-date="65 Million B.C.">
    <h3>Dinosaurs Roamed</h3>
    <p>Earth</p>
  </li>

  <li class="event" data-date="2015">
    <h3>Started Information Technology In Science</h3>
    <p>UNAM</p>    
  </li>

  <li class="event" data-date="2018">
    <h3>Research Internship: Coevolutionary strategies for parameter adjustment in multi-objective evolutionary algorithms.</h3>
    <p>UTFSM-UAB, Chile.</p>    
  </li>

  <li class="event"  data-date="2019">
    <h3>Finished Information Technology In Science</h3>
    <p>UNAM</p>  
  </li>
  
  <li class="event" data-date="Today">
    <h3>Who knows? </h3>
    <p>Somewhere</p>  
  </li>
  </ul>
  </div>
</section>

## Talks

* "Algorithm Opacity" - Open Data Day 2020
* "Data Mining for Information Sciences" - UASLP México 2019

## Publications 

* Co-author in *"The use of an interactive music system as an aid for exploring sound in music education in a rural area"* Revista Música (2020) [ [Paper](http://www.revistas.usp.br/revistamusica/article/view/170736/161967) ]

## Teaching

* A. Professor "Algorithmic Composition", Music And Technology, ENES Morelia UNAM 2020-1
* A. Professor "Desition Theory", Information Technology, ENES Morelia UNAM 2020-1
* A. Professor "Microcontrollers", Music And Technology, ENES Morelia UNAM 2020-1
* A. Professor "Taller Integrador II", Archivos y Gestión Documental, ENES Morelia UNAM 2020-2

## Others

* ICPC México 2019
* ACM - ICPC México 2018

## Lenguages
* Español - Native
* Français - DELF B1, UMSNH B2
* English - TOEFL 590
* 汉语 - HSK 1
* Русский (Currently Learning)

<section> 
<div class="container flex"> 
  <div class="image">
    <canvas id="myRadarChart"></canvas>
  </div>
</div>
</section> 

<script>
	var ctx = document.getElementById('myRadarChart').getContext('2d');
	var myRadarChart = new Chart(ctx, {
		type: 'radar',
		data: {
		labels: ['Español', 'Français', 'English', '汉语','Русский'],
		datasets: [{
        data: [90, 80, 75, 25,15],
			backgroundColor: '#00FFFF40',
			borderColor: 'cyan',
			label:""
		}]
	},
		options: {scale: {
        angleLines: {
            display: false
        },
        ticks: {
            suggestedMin: 50,
            suggestedMax: 100
        }
    }}
	});
	</script>

