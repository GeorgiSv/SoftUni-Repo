import models from '../models/index.js';
import extend from '../utils/context.js'

export default{
    get:{
        login(context){
            extend(context).then(function(){
            this.partial('../templates/forms/login.hbs')
        })

     },

        register(context){
            extend(context).then(function(){
                this.partial('../templates/forms/register.hbs')
            })
        },
        
        logout(context){
            models.user.logout()
            .then( (res) =>{
                context.redirect('#/home')
            })
            .catch((err) => console.error(err));
        },
        profile(context){
            extend(context).then(function(){
                this.partial('../templates/profile/profile.hbs')
            })
        }
    },
    post: {
        login(context){
            let {username, password} = context.params;
            models.user.login(username, password)
            .then( (res)=> {
                context.redirect('#/home')
            })
            .catch((err) => console.error(err));
        },
        register(context){
            let {username, password, repeatPassword} = context.params;
            if (password === repeatPassword) {
                models.user.register(username, password)
                .then( (res) =>{
                    context.redirect('#/home')
                })
                .catch((err) => console.error(err));
            }
        }
    }
}