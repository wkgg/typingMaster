Router.configure({
  layoutTemplate: "main"
});

Router.route("/", function() {
  this.render("play");
});

Router.route("/addDocument", function() {
  this.render("addDocument");
});

Router.route("/rooms", function() {
  this.render("rooms");
});

Router.route("/room/:slug", {
  onBeforeAction: function() {
    if(!Meteor.userId()) {
      this.render("rooms", {data: {
        error: "You need to create an account to be able to join a room."
      }});
    } else {
      this.next();
    }
  },
  waitOn: function() {
    var room = Rooms.findOne({slug: this.params.slug});
    return Meteor.subscribe("joinRoom", room._id);
  },
  action: function() {
    var room = Rooms.findOne({slug: this.params.slug});
    this.render("room", {data: room});
  }
});
