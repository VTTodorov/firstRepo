Template.register.onRendered(function() {
  //normalize
  Session.set('active_page','register');
});

Template.register.helpers({

});

Template.register.events({
  'click #register': function (ev, tmpl) {
    var username = tmpl.find('#username').value;
    var email = tmpl.find('#email').value;
    var password = tmpl.find('#password').value;
    var repPassword = tmpl.find('#repPassword').value;
    if (password === repPassword) {
      Users.register(username, email,password);
    }
  }
});
