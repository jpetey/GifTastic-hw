// Define array of topics

var topics = [  "X-Men Cartoon",
				"Rocko's Modern Life", 
				"All That", 
				"Legends of the Hidden Temple",
				"Doug",
				"Salute Your Shorts",
				"Ren and Stimpy",
				"Clarissa Explains It All",
				"Rugrats",
				"Are You Afraid of the Dark?",
				"Spongebob Squarepants",
				"KaBlam!",
				"The Secret World of Alex Mack",
				"Aaahh!!! Real Monsters"
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
		
		//... assign a data-state data-attribute to each topic equal to 'still'
		nickShowBtn.attr("data-state", "still");

		//... populate each new <div> with text
		nickShowBtn.text(topics[i]);
		
		//... append to <div> with id = 'button-container'
		$("#button-container").append(nickShowBtn);
	}
};

// WRITE A FX THAT QUERIES THE API
function apiQuery () {
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
    }