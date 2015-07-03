Meteor.methods({
  createRoom: function(roomName, roomSlug) {
    if(!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    var roomId = Rooms.insert({
      name: roomName,
      slug: roomSlug
    });
  }
})

Meteor.publish("rooms", function() {
  return Rooms.find({});
});
