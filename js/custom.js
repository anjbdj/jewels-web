// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyASL1PQ_hmaMUWmS6k979CIeJ7X_Wf_O2I",
authDomain: "novel-jewels-online.firebaseapp.com",
projectId: "novel-jewels-online",
storageBucket: "novel-jewels-online.appspot.com",
messagingSenderId: "1036462052535",
appId: "1:1036462052535:web:ec3bb01145a2f799622932",
measurementId: "G-HHKG9JM7FW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




jQuery(function($){

    $(".show_answer").on("click", function(){
        $( this ).siblings( ".answer" ).show( 500 );
    });

});

