import controlers from './controlers/index.js';

 const app = Sammy('#main', function(){
    this.use('Handlebars', 'hbs');

    //Home
    this.get('#/home', controlers.home.get.home)
    this.get('#/trek/dashboard', controlers.trek.get.dashboard);
    
    

    // //user
    this.get('#/user/login', controlers.user.get.login)
    this.get('#/user/register', controlers.user.get.register)

    this.post('#/user/login', controlers.user.post.login)
    this.post('#/user/register', controlers.user.post.register)
    this.get('#/user/logout', controlers.user.get.logout)

    // //trek
    this.get('#/trek/create', controlers.trek.get.create);
    this.get('#/trek/details/:trekId', controlers.trek.get.details)

    this.post('#/trek/create', controlers.trek.post.create);

    this.get('#/trek/delete/:trekId', controlers.trek.del.delete);

    this.get('#/trek/like/:trekId', controlers.trek.put.like);
    this.get('#/trek/edit/:trekId', controlers.trek.get.edit);
    this.post('#/trek/edit/:trekId', controlers.trek.put.edit);

    this.get('#/profile', controlers.user.get.profile)
 });


(()=>{
    app.run('#/home');
})();