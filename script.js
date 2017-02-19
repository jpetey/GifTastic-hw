// Define array of topics

var topics = [  "Double Dare",
				"Rocko's Modern Life", 
				"All That", 
				"Legends of the Hidden Temple",
				"Doug",
				// "Salute Your Shorts",
				// "Ren & Stimpy",
				// "Clarissa Explains It All",
				// "Rugrats",
				// "Are You Afraid of the Dark?",
				// "Spongebob Squarepants",
				// "KaBlam!",
				// "The Secret World of Alex Mack",
				// "Aaahh!!! Real Monsters"
			]; 

// CREATE BUTTONS FOR EACH PRE-DEFINED TOPIC
// Using a for-loop to iterate through each item in topics array...
for (var i = 0; i < topics.length; i++) {
	
	//... create a <button> container for each array
	var nickShowBtn = $("<button>");
	console.log(nickShowBtn);
	
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

// DEFINE WHAT HAPPENS WHEN PREDEFINED BUTTONS ARE CLICKED
    // Bind click event to elements with class="tvshow-buttons"
    $(".tvshow-buttons").on("click", function() {

      // Assign the URL that we wish to query, to a variable
      	// insert API key as needed
      	// limit results to 10
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        $(this).topics + "&api_key=dc6zaTOxFJmzC&limit=10";

      // Create your AJAX call: Request data from API using AJAX
      $.ajax({
        url: queryURL,
        method: "GET"
      })

      // Process AJAX call response
      .done(function(response) {
      	// Define a variable to contain rating info

      	// Define a variable to contain <img> src info 

      	// Create as many <div> containers as the limit we set in queryURL

      	// Populate with rating and <img> info

      	// Create as many <img> containers as the limit we set in queryURL

      	// Populate 


      }
