FlowRouter.route('/',{
  name: "Main page",
  action: function () {
    BlazeLayout.render('main',{
      header1: 'header'
    });
  }
});
