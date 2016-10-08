FlowRouter.route('/',{
  name: 'main',
  action: function () {
    BlazeLayout.render('main',{
      header1: 'header',
      left_menu: 'main_menu',
      main: 'main_center'
    });
  }
});

FlowRouter.route('/register',{
  name: 'register',
  action: function () {
    BlazeLayout.render('main',{
      header1: 'header',
      left_menu: 'main_menu',
      main: 'register',
    });
  }
});

FlowRouter.route('/login',{
  name: 'login',
  action: function () {
    BlazeLayout.render('main',{
      header1: 'header',
      left_menu: 'main_menu',
      main: 'login',
    });
  }
});
