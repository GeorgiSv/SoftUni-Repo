import extend from '../utils/context.js';
import models from '../models/index.js';
import docModifier from '../utils/docModifier.js'

export default{
    get:{
        dashboard(context){

            models.cause.getAll().then((res)=>{

                const causes = res.docs.map(docModifier);
                
                    context.causes = causes;
                extend(context).then(function(){
                    this.partial('../templates/causes/dashboard.hbs')            
                })

            })
        },
        create(context){
            extend(context).then(function(){
                this.partial('../templates/causes/create.hbs')            
            })
        },
        details(context){
            const {causeId} = context.params;

            models.cause.get(causeId).then((res)=>{
                const cause = docModifier(res)
                
                Object.keys(cause).forEach((key)=>{
                    context[key] = cause[key];
                })
                context.canDonate = cause.uid !== localStorage.getItem('userId');
                extend(context).then(function(){
                    this.partial('../templates/causes/details.hbs')
                })
            })
        }
    },
    post:{
        create(context){
            const data = { 
                ...context.params,
                uid: localStorage.getItem('userId'),
                collectedFunds: 0,
                donors:[]
            }
            models.cause.create(data).then((res)=>{
                context.redirect('#/cause/dashboard')
            });
        }
    },
    del:{
        close(context){
            const {causeId} = context.params;
            models.cause.close(causeId).then((res) =>{
                context.redirect('#/cause/dashboard');
            })
        }
    },
    put:{
        donate(context){
            const {causeId, currentDonation}  = context.params;

            models.cause.get(causeId).then((res)=>{
                const cause = docModifier(res);
                cause.collectedFunds += Number(currentDonation);
                cause.donors.push(localStorage.getItem('userEmail'));
                
                return models.cause.donate(causeId, cause);
            })
            .then((res)=>{
                context.redirect('#/cause/dashboard')
            })
        }
    }
}