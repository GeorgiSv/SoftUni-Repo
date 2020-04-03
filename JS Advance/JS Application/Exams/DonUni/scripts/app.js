import controlers from './controlers/index.js';

 const app = Sammy('#main', function(){
    this.use('Handlebars', 'hbs');

    //Home
    this.get('#/home', controlers.home.get.home)

    //user
    this.get('#/user/login', controlers.user.get.login)
    this.get('#/user/register', controlers.user.get.register)

    this.post('#/user/login', controlers.user.post.login)
    this.post('#/user/register', controlers.user.post.register)
    this.get('#/user/logout', controlers.user.get.logout)

    //cause
    this.get('#/cause/dashboard', controlers.cause.get.dashboard);
    this.get('#/cause/create', controlers.cause.get.create);
    this.get('#/cause/details/:causeId', controlers.cause.get.details)

    this.post('#/cause/create', controlers.cause.post.create);

    this.get('#/cause/close/:causeId', controlers.cause.del.close);
    this.post('#/cause/donate/:causeId', controlers.cause.put.donate);
 });


(()=>{
    app.run();
})();