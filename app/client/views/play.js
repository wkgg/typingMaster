Template.play.helpers({
  randomDocument: function() {
    return Documents.find({random: {$near: [Math.random(), 0]}}, {limit: 1}).fetch()[0];
  }
});
