// Initialize Firebase
var config = {
  apiKey: "AIzaSyCcPrYAUZCuky8iP9IFZt9paJUNPAlpo9A",
  authDomain: "augustins-typing-game.firebaseapp.com",
  databaseURL: "https://augustins-typing-game.firebaseio.com",
  projectId: "augustins-typing-game",
  storageBucket: "",
  messagingSenderId: "749585256588"
};

firebase.initializeApp(config);




  // Uses P5.js
var scaling = 20;
var toTypeInit = asimovQuotes[Math.floor(Math.random()*asimovQuotes.length)];
var toType = toTypeInit;
var nextChar = "0";
var hit = "not typed";
var score = 0;
var hiScore = false; // TODO: Hämta highscore från servern
var globalHiScore = 0; // TODO: Hämta highscore från servern
var globalHiScoreName = " "; // TODO: Hämta highscore från servern
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
var gameState = "intro"; // intro, game, over
var playerName = '';
var blinkingDash = "_";
var firebaseDirectory;
var allPlayers;
var ref




function preload() {
  myFont = loadFont('./assets/ponderosa.ttf');
}

function setup(){
	toTypeX = windowWidth/scaling/2;
    frameRate(30)
    createCanvas(windowWidth,windowHeight);
    
    ref = firebase.app().database().ref();
    ref.once('value')
     .then(function (snap) {
       allPlayers = snap.val()
      
    
       for (var key in allPlayers) {
        console.log(key, allPlayers[key]);
        if (allPlayers[key] > globalHiScore){
          globalHiScore = allPlayers[key]
          globalHiScoreName = key
        }
    
      }
    
     
     });
    
    

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
		text("QUOTE TYPING SIMULATOR (beta)\n\n\nENTER YOUR NAME AND PRESS ENTER\n" + playerName + blinkingDash ,windowWidth/scaling/2,windowHeight/scaling/1.7)
  }
	// run the game if gameState == game
	if (gameState == "game"){
		toTypeX -= level / 4.0 - level / 5.5;
		background(51)
		fill(255)
		noStroke()
		// loadFont(path,callback)
		textFont(myFont,2)
		textAlign(LEFT,BASELINE)
		nextChar = toType[0];
		text("NAME "+playerName+"\nSCORE "+score.toString()+"\nHISCORE "+hiScore.toString()+"\nGLOBAL HISCORE "+globalHiScore.toString()+" BY "+globalHiScoreName+"\nLEVEL "+level.toString()+"\nCOMBO "+combo,3,4);
		// toTypeX = toTypeX - toTypeXVel/100;
		// text("nextChar = "+nextChar,2,4)
		text(hit,2,windowHeight/scaling-4)
		fill(toTypeColor[0],toTypeColor[1],toTypeColor[2]);
		text(toType,toTypeX,windowHeight/scaling/2)

		// Checks if there's an active combo text
		if (boomSize[1] > 0){
			fill(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255))
			textFont(myFont,boomSize[1]/40)
			textAlign(CENTER,CENTER)
			text(boomSize[0].toString()+" COMBO",windowWidth/scaling/2,windowHeight/scaling/2)
			boomSize[1]-=boomSize[1]/10+0.2;
		}

		// Generate new quote if current is empty
		if (toType < 1){
			toTypeInit = asimovQuotes[Math.floor(Math.random()*asimovQuotes.length)];
			toType = toTypeInit;

		}

		// next level???
		if (levelCount > 10*level*1.5+level*10){
			level++
			levelCount = 0
		}

		// make text color more white
		for (var i = 0; i < toTypeColor.length; i++) {
			if (toTypeColor[i] < 245) {
				toTypeColor[i]+=10
			}
		}

		// time for game over?
		if (toTypeX <= 0){
			gameState = "over"
		}
	}

	// is it game over???

	if (gameState == "over") {
		background(51)
		level = 0;
		toTypeX = windowWidth/scaling/2;
		textAlign(CENTER,CENTER)
		textFont(myFont,windowWidth/300)
		fill(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255))
		text("CONGRATULATIONS",windowWidth/scaling/2,windowWidth/scaling/8)
		fill(255)
		textFont(myFont,windowWidth/800)
		text("YOU ARE A TYPING MASTER.\n\nSCORE "+score+"\n\nPRESS ENTER",windowWidth/scaling/2,windowWidth/scaling/3.5)

    if (score > hiScore) {
      firebaseDirectory.set(score);
      hiScore = score;
    }
    if (score > globalHiScore) {
      globalHiScore = score;
      globalHiScoreName = playerName;
    }
	}

}

function keyTyped() {
	if (key === nextChar) {
		hit = "TYPED! " + key.toString();
		toType = toType.slice(1,toType.length)
		score+=10*level*(level*0.5)
		combo++
		if (toTypeX < windowWidth/scaling/2-(level*0.7)){
			toTypeX += level*0.7
		} else {
			toTypeX = windowWidth/scaling/2
		}
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

		score+=10*level*(level*0.5)*combo
		if (combo > 30){
			boomSize = [combo,10*level*(level*0.5)*combo];
		}
		toTypeX -= level/2
		combo = 0;
		toTypeColor[0] = 255
		toTypeColor[1] = 100
		toTypeColor[2] = 100
	}
}

function keyPressed() {
  if (gameState == "over" && keyCode == ENTER) {
	  toTypeInit = asimovQuotes[Math.floor(Math.random()*asimovQuotes.length)];
	  toType = toTypeInit;
	  nextChar = "0";
	  hit = "not typed";
	  score = 0;
	  level = 1;
	  levelCount = 0;
	  combo = 0;
	  comboCount = 0;
	  boom = false;
	  boomSize = 0;
	  tempTextColor = 0;
	  lastTyped = "";
	  toTypeColor = [255,255,255];
	  gameState = "game";
  }
  // INTRO NAME ENTER

  if (gameState == "intro") {
    if (keyCode == 8) {
      playerName = playerName.slice(0, -1);      
    } else if (keyCode >= 65 && keyCode <= 90) {
      playerName+= String.fromCharCode(keyCode);
    }
  }

  if (gameState == "intro" && keyCode == ENTER) {
  
    firebaseDirectory = firebase.app().database().ref().child(playerName);
    firebaseDirectory.once("value")
      .then(function (snap) {
      hiScore = "0";      
      if(snap.val()){
        hiScore = snap.val();        
      }
      toTypeInit = asimovQuotes[Math.floor(Math.random()*asimovQuotes.length)];
      toType = toTypeInit;
      nextChar = "0";
      hit = "not typed";
      score = 0;
      level = 1;
      levelCount = 0;
      combo = 0;
      comboCount = 0;
      boom = false;
      boomSize = 0;
      tempTextColor = 0;
      lastTyped = "";
      toTypeColor = [255,255,255];
      gameState = "game";    
    });
    
    
  
  
  // if (hiScore) {
  // }
  }

}

