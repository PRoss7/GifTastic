var nflTeams = ["Minnesota Vikings", "Detroit Lions", "Green Bay Packers", "Chicago Bears"];

//var API_Key = "mZy8a9OzcJUm6UDmN9T2MjZVPF5Kn6hH";

$(document).ready(function() {

function renderButtons() { 
    
    $("#buttons-view").empty();

    for (var i = 0; i < nflTeams.length; i++) {

        var buttons = $("<button>");

        buttons.addClass("btn btn-primary teamButton");
        buttons.attr("data-name", nflTeams[i]);
        buttons.text(nflTeams[i]);

        $("#buttons-view").append(buttons);

    }

}

$("#add-button").on("click", function(event) {

    event.preventDefault();

    var team = $("#user-input").val().trim();

    nflTeams.push(team);

    $("#user-input").val("");

    renderButtons();
    
});

function displayGifs() { 
    
     var team = $(this).attr("data-name");

     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + team + "&limit=10&api_key=mZy8a9OzcJUm6UDmN9T2MjZVPF5Kn6hH";
 
     $.ajax({
         url: queryURL,
         method: 'GET'
     }).done( function(response) {
         
        $("#gif-view").empty();

         console.log(response);
 
         var results = response.data;
 
         for (var i = 0; i < results.length; i++) {
 
             var newDiv = $("<div>");

             newDiv.addClass("teamGif");
 
             var newRating = $("<p class='rating'>").text("Rating: " + results[i].rating);

             var teamImg = $("<img>");
 
             teamImg.attr("src", results[i].images.fixed_height_still.url);
             teamImg.attr("data-still", results[i].images.fixed_height_still.url);
             teamImg.attr("data-animate", results[i].images.fixed_height.url);
             teamImg.attr("data-state", "still");
            
             newDiv.append(teamImg);

             newDiv.append(newRating);
 
             $("#gif-view").append(newDiv);

         }

    });

  }

function animateGif() { 
             
    var state = $(this).find("img").attr("data-state");
    
    var image = $(this).find("img");

    if (state === "still") {
                 
         image.attr("src", $(this).find("img").attr("data-animate"));
 
        image.attr("data-state", "animate");
             
    } else {
        
        image.attr("src", $(this).find("img").attr("data-still"));

        image.attr("data-state", "still");
            
    }

}       

renderButtons();



$(document).on("click", ".teamGif", animateGif);

$(document).on("click", ".teamButton", displayGifs);

});