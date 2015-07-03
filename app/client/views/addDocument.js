Template.addDocument.events({
  "submit": function(event) {
    var text = event.target.text.value;
    if(text !== "") {
      Meteor.call("createDocument", text);
      event.target.text.value = "";
    }
    return false;
  }  
});
