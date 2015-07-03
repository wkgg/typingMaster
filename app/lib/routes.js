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

Router.route("/room/:slug", function() {
  if(Meteor.userId()) {
    var room = Rooms.findOne({slug: this.params.slug});
    this.render("room", {data: room});
  } else {
    this.render("rooms", {data: {
      error: "You need to create an account to be able to join a room."
    }});
  }
});
