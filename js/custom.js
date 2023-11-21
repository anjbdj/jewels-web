jQuery(function($){

    $(".show_answer").on("click", function(){
        $( this ).siblings( ".answer" ).show( 500 );
    });

});