const firebaseConfig = {
      apiKey: "AIzaSyDLGIVGpotxufODLNbL_BOz5keGaQpL90g",
      authDomain: "kwitter-6f092.firebaseapp.com",
      databaseURL: "https://kwitter-6f092-default-rtdb.firebaseio.com",
      projectId: "kwitter-6f092",
      storageBucket: "kwitter-6f092.appspot.com",
      messagingSenderId: "589857958859",
      appId: "1:589857958859:web:3ad9cfb15bac52a38f644e",
      measurementId: "G-NSZT5ZP1ZW"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!";

//ADD YOUR FIREBASE LINKS HERE

function addRoom() 
{ 
      room_name = document.getElementById("room_name").value; 
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 
localStorage.setItem("room_name", room_name); 
window.location = "kwitter_page.html"; 
}


function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) 
{
       console.log(name); 
       localStorage.setItem("room_name", name); 
       window.location = "kwitter_page.html"; 
      } 
       
function logout() 
{ 
  localStorage.removeItem("user_name");
   localStorage.removeItem("room_name"); 
   window.location = "index.html"; 
}