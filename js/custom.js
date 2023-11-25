jQuery(function($){

    $(".show_answer").on("click", function(){
        $( this ).siblings( ".answer" ).show( 500 );
    });

});



 window.addEventListener("load", (event) => {
  console.log("page is fully loaded");


    var queryURL = "./resources/rates.json";

    fetch(queryURL)
            .then(function (response) {
                // response.json() returns a json string,
                // returning it will convert it 
                // to a pure JavaScript 
                // object for the next then's callback
                return response.json();
            })
            .then(function (users) {
                // users is a JavaScript object here
                displayUsersAsATable(users);
            })
            .catch(function (error) {
                console.log('Error during fetch: ' + error.message);
            });


});

