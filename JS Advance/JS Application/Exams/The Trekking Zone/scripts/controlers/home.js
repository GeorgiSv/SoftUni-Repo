import extend from '../utils/context.js';

export default{
    get:{
        home(context){

            extend(context).then(function(){
                context.headerLogIn = localStorage.getItem("isLogged");;
                    this.partial('../templates/home/home.hbs')
                })
        }
    }
}