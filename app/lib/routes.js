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
  var room = Rooms.findOne({slug: this.params.slug});
  this.render("room", {data: room});
});
