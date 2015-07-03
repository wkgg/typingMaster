function generateRoomSlug(roomName) {
  return roomName.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

Meteor.methods({
  createRoom: function(roomName) {
    if(!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    var roomSlug = generateRoomSlug(roomName);
    Rooms.insert({
      name: roomName,
      slug: roomSlug
    });
  }
})

Meteor.publish("rooms", function() {
  return Rooms.find({});
});
