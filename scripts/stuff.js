var config = {
  apiKey: "AIzaSyDcqLbUlyDwaO9cxK-JKdFs2eRt8Gg_bh8",
  authDomain: "isaac-ed680.firebaseapp.com",
  databaseURL: "https://isaac-ed680.firebaseio.com",
  projectId: "isaac-ed680",
  storageBucket: "isaac-ed680.appspot.com",
  messagingSenderId: "921198752859"
};

function adding(val){
	btss+=val
}

// var stars = [];
// function Star(x,y,z){
// 	this.x = random(windowWidth/scaling);
// 	this.y = random(windowHeight/scaling)
// 	this.z = z;
//
// 	this.update = function {
// 		this.x -= this.z;
// 	}
//
// 	this.draw = function {
//
// 	}
//
// }

// function Particle(x,y){
//     this.pos = createVector(x,y);
//     this.vel = createVector(0,0);
//     this.acc = createVector(0,0);
//
//     this.applyForce = function(force){
//         acc.add(force);
//     }
//
//     this.update = function() {
//         this.vel.add(this.acc);
//         this.pos.add(this.vel);
//     }
// }

var asimovQuotes = [
	"There is a cult of ignorance in the United States, and there has always been. The strain of anti-intellectualism has been a constant thread winding its way through our political and cultural life, nurtured by the false notion that democracy means that my ignorance is just as good as your knowledge.",
	"When stupidity is considered patriotism, it is unsafe to be intelligent.",
	"So the universe is not quite as you thought it was. You'd better rearrange your beliefs, then. Because you certainly can't rearrange the universe.",
	"The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
	"What is really amazing, and frustrating, is mankind's habit of refusing to see the obvious and inevitable until it is there, and then muttering about unforeseen catastrophes.",
	"Pierre Curie, a brilliant scientist, happened to marry a still more brilliant one - Marie, the famous Madame Curie - and is the only great scientist in history who is consistently identified as the husband of someone else.",
	"People think of education as something they can finish.",
	"People who think they know everything are a great annoyance to those of us who do.",
	"There are no nations! There is only humanity. And if we don't come to understand that right soon, there will be no nations, because there will be no humanity.",
	"Uncertainty that comes from knowledge (knowing what you don't know) is different from uncertainty coming from ignorance.",
	"Since emotions are few and reasons are many (said the robot Giscard) the behavior of a crowd can be more easily predicted than the behavior of one person.",
	"The first law of dietetics seems to be: if it tastes good, it's bad for you.",
	"To succeed, planning alone is insufficient. One must improvise as well.",
	"Self-education is, I firmly believe, the only kind of education there is.",
	"The human brain, then, is the most complicated organization of matter that we know.",
	"Isn't it sad that you can tell people that the ozone layer is being depleted, the forests are being cut down, the deserts are advancing steadily, that the greenhouse effect will raise the sea level 200 feet, that overpopulation is choking us, that pollution is killing us, that nuclear war may destroy us - and they yawn and settle back for a comfortable nap. But tell them that the Martians are landing, and they scream and run.",
	"It seems to me that God is a convenient invention of the human mind.",
	"The day you stop learning is the day you begin decaying.",
	"Writing, to me, is simply thinking through my fingers.",
	"In life, unlike chess, the game continues after checkmate.",
	'The most exciting phrase to hear in science, the one that heralds new discoveries, is not "Eureka!" but "That\'s funny..."',
	"While he lives, he must think; while he thinks, he must dream.",
	"All evil is good become cancerous.",
	"When asked for advice by beginners. Know your ending, I say, or the river of your story may finally sink into the desert sands and never reach the sea.",
	"If you have talent, you will receive some measure of success - but only if you persist.",
	"I am not a speed reader. I am a speed understander.",
	"Old men tend to forget what thought was like in their youth; they forget the quickness of the mental jump, the daring of the youthful intuition, the agility of the fresh insight. They become accustomed to the more plodding varieties of reason, and because this is more than made up by the accumulation of experience, old men think themselves wiser than the young.",
	"Every religion seems like a fantasy to outsiders, but as holy truth to those of the faith.",
	"Science is a set of rules to keep us from telling lies to each other. All scientists really have is a reputation for telling the truth.",
	"...democracy cannot survive overpopulation. Human dignity cannot survive it. Convenience and decency cannot survive it. As you put more and more people into the world, the value of life not only declines, it disappears. It doesn't matter if someone dies. The more people there are, the less one individual matters.",
	"The easiest way to solve a problem is to deny it exists.",
	"I wish that I could say I was optimistic about the human race. I love us all, but we are so stupid and shortsighted that I wonder if we can lift our eyes to the world about us long enough not to commit suicide.",
	"It has been my philosophy of life that difficulties vanish when faced boldly.",
	"He always pictured himself a libertarian, which to my way of thinking means \"I want the liberty to grow rich and you can have the liberty to starve\". It's easy to believe that no one should depend on society for help when you yourself happen not to need such help.",
	"All you have to do is take a close look at yourself and you will understand everyone else.",
	"It is not so much that I have confidence in scientists being right, but that I have so much in nonscientists being wrong.",
	"The great secret of the successful fool is that he's no fool at all.",
	"The intelligent man is never bored.",
	"I believe in evidence. I believe in observation, measurement, and reasoning, confirmed by independent observers. I'll believe anything, no matter how wild and ridiculous, if there is evidence for it. The wilder and more ridiculous something is, however, the firmer and more solid the evidence will have to be.",
	"Increasingly, our leaders must deal with dangers that threaten the entire world, where an understanding of those dangers and the possible solutions depends on a good grasp of science. The ozone layer, the greenhouse effect, acid rain, questions of diet and heredity. All require scientific literacy. Can Americans choose the proper leaders and support the proper programs if they themselves are scientifically illiterate? The whole premise of democracy is that it is safe to leave important questions to the court of public opinion - but is it safe to leave them to the court of public ignorance?",
	"There is no belief, however foolish, that will not gather its faithful adherents who will defend it to the death.",
	"Any fool can tell a crisis when it arrives. The real service to the state is to detect it in embryo.",
	"And in man is a three-pound brain which, as far as we know, is the most complex and orderly arrangement of matter in the universe.",
	"Congratulations on the new library, because it isn't just a library. It is a space ship that will take you to the farthest reaches of the Universe, a time machine that will take you to the far past and the far future, a teacher that knows more than any human being, a friend that will amuse you and console you - and most of all, a gateway, to a better and happier and more useful life.",
	"Violence is the last refuge of the incompetent.",
	"Robots will neither be common nor very good in 2014, but they will be in existence.",
	"Self-education is, I firmly believe, the only kind of education there is. The only function of a school is to make self-education easier; failing that, it does nothing.",
	"And above all things, never think that you're not good enough yourself. A man should never think that. My belief is that in life people will take you at your own reckoning.",
	"...you just can't differentiate between a robot and the very best of humans.",
	"It is the obvious which is so difficult to see most of the time. People say \"It's as plain as the nose on your face.\" But how much of the nose on your face can you see, unless someone holds a mirror up to you?",
	"To make discoveries, you have to be curious about why the universe is the way it is.",
	"You don't need to predict the future. Just choose a future - a good future, a useful future - and make the kind of prediction that will alter human emotions and reactions in such a way that the future you predicted will be brought about. Better to make a good future than predict a bad one.",
	"The greatest weapons in the conquest of knowledge are an understanding mind and the inexorable curiosity that drives it on.",
	"If my doctor told me I had only six minutes to live, I wouldn't brood. I'd type a little faster.",
	"Knowledge is indivisible. When people grow wise in one direction, they are sure to make it easier for themselves to grow wise in other directions as well. On the other hand, when they split up knowledge, concentrate on their own field, and scorn and ignore other fields, they grow less wise-even in their own field.",
	"Properly read, the Bible is the most potent force for atheism ever conceived.",
	"It is the writer who might catch the imagination of young people, and plant a seed that will flower and come to fruition.",
	"Maybe happiness is this: not feeling like you should be elsewhere, doing something else, being someone else.",
	"The true delight is in the finding out rather than in the knowing.",
	"If knowledge can create problems, it is not through ignorance that we can solve them.",
	"There is a single light of science, and to brighten it anywhere is to brighten it everywhere.",
	"There are no happy endings in history, only crisis points that pass.",
	"Imagine the people who believe such things and who are not ashamed to ignore, totally, all the patient findings of thinking minds through all the centuries since the Bible was written. And it is these ignorant people, the most uneducated, the most unimaginative, the most unthinking among us, who would make themselves the guides and leaders of us all; who would force their feeble and childish beliefs on us; who would invade our schools and libraries and homes. I personally resent it bitterly.",
	"I don't believe in an afterlife, so I don't have to spend my whole life fearing hell, or fearing heaven even more. For whatever the tortures of hell, I think the boredom of heaven would be even worse.",
	"My feeling is, quite simply, that if there is a God, He has done such a bad job that he isn't worth discussing.",
	"It's the writing that teaches you.",
	"If I were not an atheist, I would believe in a God who would choose to save people on the basis of the totality of their lives and not the pattern of their words. I think he would prefer an honest and righteous atheist to a TV preacher whose every word is God, God, God and whose every deed is foul, foul, foul.",
	"There is an art to science, and a science in art; the two are not enemies, but different aspects of the whole.",
	"Anything you make forbidden gains sexual attractiveness. Would you be particularly interested in women's breasts if you lived in a society in which they were displayed at all times?",
	"I have never, in all my life, not for one moment, been tempted toward religion of any kind. The fact is that I feel no spiritual void. I have my philosophy of life, which does not include any aspect of the supernatural and which I find totally satisfying. I am, in short, a rationalist and believe only that which reason tells me is so.",
	"Jokes of the proper kind, properly told, can do more to enlighten questions of politics, philosophy, and literature than any number of dull arguments.",
	"The closer to the truth, the better the lie, and the truth itself, when it can be used, is the best lie.",
	"Many a prophecy, by the mere force of its being believed, is transmuted to fact.",
	"I do not fear computers. I fear the lack of them.",
	"All the suffering that humanity ever knew can be traced to the one fact that no man in the history of the Galaxy ... could really understand one another. Every human being lived behind an impenetrable wall of choking mist within which no other but he existed.",
	"Why continue? Because we must. Because we have the call. Because it is nobler to fight for rationality without winning than to give up in the face of continued defeats. Because whatever true progress humanity makes is through the rationality of the occasional individual and because any one individual we may win for the cause may do more for humanity than a hundred thousand who hug their superstitions to their breast.",
	"There is nothing frightening about an eternal dreamless sleep. Surely it is better than eternal torment in Hell and eternal boredom in Heaven.",
	"Today's science fiction is tomorrow's science fact.",
	"There never can be a man so lost as one who is lost in the vast and intricate corridors of his own lonely mind, where none may reach and none may save.",
	"Suppose that we are wise enough to learn and know - and yet not wise enough to control our learning and knowledge, so that we use it to destroy ourselves? Even if that is so, knowledge remains better than ignorance. It is better to know - even if the knowledge endures only for the moment that comes before destruction - than to gain eternal life at the price of a dull and swinish lack of comprehension of a universe that swirls unseen before us in all its wonder. That was the choice of Achilles, and it is mine, too.",
	"In my life there have been several individuals whose presence made it easier for me to think, pleasanter to make my responses.",
	"I am not responsible for what other people think. I am responsible only for what I myself think, and I know what that is. No idea I've ever come up with has ever struck me as a divine revelation. Nothing I have ever observed leads me to think there is a God watching over me.",
	"Science is a mechanism, a way of trying to improve your knowledge of nature. It's a system for testing your thoughts against the universe, and seeing whether they match.",
	"A scientist is as weak and human as any man, but the pursuit of science may ennoble him even against his will.",
	"There is nothing so eternally adhesive as the memory of power.",
	"Science is uncertain. Theories are subject to revision; observations are open to a variety of interpretations, and scientists quarrel amongst themselves. This is disillusioning for those untrained in the scientific method, who thus turn to the rigid certainty of the Bible instead. There is something comfortable about a view that allows for no deviation and that spares you the painful necessity of having to think.",
	"Speech, originally, was the device whereby Man learned, imperfectly, to transmit the thoughts and emotions of his mind. By setting up arbitrary sounds and combinations of sounds to represent certain mental nuances, he developed a method of communication - but one which in its clumsiness and thick-thumbed inadequacy degenerated all the delicacy of the mind into gross and guttural signaling.",
	"I am an atheist, out and out. It took me a long time to say it. I've been an atheist for years and years, but somehow I felt it was intellectually unrespectable to say that one is an atheist, because it assumed knowledge that one didn't have. Somehow it was better to say one was a humanist or agnostic. I don't have the evidence to prove that God doesn't exist, but I so strongly suspect that he doesn't that I don't want to waste my time.",
	"John Dalton's records, carefully preserved for a century, were destroyed during the World War II bombing of Manchester. It is not only the living who are killed in war.",
	"I prefer rationalism to atheism. The question of God and other objects-of-faith are outside reason and play no part in rationalism, thus you don't have to waste your time in either attacking or defending.",
	"You show me someone who can't understand people and I'll show you someone who has built up a false image of himself.",
	"Man's greatest asset is the unsettled mind.",
	"Intelligence is an extremely subtle concept. It's a kind of understanding that flourishes if it's combined with a good memory, but exists anyway even in the absence of good memory. It's the ability to draw consequences from causes, to make correct inferences, to foresee what might be the result, to work out logical problems, to be reasonable, rational, to have the ability to understand the solution from perhaps insufficient information. You know when a person is intelligent, but you can be easily fooled if you are not yourself intelligent.",
	"It is no defense of superstition and pseudoscience to say that it brings solace and comfort to people ... If solace and comfort are how we judge the worth of something, then consider that tobacco brings solace and comfort to smokers; alcohol brings it to drinkers; drugs of all kinds bring it to addicts; the fall of cards and the run of horses bring it to gamblers; cruelty and violence bring it to sociopaths. Judge by solace and comfort only and there is no behavior we ought to interfere with.",
	"The age of the pulp magazine was the last in which youngsters, to get their primitive material, were forced to be literate.",
	"Every period of human development has had its own particular type of human conflict - its own variety of problem that, apparently, could be settled only by force. And each time, frustratingly enough, force never really settled the problem. Instead, it persisted through a series of conflicts, then vanished of itself - what's the expression - ah, yes, \"not with a bang, but a whimper,\" as the economic and social environment changed. And then, new problems, and a new series of wars.",
	"The soft bonds of love are indifferent to life and death. They hold through time so that yesterday's love is part of today's and the confidence in tomorrow's love is also part of today's. And when one dies, the memory lives in the other, and is warm and breathing. And when both die - I almost believe, rationalist though I am - that somewhere it remains, indestructible and eternal, enriching all of the universe by the mere fact that once it existed.",
	"No one suggests that writing about science will turn the entire world into a model of judgment and creative thought. It will be enough if they spread the knowledge as widely as possible.",
	"The Three Laws of Robotics: 1: A robot may not injure a human being or, through inaction, allow a human being to come to harm; 2: A robot must obey the orders given it by human beings except where such orders would conflict with the First Law; 3: A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.",
	"If a conclusion is not poetically balanced, it cannot be scientifically true.",
	"Never let your sense of morals get in the way of doing what's right.",
	"The final end of Eternity, and the beginning of Infinity.",
	"Having no unusual coincidence is far more unusual than any coincidence could possibly be.",
	"The Bible contains legendary, historical, and ethical contents. It is quite possible to consider them separately, and one doesn't have to accept the legends in order to get the ethics. Fundamentalists make a grave mistake to insist on the letter of the writings, because they drive away many who can't swallow the Adam-and-Eve bit.",
	"The energy requirements for interstellar travel are so great that it is inconceivable to me that any creatures piloting their ships across the vast depths of space would do so only in order to play games with us over a period of decades. If they want to make contact, they would make contact; if not, they would save their energy and go elsewhere.",
	"Surely no child, and few adults, have ever watched a bird in flight without envy.",
	"A good question is, of course, the key by which infinite answers can be educed.",
	"Where any answer is possible, all answers are meaningless.",
	"If we only obey those rules that we think are just and reasonable, then no rule will stand, for there is no rule that some will not think is unjust and unreasonable.",
	"Inspect every piece of pseudoscience and you will find a security blanket.",
	"People are entirely too disbelieving of coincidence.",
	"Suppose we were to teach creationism. What would be the content of the teaching? Merely that a creator formed the universe and all species of life ready-made? Nothing more? No details?",
	"It pays to be obvious, especially if you have a reputation for subtlety.",
	"I expect death to be nothingness and, for removing me from all possible fears of death, I am thankful to atheism.",
	"They won't listen. Do you know why? Because they have certain fixed notions about the past. Any change would be blasphemy in their eyes, even if it were the truth. They don't want the truth; they want their traditions.",
	"To surrender to ignorance and call it God has always been premature, and it remains premature today.",
	"If I am right, then (religious fundamentalists) will not go to Heaven, because there is no Heaven. If they are right, then they will not go to Heaven, because they are hypocrites.",
	"The lucky few who can be involved in creative work of any sort will be the true elite of mankind, for they alone will do more than serve a machine.",
	"I figure that if God actually does exist, he is big enough to understand an honest difference of opinion.",
	"Words are a pretty fuzzy substitute for mathematical equations.",
	"Once you get it into your head that somebody is controlling events, you can interpret everything in that light and find no reasonable certainty anywhere.",
	"At odd and unpredictable times, we cling in fright to the past.",
	"Life is pleasant. Death is peaceful. It's the transition that's troublesome.",
	"I don't expect to live forever, nor do I repine over that, but I am weak enough to want to be remembered forever. Yet how few of those who have lived, even of those who have accomplished far more than I have, linger on in world memory for even a single century after death.",
	"The most hopelessly stupid man is he who is not aware he is wise.",


] // TODO: fler quotes här http://www.azquotes.com/quote/396280
