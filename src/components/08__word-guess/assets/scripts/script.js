// get the viewport height and multiply by 1% to get vh unit
// set --vh custom property to CSS
// this allows the app to render correctly on mobile devices
let vh = window.innerHeight * 0.01;
let vw = window.innerWidth * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
document.documentElement.style.setProperty('--vw', `${vw}px`);

// declare wordlist
// from https://www.thefreedictionary.com/4-letter-words.htm
let words = ['able', 'acid', 'aged', 'also', 'area', 'army', 'away', 'baby', 'back', 'ball', 'band', 'bank', 'base', 'bath', 'bear', 'beat', 'been', 'beer', 'bell', 'belt', 'best', 'bill', 'bird', 'blow', 'blue', 'boat', 'body', 'bomb', 'bond', 'bone', 'book', 'boom', 'born', 'boss', 'both', 'bowl', 'bulk', 'burn', 'bush', 'busy', 'call', 'calm', 'came', 'camp', 'card', 'care', 'case', 'cash', 'cast', 'cell', 'chat', 'chip', 'city', 'club', 'coal', 'coat', 'code', 'cold', 'come', 'cook', 'cool', 'cope', 'copy', 'CORE', 'cost', 'crew', 'crop', 'dark', 'data', 'date', 'dawn', 'days', 'dead', 'deal', 'dean', 'dear', 'debt', 'deep', 'deny', 'desk', 'dial', 'dick', 'diet', 'disc', 'disk', 'does', 'done', 'door', 'dose', 'down', 'draw', 'drew', 'drop', 'drug', 'dual', 'duke', 'dust', 'duty', 'each', 'earn', 'ease', 'east', 'easy', 'edge', 'else', 'even', 'ever', 'evil', 'exit', 'face', 'fact', 'fail', 'fair', 'fall', 'farm', 'fast', 'fate', 'fear', 'feed', 'feel', 'feet', 'fell', 'felt', 'file', 'fill', 'film', 'find', 'fine', 'fire', 'firm', 'fish', 'five', 'flat', 'flow', 'food', 'foot', 'ford', 'form', 'fort', 'four', 'free', 'from', 'fuel', 'full', 'fund', 'gain', 'game', 'gate', 'gave', 'gear', 'gene', 'gift', 'girl', 'give', 'glad', 'goal', 'goes', 'gold', 'Golf', 'gone', 'good', 'gray', 'grew', 'grey', 'grow', 'gulf', 'hair', 'half', 'hall', 'hand', 'hang', 'hard', 'harm', 'hate', 'have', 'head', 'hear', 'heat', 'held', 'hell', 'help', 'here', 'hero', 'high', 'hill', 'hire', 'hold', 'hole', 'holy', 'home', 'hope', 'host', 'hour', 'huge', 'hung', 'hunt', 'hurt', 'idea', 'inch', 'into', 'iron', 'item', 'jack', 'jane', 'jean', 'john', 'join', 'jump', 'jury', 'just', 'keen', 'keep', 'kent', 'kept', 'kick', 'kill', 'kind', 'king', 'knee', 'knew', 'know', 'lack', 'lady', 'laid', 'lake', 'land', 'lane', 'last', 'late', 'lead', 'left', 'less', 'life', 'lift', 'like', 'line', 'link', 'list', 'live', 'load', 'loan', 'lock', 'logo', 'long', 'look', 'lord', 'lose', 'loss', 'lost', 'love', 'luck', 'made', 'mail', 'main', 'make', 'male', 'many', 'Mark', 'mass', 'matt', 'meal', 'mean', 'meat', 'meet', 'menu', 'mere', 'mike', 'mile', 'milk', 'mill', 'mind', 'mine', 'miss', 'mode', 'mood', 'moon', 'more', 'most', 'move', 'much', 'must', 'name', 'navy', 'near', 'neck', 'need', 'news', 'next', 'nice', 'nick', 'nine', 'none', 'nose', 'note', 'okay', 'once', 'only', 'onto', 'open', 'oral', 'over', 'pace', 'pack', 'page', 'paid', 'pain', 'pair', 'palm', 'park', 'part', 'pass', 'past', 'path', 'peak', 'pick', 'pink', 'pipe', 'plan', 'play', 'plot', 'plug', 'plus', 'poll', 'pool', 'poor', 'port', 'post', 'pull', 'pure', 'push', 'race', 'rail', 'rain', 'rank', 'rare', 'rate', 'read', 'real', 'rear', 'rely', 'rent', 'rest', 'rice', 'rich', 'ride', 'ring', 'rise', 'risk', 'road', 'rock', 'role', 'roll', 'roof', 'room', 'root', 'rose', 'rule', 'rush', 'ruth', 'safe', 'said', 'sake', 'sale', 'salt', 'same', 'sand', 'save', 'seat', 'seed', 'seek', 'seem', 'seen', 'self', 'sell', 'send', 'sent', 'sept', 'ship', 'shop', 'shot', 'show', 'shut', 'sick', 'side', 'sign', 'site', 'size', 'skin', 'slip', 'slow', 'snow', 'soft', 'soil', 'sold', 'sole', 'some', 'song', 'soon', 'sort', 'soul', 'spot', 'star', 'stay', 'step', 'stop', 'such', 'suit', 'sure', 'take', 'tale', 'talk', 'tall', 'tank', 'tape', 'task', 'team', 'tech', 'tell', 'tend', 'term', 'test', 'text', 'than', 'that', 'them', 'then', 'they', 'thin', 'this', 'thus', 'till', 'time', 'tiny', 'told', 'toll', 'tone', 'tony', 'took', 'tool', 'tour', 'town', 'tree', 'trip', 'TRUE', 'tune', 'turn', 'twin', 'type', 'unit', 'upon', 'used', 'user', 'vary', 'vast', 'very', 'vice', 'view', 'vote', 'wage', 'wait', 'wake', 'walk', 'wall', 'want', 'ward', 'warm', 'wash', 'wave', 'ways', 'weak', 'wear', 'week', 'well', 'went', 'were', 'west', 'what', 'when', 'whom', 'wide', 'wife', 'wild', 'will', 'wind', 'wine', 'wing', 'wire', 'wise', 'wish', 'with', 'wood', 'word', 'wore', 'work', 'yard', 'yeah', 'year', 'your', 'zero', 'zone'];

var lettersPattern = /[A-Za-z]/;
var solutionWord = '';
var time = 10000;
var finished = true;
var alarm = document.getElementById('secondsLeft');
var totalWins = 0;
var totalLosses = 0;
var i = 0;
var found = [false, false, false, false];
var timer;

// update totalWins and totalLosses with local storage values
updateTally();

// computer chooses a random word
const chooseWord = () => {
	// choose random item from words array
	let randomItem = Math.floor(Math.random() * (words.length - 1)) + 1;
	solutionWord = words[randomItem].toLowerCase();
};

function updateAlarm() {
	alarm.innerHTML = String(time / 1000).padStart(2, '0');
}

// timer that starts at 10000 and clears at 0 or when the game is won
function startTimer() {
	finished = false;

	alarm.innerHTML = String(time / 1000).padStart(2, '0');

	timer = setInterval(() => {
		// timer has reached zero
		if (time === 0) {
			clearInterval(timer);

			if (finished === false) {
				// lost the game
				// update tally on the screen
				totalLosses++;
				document.getElementById('tally-losses-value').innerHTML = totalLosses;
				//  update start button text
				document.getElementById('button-start-games').innerHTML = 'Oh no! Word was ' + solutionWord + '. Start again?';

				finished = true;
			}
		} else {
			time -= 1000;
			// update alarm text
			updateAlarm();
		}
	}, 1000);
}

function resetGame() {
	time = 10000;
	finished = false;
	chooseWord();
	for (var i = 0; i < 4; i++) {
		document.getElementById('tile' + i).innerHTML = '_';
		found[i] = false;
	}
}

// user clicks start
document.getElementById('button-start-games').addEventListener('click', (e) => {
	e.preventDefault();

	if (finished === true) {
		document.getElementById('button-start-games').innerHTML = 'Quick! Guess the letters!';
		resetGame();
		startTimer();
	}
});

// detect user keypress (letter)
document.addEventListener('keyup', (e) => {
	var keypress = e.key.toLowerCase();

	if (finished === false && keypress.length == 1 && lettersPattern.test(e.key) && solutionWord.includes(keypress) && !allFound()) {
		for (i = 0; i < solutionWord.length; i++) {
			if (solutionWord[i] === keypress) {
				// update tiles if true
				document.getElementById('tile' + i).innerHTML = keypress;

				// update found array
				found[i] = true;

				// if all tiles revealed, win
				if (allFound() && time >= 0) {
					finished = true;
					totalWins++;
					// stop the clock
					clearInterval(timer);
					// update tally
					document.getElementById('tally-wins-value').innerHTML = totalWins;

					//  flash a win message
					document.getElementById('button-start-games').innerHTML = 'You win! Start again?';
				}
			}
		}
	}

	localStorage.setItem('totalWins', totalWins);
	localStorage.setItem('totalLosses', totalLosses);
});

function allFound() {
	return found[0] && found[1] && found[2] && found[3];
}

document.getElementById('button-reset-games').addEventListener('click', (e) => {
	localStorage.setItem('totalWins', 0);
	localStorage.setItem('totalLosses', 0);
	updateTally();
});

function updateTally() {
	totalWins = localStorage.getItem('totalWins', totalWins);
	totalLosses = localStorage.getItem('totalLosses', totalLosses);
	document.getElementById('tally-wins-value').innerHTML = localStorage.getItem('totalWins', totalWins);
	document.getElementById('tally-losses-value').innerHTML = localStorage.getItem('totalLosses', totalLosses);
}

document.getElementById('button-help').addEventListener('click', function () {
	document.getElementById('modal').classList.add('show');
	document.getElementById('modal').classList.remove('hide');
});

document.getElementById('closeModal').addEventListener('click', function () {
	document.getElementById('modal').classList.add('hide');
	document.getElementById('modal').classList.remove('show');
});
