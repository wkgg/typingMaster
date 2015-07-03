Template.rooms.events({
  "submit": function(event) {
    var roomName = event.target.roomName.value;
    if(roomName !== "") {
      Meteor.call("createRoom", roomName);
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
