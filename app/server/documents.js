Meteor.methods({
  createDocument: function(text) {
    Documents.insert({
      text: text,
      random: [Math.random(), 0],
      createdAt: new Date()
    }); 
  }
});


Meteor.publish("documents", function() {
  return Documents.find({});
});
