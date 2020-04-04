import extend from '../utils/context.js';
import models from '../models/index.js';
import docModifier from '../utils/docModifier.js'

export default{
    get:{
        dashboard(context){

            models.trek.getAll().then((res)=>{

                const trek = res.docs.map(docModifier);
                    context.treks = trek;
                extend(context).then(function(){
                    this.partial('../templates/home/loggedInHome.hbs')            
                })

            })
        },
        create(context){
            extend(context).then(function(){
                this.partial('../templates/trecks/create.hbs')            
            })
        },
        details(context){
            const {trekId} = context.params;
            
            models.trek.get(trekId).then((res)=>{
                const trek = docModifier(res)
                
                Object.keys(trek).forEach((key)=>{
                    context[key] = trek[key];
                })
                context.canLike = trek.uid !== localStorage.getItem('userId');
                extend(context).then(function(){
                    this.partial('../templates/trecks/details.hbs')
                })
            })
        },
        edit(context){
            const {trekId} = context.params;

            models.trek.get(trekId).then((res)=>{
                const trek = docModifier(res)
                Object.keys(trek).forEach((key)=>{
                    context[key] = trek[key];
                })
                extend(context).then(function(){
                    this.partial('../templates/trecks/edit.hbs')
                })
            })
        }
    },
    post:{
        create(context){
            const data = { 
                ...context.params,
                uid: localStorage.getItem('userId'),
                likes: 0,
                organiser: localStorage.getItem('userEmail')
            }
            models.trek.create(data).then((res)=>{
                context.redirect('#/trek/dashboard')
            });
        }
    },
    del:{
        delete(context){
            const {trekId} = context.params;
            models.trek.close(trekId).then((res) =>{
                context.redirect('#/trek/dashboard');
            })
        }
    },
    put:{
        edit(context){
            console.log(context.params);
            let currentTreckId = context.params.trekId;
            let currentTreck = {};

            models.trek.get(currentTreckId).then((res)=>{
                const trek = docModifier(res);
                currentTreck = trek;
                
                let newTreckPRop = this.params;
                currentTreck.location = newTreckPRop.location;
                currentTreck.description = newTreckPRop.description;
                currentTreck.dateTime = newTreckPRop.dateTime;
                currentTreck.imageURL = newTreckPRop.imageURL;
                
                return models.trek.edit(currentTreckId, currentTreck);
            }).then(()=>{
                context.redirect(`#/trek/details/${currentTreckId}`)
            })
        },
        like(context){
            const {trekId}  = context.params;
           
           models.trek.get(trekId).then((res)=>{
               const trek = docModifier(res);
               trek.likes += 1; //localStorage.getItem('userEmail')
               
               return models.trek.like(trekId, trek);
           }).then(()=>{
               context.redirect(`#/trek/details/${trekId}`)
           })
       }
    }
}