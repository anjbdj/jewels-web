if ('serviceWorker' in navigator) {
// Use the window load event to keep the page load performant
window.addEventListener('load', () => {
    navigator.serviceWorker.register('/js/sw.js');
    });
}



jQuery(function($){

    $(".show_answer").on("click", function(){
        $( this ).siblings( ".answer" ).show( 500 );
    });

});