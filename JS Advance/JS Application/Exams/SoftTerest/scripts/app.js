import controlers from './controlers/index.js';

 const app = Sammy('#main', function(){
    this.use('Handlebars', 'hbs');

    //Home
    this.get('#/home', controlers.home.get.home);
    this.get('#/', controlers.home.get.home);

    // //user
    this.get('#/user/login', controlers.user.get.login)
    this.get('#/user/register', controlers.user.get.register)

    this.post('#/user/login', controlers.user.post.login)
    this.post('#/user/register', controlers.user.post.register)
    this.get('#/user/logout', controlers.user.get.logout)

    // //cause
    this.get('#/idea/dashboard', controlers.idea.get.dashboard);
    this.get('#/idea/create', controlers.idea.get.create);
    this.get('#/idea/details/:ideaId', controlers.idea.get.details)

    this.post('#/idea/create', controlers.idea.post.create);
    this.get('#/idea/delete/:ideaId', controlers.idea.del.delete);
    this.get('#/idea/like/:ideaId', controlers.idea.put.like);
    this.post('#/idea/comment/:ideaId', controlers.idea.put.comment);
    this.get('#/profile', controlers.user.get.profile)

 });

(()=>{
    app.run('#/home');
})()