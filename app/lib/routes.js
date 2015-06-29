Router.configure({
  layoutTemplate: "main"
});

Router.route("/", function() {
  this.render("play");
});

Router.route("/addDocument", function() {
  this.render("addDocument");
});
