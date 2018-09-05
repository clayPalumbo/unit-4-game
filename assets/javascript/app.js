$(document).ready(function() {
    // console.log( "ready!" );

    // track which question we are on
    var questionCounter = 0;
    // initial time of 15 seconds for each question
    var time = 15;
    // will keep tally of right guesses for end game
    var correctGuesses = 0;
    //will keep tally of wrong guesses for end game
    var incorrectGuesses = 0;

    // question & answer array
    var questions = [
      {
	    question: "Known for his powerful baritone vocals, Eddie Vedder is the lead singer with which American rock band?",
	    choices: ["Alice In Chains", "Soundgarden", "Foo Fighters", "Pearl Jam"],
	    correctAnswer: "Pearl Jam",
	    image: "<img src='assets/images/download.jpeg' class='img-circle' width= 200px>"
	  }, 
	  {
	    question: "Which female singer and songwriter was featured on Jay Z's 2009 hit Run This Town?",
	    choices: ["Beyonce", "Rihanna", "Madona", "Kanye"],
	    correctAnswer: "Beyonce",
	    image: "<img src='assets/images/beyonce.webp' class='img-circle' width= 200px>"
	  }, 
	  {
	    question: "Which artist makes pancakes for Charlie Murphy on the Dave Chappelle Show?",
	    choices: ["Michael Jackson", "Prince", "Rick James", "Jay-Z"],
	    correctAnswer: "Prince",
	    image: "<img src='assets/images/prince.jpg' class='img-circle' width= 200px>"
	  }, 
	  {
	    question: "The best performing single on the Billboard Top 100 for 2015, Uptown Funk was recorded by which artist(s)?",
	    choices: ["Mark Ronson and Bruno Mars", "Wiz Khalifa featuring Charlie Puth", "Kendrick Lamar", "Justin Bieber"],
	    correctAnswer: "Mark Ronson and Bruno Mars",
	    image: "<img src='assets/images/bruno-mars.jpeg' class='img-circle' width= 200px>"
	  }, 
	  {
	    question: " Who is the only artist in Grammy history to win five or more awards on three separate nights?",
	    choices: ["Stevie Wonder", "Paul McCartney", "Kanye", "Papa Johns"],
	    correctAnswer: "Stevie Wonder",
	    image: "<img src='assets/images/stevie-wonder.jpeg' class='img-circle' width= 200px>"
	  },
	  {
	    question: 'What Beatles song opens with the lyric "Oh yeah I tell you something, I think you will understand. When I say that something..."?',
	    choices: ["She Loves You", "Hello, Goodbye", "In My Life", "I Want To Hold Your Hand"],
	    correctAnswer: "I Want To Hold Your Hand",
	    image: "<img src='assets/images/beatles.jpg' class='img-circle' width= 200px>"
	  },
	  {
	    question: '"With Teeth" and "Year Zero" were hit albums in the 2000s for which band?',
	    choices: ["Fall Out Boy", "The Killers", "All American Rejects", "Nine Inch Nails"],
	    correctAnswer: "Nine Inch Nails",
	    image: "<img src='assets/images/nine.png' class='img-circle' width= 200px>"
	  },
	  {
	    question: 'Released on the album "Viva la Vida or Death and All His Friends", Viva La Vida was a hit song for which band in 2008?',
	    choices: ["REM", "Coldplay", "Bon Jovi", "U2"],
	    correctAnswer: "Coldplay",
	    image: "<img src='assets/images/coldplay.jpg' class='img-circle' width= 200px>"
	  },
	  {
	    question: 'Written by Ray Davies, "Sunny Afternoon" was a hit for which English rock band?',
	    choices: ["The Kinks", "The Rolling Stones", "The Animals", "The Beatles"],
	    correctAnswer: "The Kinks",
	    image: "<img src='assets/images/the-kinks.jpg' class='img-circle' width= 200px>"
	  },
	  {
	    question: "According to Kanye West, who is the greatest person in the world?",
	    choices: ["Kanye","Kanye","Kanye","Kanye"],
	    correctAnswer: "Kanye",
	    image: "<img src='assets/images/kanye.jpeg' class='img-circle' width= 200px>"
	  }];
	  

	// create question contents according to question count
	function questionContent() {
    	$("#gameScreen").append("<p><strong>" + 
    		questions[questionCounter].question + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[0] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[1] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[2] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[3] + 
    		"</strong></p>");
	}

	// user guessed correctly
	function userWin() {
		$("#gameScreen").html("<p>You got it right!</p>");
		correctGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			questions[questionCounter].image);
		setTimeout(nextQuestion, 3000);
		questionCounter++;
	}

	// user guessed incorrectly
	function userLoss() {
		$("#gameScreen").html("<p>Wrong!</p>");
		incorrectGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			questions[questionCounter].image);
		setTimeout(nextQuestion, 3000);
		questionCounter++;
	}

	// user ran out of time
	function userTimeout() {
		if (time === 0) {
			$("#gameScreen").html("<p>You ran out of time!</p>");
			incorrectGuesses++;
			var correctAnswer = questions[questionCounter].correctAnswer;
			$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
				correctAnswer + 
				"</span></p>" + 
				questions[questionCounter].image);
			setTimeout(nextQuestion, 3000);
			questionCounter++;
		}
	}

	// screen that shows final score and nice message :)
	function resultsScreen() {
		if (correctGuesses === questions.length) {
			var endMessage = "Perfection! Well done!";
			var bottomText = "Perfect";
		}
		else if (correctGuesses > incorrectGuesses) {
			var endMessage = "Not too Bad!";
			var bottomText = "You're not dumb";
		}
		else {
			var endMessage = "Maybe find something else to be good at";
			var bottomText = "You're bad";
		}
		$("#gameScreen").html("<p>" + endMessage + "</p>" + "<p>You got <strong>" + 
			correctGuesses + "</strong> right.</p>" + 
			"<p>You got <strong>" + incorrectGuesses + "</strong> wrong.</p>");
		$("#gameScreen").append("<h1 id='start'>Start Over?</h1>");
		$("#bottomText").html(bottomText);
		gameReset();
		$("#start").click(nextQuestion);
	}

	// game clock currently set to 15 seconds
	function timer() {
		clock = setInterval(countDown, 1000);
		function countDown() {
			if (time < 1) {
				clearInterval(clock);
				userTimeout();
			}
			if (time > 0) {
				time--;
			}
			$("#timer").html("<strong>" + time + "</strong>");
		}
	}

	// moves question counter forward to show next question
	function nextQuestion() {
		if (questionCounter < questions.length) {
			time = 15;
			$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
			questionContent();
			timer();
			userTimeout();
		}
		else {
			resultsScreen();
		}
	// console.log(questionCounter);
	// console.log(questions[questionCounter].correctAnswer);
	}

	// reset score and counter parameters on restart
	function gameReset() {
		questionCounter = 0;
		correctGuesses = 0;
		incorrectGuesses = 0;
	}

    function startGame() {
    	$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
    	$("#start").hide();
    	// $("#gameScreen").append("<div id='question'>");
    	// var nextQuestion = questionContent(questionCounter);
    	// $("#gameScreen").append(nextQuestion);

		// $("#gameScreen").append("<p>" + questions[questionCounter].question + "</p><p>" + questions[questionCounter].choices[0] + "</p><p>" + questions[questionCounter].choices[1] + "</p><p>" + questions[questionCounter].choices[2] + "</p><p>" + questions[questionCounter].choices[3] + "</p>");
		// questionCounter++;
		questionContent();
    	timer();
    	userTimeout();
    }

    // this starts the game
    $("#start").click(nextQuestion);

    // click function to trigger right or wrong screen
	$("#gameScreen").on("click", ".choices", (function() {
		// alert("clicked!");
		var userGuess = $(this).text();
		if (userGuess === questions[questionCounter].correctAnswer) {
			clearInterval(clock);
			userWin();
		}
		else {
			clearInterval(clock);
			userLoss();
		}
	}));
});