//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAMclTM8rCw7cOdF8wGn0wuMyYIGlo5reg",
      authDomain: "kwitter-cb365.firebaseapp.com",
      databaseURL: "https://kwitter-cb365-default-rtdb.firebaseio.com",
      projectId: "kwitter-cb365",
      storageBucket: "kwitter-cb365.appspot.com",
      messagingSenderId: "786499929309",
      appId: "1:786499929309:web:5447bbcb3e04c8460d8734"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

