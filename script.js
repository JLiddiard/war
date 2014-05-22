$(document).ready(function() {

	//what does this do? Creates a string out of a number and assigns it face-card values
	function convert_value_to_string(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}



	//what does this do? Creates an Array of suits in a deck
	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}
	
	//shuffle the deck
	deck = _.shuffle(deck);

	

	var cards_player_1 = [];
	var cards_player_2 = [];
	//divide out the cards into the two arrays
	for (var x = 0; x < deck.length; x++){
		if (x % 2 === 0){
			cards_player_1.push(deck[x]);
			console.log('cards of player 1 : ' + cards_player_1[0]);
		} else {
			cards_player_2.push(deck[x]);
			console.log('cards of player 2 : ' + cards_player_2[0]);
		}

	}
	var winner1 = true;
	var startPlayer_1 = cards_player_1[0];
	var startPlayer_2 = cards_player_2[0];
	debugger;
	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	function war(hand1, hand2) {
		if(startPlayer_1.number > startPlayer_2.number){
			return startPlayer_1.number;
			//console.log('startPlayer_1 ; ' + startPlayer_1)
			//winner1 = true;
		} else if (startPlayer_2.number > startPlayer_1.number) {
			console.log('startPlayer_2 ; ' + startPlayer_2)
			return startPlayer_2.number;
			
			//winner1 = false;
		} else {
			return false;
			console.log('false');
		}

	}
	
	var warResult = war(startPlayer_1, startPlayer_2);
	console.log('warResult')
	
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	function play() {
	

		if (warResult == startPlayer_1){
			var winnerCard = cards_player_1.shift();
			var loserCard = cards_player_2.shift()
			cards_player_1.push(winnerCard);
			cards_player_1.push(loserCard);
		} else if (warResult == startPlayer_2){
			var winnerCard = cards_player_2.shift();
			var loserCard = cards_player_1.shift()
			cards_player_2.push(winnerCard);
			cards_player_2.push(loserCard);
		} else {
			return false;
			console.log('false');
		}
		//this function (defined below) will continue to the next turn
		advance();
	}
	
	function advance() {
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	}
	advance();
	
	$(".btn").click(function() {
		play();
	});
});