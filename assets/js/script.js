// Define array of topics

var topics = [  "Saved by the Bell",
				"Ducktales", 
				"Family Matters",
				"Teenage Mutant Ninja Turtles", 
				"Double Dare",
				"Doug",
				"Salute Your Shorts",
				"Beavis and Butthead",
				"Full House",
				"Aaahh!!! Real Monsters",
				"Boy Meets World",
				"Celebrity Deathmatch"
			]; 


// WRITE A FX THAT CREATES BUTTONS FOR EACH PRE-DEFINED TOPIC
function renderButtons() {
	// Using a for-loop to iterate through each item in topics array...
	for (var i = 0; i < topics.length; i++) {
	
		//... create a <button> container for each array
		var nickShowBtn = $("<button>");
		
		//... add class for CSS styling
		nickShowBtn.addClass("tvshow-buttons");

		//... assign a data-topic data-attribute to each topic equal to it's name
		nickShowBtn.attr("data-topic", topics[i]);

		//... populate each new <div> with text
		nickShowBtn.text(topics[i]);
		
		//... append to <div> with id = 'button-container'
		$("#button-container").append(nickShowBtn);
	}
};

// WRITE A FX THAT WRITES/OVERWRITES RATING & CONTENT TO HTML FOR EACH BUTTON 
function displayContent () {

	// Clear the 
	$("#gifs-container").empty();	

	// Create a variable that allows us to pass in topic info into GIF URL query
	var nickShow = $(this).attr("data-topic");
	console.log(nickShow);

	// Assign the URL that we wish to query, to a variable
      	// insert API key as needed
      	// limit results to 10
     var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
    			    nickShow + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Create your AJAX call: Request data from API using AJAX
     $.ajax({
        url: queryURL,
        method: "GET"
     })

    // Process AJAX call response
     .done(function(response) {
      console.log(response);
      	
      	// state an array of results in the results variable 
        var results = response.data;

        // create a for loop to loop over every result item 
        for (var i = 0; i < results.length; i++) {
	      	
	      	// Define a div to contain each rating
	      	var divHolder = $("<div id='content-display'>");

	      	// Define a variable to contain rating info
	  		var gifRating = results[i].rating;

	      	// Create a container for rating info
	      	var ratingDisplay =  $("<p>").html("TV<br>" + gifRating);

	      	// Define a variable to contain <img> src info for still gif
	      	var gifStillSrc = results[i].images.fixed_height_still.url;
	      	
	      	// Define a variable to contain src info for animated gif
	      	var gifAnimateSrc = results[i].images.fixed_height.url;

	      	// Create <img> containers ...
	      	var gifDisplay = $("<img>")

	      	//...and call in the still GIFs
	      	gifDisplay.attr("src", gifStillSrc);

	      	//... and assign a data-state attribute to each <img> equal to 'still'
			gifDisplay.attr("data-state", "still");

			//... and assign a data-animate attribute to each <img> equal to animated url
			gifDisplay.attr("data-animate", gifAnimateSrc);

			//... and assign a data-index attribute to each <img> equal to it's index
			gifDisplay.attr("data-index", i);
			console.log(gifDisplay);

	      	// Populate with rating and <img> info
	      	divHolder.append(gifDisplay);
	      	divHolder.append(ratingDisplay);

	      	// Write the divHolder variable to the element with id = gifs-container
	   		$("#gifs-container").prepend(divHolder);
	    }
		// DEFINE WHAT HAPPENS WHEN <IMG> ELEMENTS ARE CLICKED
		$("img").on("click", function () {

			// Define a variable equal to element's data-state attribute
			var gifState = 	$(this).attr("data-state");	
			console.log(gifState);

			// Define a variable equal to element's data-index attribute
			var gifIndex = 	parseInt($(this).attr("data-index"));	
			console.log(gifIndex);

			// Create an if statement to check current state
			 // If element state is equal to 'still'
			 if (gifState === "still") {

				// Change <img> to animated gif 
				$(this).attr("src", results[gifIndex].images.fixed_height.url);
				
				// And change 'data-state' to 'animate' 
				$(this).attr("data-state", "animate")

			 // If element state is equal to 'animate'
			 } else if (gifState === "animate") {

				// Change <img> to still gif 
				$(this).attr("src", results[gifIndex].images.fixed_height_still.url);
				
				// And change 'data-state' to 'still'     
				$(this).attr("data-state", "still")
		 	}
		});	
	});
};

// DEFINE WHAT HAPPENS WHEN A USER SUBMITS A NEW SHOW INTO INPUT FIELD
function addShow () {
	// Retrieve text inputted into <input type="text" name="tvShow"> field
	var textInput = $("input[type=text]").val();
	console.log(textInput);
	// Add input to end of 'topics' array using push()
	topics.push(textInput);
	console.log(topics);

	$("#button-container").empty();
	renderButtons();
	$("input[type=text]").val("");
};
	
// LOAD PRE-DEFINED BUTTONS
renderButtons();

// DEFINE WHAT HAPPENS WHEN PREDEFINED BUTTONS ARE CLICKED
$(document).on("click", ".tvshow-buttons", displayContent);

$("input[type=submit]").on("click", addShow);



