//import { registerDecorator } from "handlebars";
import models from '../models/index.js';
import extend from '../utils/context.js'
import docModifier from '../utils/docModifier.js'

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

            models.trek.getAll().then((res)=>{

                const treks = res.docs.map(docModifier);
                let myTreks = treks.filter((t) => t.uid === localStorage.getItem('userId'));

                console.log(treks);
                console.log(myTreks);
                
                context.myTreks = myTreks;
                context.myTreksCount = myTreks.length;

                extend(context).then(function(){
                    this.partial('../templates/profile/profile.hbs')
                })
            })

        }

    },
    post: {
        login(context){
            let {username, password} = context.params;
            models.user.login(username, password)
            .then( (res)=> {
                context.notifications = true;
                context.message = "Logged in succsessfully";
                context.redirect('#/trek/dashboard')
            })
            .catch((err) => console.error(err));

            
        },
        register(context){
            let {username, password, rePassword} = context.params;
            if (password === rePassword) {
                models.user.register(username, password)
                .then( (res) =>{
                    context.redirect('#/trek/dashboard')
                })
                .catch((err) => console.error(err));
            }
        }
    }
}