Template.main_menu.onRendered(function () {
  //normalize
  Session.set('active_page','home');

});

Template.main_menu.helpers({
  home: function() {
    if (Session.get('active_page') === 'home') {
      return true;
    }

    return false;
  },
  login: function() {
    if (Session.get('active_page') === 'login') {
      return true;
    }

    return false;
  },
  register: function() {
    if (Session.get('active_page') === 'register') {
      return true;
    }

    return false;
  },
  info: function() {
    if (Session.get('active_page') === 'info') {
      return true;
    }

    return false;
  }
});

Template.main_menu.events({
  'click #home':function() {
    FlowRouter.go('/');
    Session.set('active_page','home');
  },
  'click #login':function() {
    FlowRouter.go('login');
    Session.set('active_page','login');
  },
  'click #register':function() {
    FlowRouter.go('register');
    Session.set('active_page','register');
  },
  'click #info':function() {
    Session.set('active_page','info');
  },
});
