
var images = ['img/1.jpeg', 'img/2.jpeg','img/3.jpeg','img/4.jpeg','img/5.jpeg'];
var randomImage = Math.floor(Math.random() * (images.length-1)) + 1 
    $(document).ready(function() {
    $("body").css("background-image", "url('"+images[randomImage]+"')");
});
var final = ['','','','','','',''];	
var words = [
	['forged', 'crafted', 'ethically produced', 
	'fabricated', 'fashioned', 'designed', 'produced', 
	'hand crafted', 'lovingly', 'transcribed','built from the ground up', 
	'hand finished', 'manufactured', 'shaped from earthen clay', 'carved', 'bound to this plane', 
	'pressed', 'tethered to this reality', 'assembled', 'put together', 'created', 'brought to you by', 
	'made', 'perfectly executed', 'falsified', 'concocted', 'activated', 'arose', 'incepted', 'harvested', 
	'ethically harvested', 'grown', 'attained', 'consummated', 'sewn together', 'materialized', 
	'hastily cobbled together', 'realized, brought to pass', 'acquired', 'delivered from God', 
	'perfected', 'procured', 'foraged', 'realized', 'brought to you by your local community', 
	'ripped from the ether', 'dug out from the ground', 'contractually obtained in the divorce', 
	'dreamt up by sirens', 'cut from the stone', 'won in a bar fight', 'found in a roadside ditch', 
	'bought at the dollarstore and repurposed', 'tamed from the unknowable wilds', 'thawed from the permafrost', 
	'found in an old church', 'ripped from the cold hands of the deceased', 'won in a bet', 
	'dredged from Lake Ontario', 'coughed up from the throat of an old cat', 'waken from its slumber'],
	['picturesque Picton Ontario', 'the scenic East Coast', 'the tome of an ancient God', 'the alley behind Ossington and Bloor',
	 'a mountain pass',' a fertile gully', 'a beach far away from here', 'my grandmother’s kitchen', 'on top a hillside',
	  'in the depths of a coal mine', 'a beautiful forest', 'Yonge and Dundas', 'Bloor station', 'Spadina station', 
	  'Kensington market', 'in the Annex',' entranceway of my part time job',' the St. Lawrence Market',' in your local bar',
	  'your local convenience store', 'the same place you made your biggest regret', 'the middle of the road', 
	  'the building you always look into on your walk to work', 'your old elementary school', 'the Eaton’s Centre', 
	  'the shortcut through the construction site', 'deep Scarborough', 'Union Go Train Station', 'the Beaches', 
	  'in your friend’s living room', ' Dufferin station', 'the AGO', 'your own home', 'the bathroom',
	 'your friends bathroom', 'in your bathroom', 'your office', 'a back alley', 'the bath', 'the shadow of Casa Loma',
	  'the water',' on the beach', 'Dufferin Mall', 'a truck stop', 
	  'an OnRoute station though which one I can’t be sure- they all look the same to me', 
	 ' your childhood home', 'the fanciest condo on the block', 'a 1970’s highrise', 'your living room', 'your bedroom', 
	  'the holiday market', 'the local hole in the wall', 'at your elementary school', 'Northern Ontario', 
	  'Peterborough', 'Ottawa', 'the bus station in Montreal', 'the walk in freezer of your favourite restaurant', 
	  'a forgotten part of the city', 'a dark basement',' a vineyard you can’t afford', 'the backwoods', 
	 ' a ritual space so secret it doesnt even exist', 'Shoppers Drugmart',' the closest Rexall '],
	['a crew of queer truckers', 'elves', 'talking animals', 'grizzled old men with nothing left to loose', 
	'the tiny bird hands of sparrows', 'your uncle', 'your mother', 'your father', 'your best friend',
	 'your greatest enemy', 'a talking tree', 'a small child working in their spare time to escape the cruel hand of capitalism', 'the cruel hand of capitalism',
	  'The Merchants Guild', 'a tech-bro in his spare time between start up gigs', 'a millennial', 
	  'an unassuming grandmother', 'a cloaked stranger',' a puckish rogue', 'a thousand children chanting ILLUMINATI CONFIRMED in unison',
	   'seven sisters', 'a dog', 'former lover', 
	   'your best friend', 'a lonely stranger', 'your boss', 'a creature made of mist', 
	   'the angriest hedgehog you’ve ever seen', ' the universe itself', 'a Swamp Thing', 
	   'a formless mass', 'a wandering storyteller',' a fiddler', 'a siren', 'a werewolf', 'a witch', 'the concept of dreams', 
	   'the unknowable', 'a metal cover band', 'a ska band', 
	   'the person who has basically the same schedule as you so you see them at the bus stop all the time', 
	   'a whirlwind', 'a monster made of your greatest fears', 'the fading sense of control you have on your life',
	     'a bear speaking tongues', 'a trash panda', 'your first date', 'Beyonce',
	     'a creeping sense of unattainable joy', 'the person you imagined yourself youd become when you were 9', 
	     'a human skull from the dollar store', 
	      'the man from the corner store', 'the person who you admire most', 
	     'all known human knowledge',  'a literal train', 'Guillermo del Toro', 'your middle school math teacher', 
	     'a toddler', 'an old man offering you a sword',' the boundlessness of the eternal void', 
	     'entirely formless fear',' literal garbage', 'the inevitable heat death of the universe', 'the reaching hand of Satan', 
	     'the answer to life the universe and everything', 'happiness', 'a man attempting to swallow a river', 
	      'a newborn baby', 'your landlord', 'the bartende'],
	['rusty'],
	['fruit juice'],
	['well calibrated berometers'],
	['But the truth will never escape us']
];

for (var i = 0; i < words.length; i++) {
	final[i] = words[i][Math.floor(Math.random() * (words[i].length))];
	console.log(final);
}



//pickRandom(method);

function pickRandom(which) { 
	 var thisOne = which[Math.floor(Math.random() * (which.length-1)) ];
	return thisOne;
}






 

var beep = ' ' +final[0]+' in '+final[1]+', this plugin has been the work of generations of '+final[2]+' thousands of years. The '+final[3]+' hint of '+final[4]+' and subtle taste of '+final[5]+' will undoubtedly leave you thinking '+final[6]+'.';

console.log(beep);


// Forged in scenic picton onatrio, this plugin 
// has been the work of generations of a crew of queer truckers for 
// thousands of years. The rusty hint of fruit juice and subtle 
// taste of well callibrated berometers will undoubtedly leave you 
// thinking "But the truth will never escape us". 

//$("#this p").
