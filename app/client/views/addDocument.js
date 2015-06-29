Template.addDocument.events({
  "submit": function(event) {
    var text = event.target.text.value;
    if(text !== "") {
      Documents.insert({
        text: text,
        random: [Math.random(), 0],
        createdAt: new Date()
      });
      event.target.text.value = "";
    }
    return false;
  }  
});
