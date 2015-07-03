function generateRoomSlug(roomName) {
  return roomName.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

Template.rooms.events({
  "submit": function(event) {
    var roomName = event.target.roomName.value;
    var roomSlug = generateRoomSlug(roomName);
    if(roomName !== "") {
      Rooms.insert({
       name: roomName,
       slug: roomSlug 
      });
      event.target.roomName.value = "";
      Router.go("/room/" + roomSlug);
    }
    return false;
  }
});

Template.rooms.helpers({
  rooms: function() {
    return Rooms.find({});
  }
});
