Meteor.publish("userStatus", function() {
  return Meteor.users.find({"status.online": true});
});

Meteor.publish("joinRoom", function(roomId) {
  Meteor.call("joinRoom", roomId, this.userId, function() {
    this.ready(); 
  }.bind(this));
});

Meteor.methods({
  joinRoom: function(roomId, userId) {
    if(!userId) {
      throw new Meteor.Error("not-authorized");
    }

    Meteor.users.update({_id: userId}, {
      $set: {
        field: {
          currentRoom: roomId
        }
      }
    });
  }
});

Meteor.users.find({"status.online": true}).observe({
  removed: function(id) {
    Meteor.users.update({_id: id}, {
      $set: {
        field: {
          currentRoom: null
        }
      }
    });
  }
});
