Template.room.helpers({
  roomUsers: function() {
    return Meteor.users.find({
      field: {
        currentRoom: this.room._id
      }
    })
  }
});
