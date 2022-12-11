
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function addRoom()
{
 Room_names = document.getElementById("room_name").Value;

firebase.database().ref("/").child(Room_names).update({
purpose : "adding room name"
})

  localStorage.Storage.setitem("room_name",Room_name);
  
  window.location = "kwitter_page.html";
  function getData() {firebase.data}
  Room_names = childKey;
}
getData();

function redinrectoroomname(name)
{
console.log(name)
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
 

