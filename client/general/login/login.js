Template.login.onRendered(function () {

});

Template.login.events({
  'click #login': function (ev, tmpl) {
    var username = tmpl.find('#username').value;
    var password = tmpl.find('#password').value;
    if (username && password) {
      Users.login(username, password);
    }
    if(Meteor.userId()){
      FlowRouter.go('/');
    }
  }
});
