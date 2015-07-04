Meteor.subscribe("documents");
Meteor.subscribe("rooms");
Meteor.subscribe("userStatus");

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

