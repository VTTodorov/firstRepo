Users = Meteor.users;

//ALLOWS
Users.allow({
  update: function (userId) {
    if (userId === Meteor.userId()) {
      return true;
    }

    return false;
  },
  remove: function functionName(userId) {
    return false;
  }
});

Users.methods({
  register: function(username, email, password) {
    Accounts.createUser({
      username: username,
      email:email,
      password:password
    }, function(err) {
      if (err) {
        FlashMessages.sendError(err.reason);
        return err;
      }
    });
  },
  login: function (usernameOrEmail, password) {
    Meteor.loginWithPassword(usernameOrEmail, password, function (err) {
      if (err) {
        FlashMessages.sendError(err.reason);
        return err;
      }
    });
  }
});
