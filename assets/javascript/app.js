$(document).ready(function() {

var nflTeams = ["Vikings", "Lions", "Packers", "Bears"];

var queryURL = "http://api.giphy.com/v1/gifs/search?q=nfl+teams&api_key=YOUR_API_KEY&limit=5";

$.ajax({
    url: queryURL,
    method: "GET"
}).done(function(response) {
    console.log(response);
});

/*function displayGifs() { 
    
     var team = $(this).attr("data-name");
     var queryURL = "https://api.giphy.com/v1/gifs/search?q=nfl+teams" + team + "&api_key=xYh2yLmPCcgZjkWBJhHbGpqcMaSPuMhO&limit=10";
 
     $.ajax({
         url: queryURL,
         method: "GET"
     }).done( function(response) {
         
         console.log(response);
 
         var results = response.data;
 
         for (var i = 0; i < results.length; i++) {
 
             var gifDiv = $("#gif-view");
 
             var p = $("<p>").text("Rating: " + results[i].rating);
 
             var teamImg = $("<img class='teamImg'>");
 
             teamImg.attr("src", results[i].images.fixed_height.url);
             teamImg.attr("data-still", results[i].images.fixed_height_still.url);
             teamImg.attr("data-animate", results[i].images.fixed_height.url);
             teamImg.attr("data-state", "still");
 
             gifDiv.append(p);
 
             gifDiv.append(teamImg);
 
             $("#gif-view").prepend(gifDiv);
         }
         
         $(".teamImg").on("click", function () {
             
             var state = $(this).attr("data-state");
             console.log(this);
 
             if (state == "still") {
                 
                 $(this).attr("src", $(this).data("animate"));
 
                 $(this).attr("data-state", "animate");
             
            } else {
                $(this).attr("scr", $(this).data("still"));

                $(this).attr("data-state", "still");
            }
         });
   
     });
 
 }*/

function renderButtons() { 
    
    $("#buttons-view").empty();

    for (var i = 0; i < nflTeams.length; i++) {

        var buttons = $("<button>");

        buttons.addClass("btn btn-primary teams");
        buttons.attr("data-name", nflTeams[i]);
        buttons.text(nflTeams[i]);

        $("#buttons-view").append(buttons);

    }

}


$("#add-button").on("click", function (event){

    event.preventDefault();

    var team = $("#user-input").val().trim();

    nflTeams.push(teams);

    renderButtons();
    
});



$(document).on("click", ".teams", displayGifs);

renderButtons();

});