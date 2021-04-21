// Uses P5.js

// Adds zeros before number, defaults to 2 zeros
Number.prototype.pad = function(n) {
    return new Array(n).join('0').slice((n || 2) * -1) + this;
}
var myfont;
var scaling = 20;
var toTypeInit = asimovQuotes[Math.floor(Math.random()*asimovQuotes.length)];
var toType = toTypeInit;
var nextChar = "0";
var hit = "not typed";
var score = 0;
var globalScores;
var hiScore = false;
var globalHiScore = 0;
var globalHiScoreName = " ";
var level = 1;
var levelCount = 0;
var combo = 0;
var comboCount = 0;
var boom = false;
var boomSize = 0;
var tempTextColor = 0;
var lastTyped = "";
var toTypeX;
var toTypeColor = [255,255,255];
var gameState = "intro"; // intro, game, over, highscore
var backColor = [51,51,51];
var finalLevel;
var colors = [
	[51,51,51], // grey
	[29,41,82], // blue
	[30,15,40], // purple
	[40,10,10], // dark red
	[30,30,10], // yellowish
	[2,25,0], // green
	[0,0,0], // black
	[50,20,35], // pink
	[70,70,70], // lighter gray
	[60,36,0], // brown
	[0,114,91] // mint Maybe
];
var playerName = '';
var blinkingDash = "_";
var firebaseDirectory;
var allPlayers;
var sortedScores = [];
var wpmCount = 0;
var currentWpm = 0;
var avgWpm = 0;
var database;
var ref;
var isSaved = false;
var btss = 0;
var errors = [0];
var sumScore;

function preload() {
	firebase.initializeApp(config);
	database = firebase.database();
	updateScores();
  myFont = loadFont('assets/ponderosa.ttf');
}

function setup(){
    frameRate(30)
	toTypeX = windowWidth/scaling/2;
    createCanvas(windowWidth-5,windowHeight-5);
};

function draw(){
	scale(scaling)

	if (gameState == "intro"){
		background(51)
		level = 0;
		toTypeX = windowWidth/scaling/2;
		textAlign(CENTER,CENTER)
		textFont(myFont,windowWidth/250)
		fill(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255))
		text("ISAAC ASIMOV",windowWidth/scaling/2,windowHeight/scaling/3)
		fill(255)
		textFont(myFont,windowWidth/700)
		text("QUOTE TYPING SIMULATOR (beta)\n\n\nPRESS ENTER",windowWidth/scaling/2,windowHeight/scaling/1.7),
		textFont(myFont,windowWidth/scaling/100)
		fill(80)
		text("CREATED BY CHRISTIAN AUGUSTIN WITH SUPPORT BY JOEL HILME AND DANIEL SHIFFMAN",windowWidth/scaling/2,windowHeight/scaling - windowHeight/scaling/20)
	}
	// run the game if gameState == game
	if (gameState == "game"){
		toTypeX -= level / 15;
		background(backColor[0],backColor[1],backColor[2])

		// Checks if there's an active combo text and draws it
		if (boomSize[1] > 0){
			fill(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255))
			textFont(myFont,boomSize[1]/40)
			textAlign(CENTER,CENTER)
			text(boomSize[0].toString()+" COMBO",windowWidth/scaling/2,windowHeight/scaling/2-windowHeight/scaling/50)
			boomSize[1]-=boomSize[1]/10+0.7;
		}

		// draw the other text
		fill(255)
		noStroke()
		textFont(myFont,2)
		textAlign(LEFT,BASELINE)
		nextChar = toType[0];
		text("SCORE "+score.toString()+"\nLEVEL "+level.toString()+"\nCOMBO "+combo,3,4);
		text(hit,2,windowHeight/scaling-2)
		fill(toTypeColor[0],toTypeColor[1],toTypeColor[2]);
		text(toType,toTypeX,windowHeight/scaling/2)
		fill(255,120,toTypeColor[0]);
		text("_",toTypeX,(windowHeight/scaling/2)+.8)

		// Generate new quote if current is empty
		if (toType < 1){
			toTypeInit = asimovQuotes[Math.floor(Math.random()*asimovQuotes.length)];
			toType = toTypeInit;

		}

		// next level???
		if (levelCount > 10*level*1.5+level*10){
			errors.push(0);
			level++
			btss = 0;
			levelCount = 0;
			// backColor = colors[level%10]; // TODO: decide if we want to change color
		}

		// make text color more white
		for (var i = 0; i < toTypeColor.length; i++) {
			if (toTypeColor[i] <= 235) {
				toTypeColor[i]+=20
			}
		}

		// time for game over?
		if (toTypeX <= 0){
			updateScores();
			finalLevel = level;
			if (score > sortedScores[4].score && calc()) {
				gameState = "highscore"
			} else {
				gameState = "over"
			}
		}
	}

	if (gameState == "highscore") {
		if(!calc()){reset()}
		background(51)
		backColor = [51,51,51];
		textAlign(CENTER,CENTER)
		textFont(myFont,windowWidth/300)
		fill(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255))
		text("CONGRATULATIONS",windowWidth/scaling/2,windowWidth/scaling/8)
		fill(255)
		textFont(myFont,windowHeight/500);
		text("YOU ARE A TYPING MASTER.\nSCORE "+score+"\nPLEASE ENTER YOUR NAME",windowWidth/scaling/2,windowHeight/scaling/2.2)
		text(playerName.toUpperCase()+"_",
		windowWidth/scaling/2,windowHeight/scaling/1.7)
	}



	// Time for game over

	if (gameState == "over") {
		background(51)
		backColor = [51,51,51];
		level = 0;
		toTypeX = windowWidth/scaling/2;
		textAlign(CENTER,CENTER)
		textFont(myFont,windowWidth/300)
		fill(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255))
		text("CONGRATULATIONS",windowWidth/scaling/2,windowWidth/scaling/8.7)
		fill(255)
		textFont(myFont,windowHeight/500);
		text("YOU ARE A TYPING MASTER.\nSCORE "+score+"\nPRESS ENTER",windowWidth/scaling/2,windowHeight/scaling/2.2)
		text("  NAME   SCORE   LV"+
		"\n-------------------"+
		"\n1 "+sortedScores[0].name.toUpperCase().padEnd(6," ")+" "+sortedScores[0].score.toString().padStart(7,"0")+" "+sortedScores[0].level.toString().padStart(2,"0")+
		"\n2 "+sortedScores[1].name.toUpperCase().padEnd(6," ")+" "+sortedScores[1].score.toString().padStart(7,"0")+" "+sortedScores[1].level.toString().padStart(2,"0")+
		"\n3 "+sortedScores[2].name.toUpperCase().padEnd(6," ")+" "+sortedScores[2].score.toString().padStart(7,"0")+" "+sortedScores[2].level.toString().padStart(2,"0")+
		"\n4 "+sortedScores[3].name.toUpperCase().padEnd(6," ")+" "+sortedScores[3].score.toString().padStart(7,"0")+" "+sortedScores[3].level.toString().padStart(2,"0")+
		"\n5 "+sortedScores[4].name.toUpperCase().padEnd(6," ")+" "+sortedScores[4].score.toString().padStart(7,"0")+" "+sortedScores[4].level.toString().padStart(2,"0"),
		windowWidth/scaling/2,windowHeight/scaling/1.3)
	}
}



function keyTyped() {
	if (gameState === "game"){
		if (key === nextChar) {
			hit = "TYPED! " + key.toString();
			toType = toType.slice(1,toType.length)
			score+=10*level*(level*0.5)
			combo++
			if (toTypeX < windowWidth/scaling/2 - 4 + level/6){
				toTypeX += 4 + level/6
			} else {
				toTypeX = windowWidth/scaling/2
			}
			adding(10*level*(level*0.5));
			errors[level-1]+=10*level*(level*0.5)
			levelCount++
			toTypeColor[0] = 100
			toTypeColor[1] = 255
			toTypeColor[2] = 100

		} else {
			if (toType[0].toString() == " ") {
				hit = "Not typed space"
			} else {
				hit = "Not typed " + toType[0];
			}
			errors[level-1]+=10*level*(level*0.5)*combo

			score+=10*level*(level*0.5)*combo
			if (combo > 30){
				boomSize = [combo,10*level*(level*0.5)*combo];
			}
			adding(10*level*(level*0.5)*combo)
			toTypeX -= level - level / 2;
			combo = 0;
			toTypeColor[0] = 255
			toTypeColor[1] = 0
			toTypeColor[2] = 0
		}
	}

	if (gameState === "highscore") {
		if (playerName.length < 6) {
			playerName += key.toString()
			console.log(playerName);
		}

		if (playerName.length == 6){
			playerName = playerName.substring(0, playerName.length - 1);
			playerName += key.toString();
			console.log(playerName);
		}
	}
}

function keyPressed() {
  if (gameState == "over" && keyCode == ENTER) {
	  console.log("reset");
	  reset();
  }

  if (gameState == "intro" && keyCode == ENTER) {
	  console.log("reset");
	  reset();
  }

  if (gameState == "highscore" && keyCode == ENTER) {
	console.log("save");
	saveScore();
	gameState = "over";
  }

  if (gameState === "highscore" && keyCode == BACKSPACE && playerName.length > 0){
	  playerName = playerName.substring(0, playerName.length - 1);
	  console.log(playerName);
  }
}

function reset(){
	toTypeInit = asimovQuotes[Math.floor(Math.random()*asimovQuotes.length)];
	toType = toTypeInit;
	nextChar = "0";
	hit = "not typed";
	score = 0;
	toTypeX = windowWidth/scaling/2;
	level = 1;
	levelCount = 0;
	combo = 0;
	comboCount = 0;
	boom = false;
	boomSize = 0;
	tempTextColor = 0;
	lastTyped = "";
	playerName = "";
	toTypeColor = [255,255,255];
	isSaved = false;
	btss = 0;
	errors = [0];
	gameState = "game";

}

function gotData(data){

	sortedScores = []; // reset sorted score array
	globalScores = data.val();
	for(var k in globalScores) sortedScores.push(globalScores[k]);

	// sort by value
	sortedScores.sort(function (a, b) {
	  return b.score - a.score;
	});
}

function errData(err){
	console.log("Error!");
	console.log(err);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function saveScore(){

	var submit = {
		name: playerName,
		combo: combo,
		score: score,
		level: level,
		wpm: 10,
	}

	if (isSaved === false){
		isSaved = true;
		ref.push(submit);
	}

	ref = database.ref("scores");
	ref.on("value", gotData, errData);
}


function updateScores(){
	ref = database.ref("scores");
	ref.on("value", gotData, errData);
	console.log("updated scores");
}
