---
title: Unsquare composition
description: Please do not expect perfect results
heroImage: ../../assets/art/unsquare/N0.png
pubDate: 2022-01-14
updatedDate: 2022-01-14
---

One of the virtues of computational art is that it allows the creation of incredibly precise works, with measurements in which all the strokes coincide perfectly and the margin of error is minimal. However, this medium also allows the creation of random and imperfect works in which there is freedom to make mistakes.

#### Unsquare composition #0
![Tux, the Linux mascot](../../assets/art/unsquare/N0.png)

Inspired by Jazz, *Unsquare composition* I experiments with the notion of non-squared rhythmic forms, where freedom and improvisation take as a premise the idea of an imperfection where we can also find harmony. Please do not expect perfect results.

<iframe src="https://embed.music.apple.com/us/album/unsquare-dance/157422527?i=157422726&amp;app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=light" height="175px" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *; clipboard-write" style="width: 100%; overflow: hidden; border-radius: 10px; background-color: transparent; padding-bottom: 2rem;"></iframe>

#### Color palettes

<div id="p5-target"></div>

#### Technique

*Unsquare composition* was made with ❤️ and p5.js

#### Curations and MarketPlace

*Unsquare composition* has been featured in some curations such as:

  * [Code In Technicolor](https://deca.art/spirouzi/technicolor) by @spirouzi 
  * [Grails](https://deca.art/charliesurf/grails) by @charliesurf 

And here're some of my favourite editions:

[![#121](../../assets/art/unsquare/N121.png)](https://www.fxhash.xyz/gentk/636351)  
**#121**

[![#10](../../assets/art/unsquare/N10.png)](https://www.fxhash.xyz/gentk/635151)  
**#10**

[![#1](../../assets/art/unsquare/N1.png)](https://www.fxhash.xyz/gentk/635141)  
**#1**

[![#60](../../assets/art/unsquare/N60.png)](https://www.fxhash.xyz/gentk/635260)  
**#60**

[![#132](../../assets/art/unsquare/N132.png)](https://www.fxhash.xyz/gentk/637677)  
**#132**

[![#145](../../assets/art/unsquare/N145.png)](https://www.fxhash.xyz/gentk/637810)  
**#145**

# [Unsquare composition on FxHash](https://www.fxhash.xyz/generative/11568)

<script>

const Palettes  = [
	"264653-2a9d8f-e9c46a-e76f51",
	"0d3b66-f0c62d-ee964b-f95738",
	"355070-6d597a-b56576-e56b6f-eaac8b",
	"8ecae6-219ebc-023047-ffb703-fb8500",
	"233d4d-fe7f2d-fcca46-a1c181-619b8a",
	"2b2d42-8d99ae-2EC4B6-ef233c-f8961e"
	]

const names = ["Kindergarten", "Cerro Alegre", "Mûre Sauvage", "Lake Sunset", "Loma Bonita", "Broken Heart"]
const padding = 20

//var canvas = createCanvas(windowWidth, windowHeight);
//canvas.parent('p5-target');

var CANVAS;

function createCols(p){
	let colArr = p.split("-");
	for(let i = 0; i < colArr.length; i++)colArr[i] = "#" + colArr[i];
	return colArr;
}

function setup(){
L = min(windowWidth, windowHeight)	
CANVAS = createCanvas(L, L);
CANVAS.parent('p5-target');
pixelDensity(4);
textFont('Helvetica Neue');
rectMode(CENTER);
background(255);
fill(0);
noStroke();
Colors = Palettes.map(function(palette){return createCols(palette)})
noLoop()
}

function draw() {
background(255)
let m = Colors.length
let n = max(Colors.map(function(element){return element.length}))
let padW = width*(padding/250)       //PaddingX
let padH = height*(padding/250)      //PaddingY
let w = (width-(padW*2)) / n;
let h = (height-(padH*2)) / m;
let mW = w*(padding/100)             //MarginX
let mH = h*(padding/100)             //MarginY
for (let i = 0; i < n; i++) {
	let x = padW + i * w + w / 2;
	for (let j = 0; j < m; j++) {
		let y = padH + j * h + h / 2;
		let c = Colors[j][i]
		//getfig(x,y,w-mW*2,h-mH*2, c);
		getfig(x,y,w-mW*2,w-mW*2, c);
		if(i == 0){
		push()
		translate(x,y)
		fill(255/2)
		textAlign(CENTER, CENTER);
		textSize(w/9);
		text(names[j], 0, -(h-mH*2)*.7);
		pop()
		}
	}
}
}

function getfig(x,y,w,h,c="#ffffff"){
push()
translate(x,y)
fill(c)
rect(0, 0, w, h);
fill(255)
textAlign(CENTER, CENTER);
textSize(w/8);
text(c.toLowerCase(), 0, 0);
pop()
}

/*
function windowResized() {
	L = min(windowWidth, windowHeight)	
	CANVAS = createCanvas(L, L);
	CANVAS.parent('p5-target');
}*/

</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.js"></script>
