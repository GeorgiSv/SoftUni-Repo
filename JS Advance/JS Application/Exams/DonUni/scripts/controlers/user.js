//import { registerDecorator } from "handlebars";
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
            let {username, password, rePassword} = context.params;
            if (password === rePassword) {
                models.user.register(username, password)
                .then( (res) =>{
                    context.redirect('#/user/login')
                })
                .catch((err) => console.error(err));
            }
        }
    }
}