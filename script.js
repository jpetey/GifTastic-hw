// Define array of topics

var topics = [  "Double Dare",
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
		console.log(nickShowBtn.data("topic"));	
		
		//... populate each new <div> with text
		nickShowBtn.text(topics[i]);
		
		//... append to <div> with id = 'button-container'
		$("#button-container").append(nickShowBtn);
	}
};

// WRITE A FX THAT WRITES/OVERWRITES RATING & CONTENT TO HTML FOR EACH BUTTON 
function displayContent () {
	
	// Create a variable that allows us to pass in topic info into GIF URL query
	var nickShow = $(this).attr("data-topic");
	console.log(nickShow);

	// Assign the URL that we wish to query, to a variable
      	// insert API key as needed
      	// limit results to 10
     var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
    			    nickShow + "&api_key=dc6zaTOxFJmzC&limit=10";
     console.log(queryURL);

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
	      	var divHolder = $("div");

	      	// Define a variable to contain rating info
	  		var gifRating = results[i].rating;
	      	
	      	// Define a variable to contain <img> src info 
	      	var gifStillSrc = results[i].images.fixed_height.url;
	      	console.log(gifStillSrc);
	      	
	      	// Create a container for rating info
	      	var ratingDisplay =  $("<p>").text("This GIF is rated: " + gifRating);

	      	// Create a <img> containers and call in the GIFs
	      	var gifDisplay = $("<img>").attr("src", gifStillSrc);
	      	console.log(gifDisplay);

	      	// Populate with rating and <img> info
	      	divHolder.append(ratingDisplay);
	      	divHolder.append(gifDisplay);

	      	// Write the divHolder variable to the element with id = gifs-container
	      	$("#gifs-container").html(divHolder);
	    }

    });

};

// LOAD PRE-DEFINED BUTTONS
renderButtons();

// DEFINE WHAT HAPPENS WHEN PREDEFINED BUTTONS ARE CLICKED
$(document).on("click", ".tvshow-buttons", displayContent);

