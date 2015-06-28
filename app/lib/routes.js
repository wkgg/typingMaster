Router.configure({
  layoutTemplate: "main"
});

Router.route("/", function() {
  this.render("play");
});

Router.route("/addText", function() {
  this.render("addText");
});
