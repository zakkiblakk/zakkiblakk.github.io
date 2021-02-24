// JavaScript Document
(function newFact() {
  var facts = ['"I\'ve got a lot on my plate, but I\'ve got a big fork" - Zakki Blakk',
			   '"Creativity is the ultimate freedom" - Christian Meyer',
			   '"They say you sould live as you are told to/I say you gotta be strong and make up your own mind" - David \"Leppard\" Hellman',
			   '"A nod is as good as a wink to a blind horse" - Rolf',
			   '"Can\'t make an egg without an omelette" - Zakki Blakk',
			   '"Let go of your jimmies; seek unrustlement" - Unknown',
			   '"Stale cheesey poofs > normal cheesey poofs" - Zakki Blakk',
			   '"Open your mind before your mouth" - Chris \"Motionless\" Cerulli',
			   '"Success is falling nine times and getting up ten." - Jon Bon Jovi',
			   '"Nothing is as important as passion. No matter what you want to do with your life, be passionate." - Jon Bon Jovi',
		       '"I\'m too young to grow up" - Zakki Blakk',
			   '"Life is too short to not eat ice cream every day" - Michael Todd Hofmann, Jr.',
			   '"Yeah." - James Hetfield'
			  ];
  var randomFact = Math.floor(Math.random() * facts.length);
  document.getElementById('factDisplay').innerHTML = facts[randomFact];
})();
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
window.onload = on();