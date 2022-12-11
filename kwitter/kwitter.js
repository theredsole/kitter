function adduser() {

user_name = document.getElementById("user_name").Value;

localStorage.setItem("user_name", user_name);

window.location = "kwitter_room.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot){document.getElementById("output").innerHTML
room_name = childkey;

console.log("room name -" +room_name);
row = "<div class='room_name' id="+room_name+" onclick='redinrectoroomname(this.id)'>#"

});};
getData();

function redinrectoroomname(name)
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
Window.location = "kwitter.html";
}




