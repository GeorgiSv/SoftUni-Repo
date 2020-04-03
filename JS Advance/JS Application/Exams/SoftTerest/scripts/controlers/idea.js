import extend from '../utils/context.js';
import models from '../models/index.js';
import docModifier from '../utils/docModifier.js'

export default{
    get:{
        dashboard(context){

            models.idea.getAll().then((res)=>{

                const ideas = res.docs.map(docModifier);
                
                context.ideas = ideas;
                extend(context).then(function(){
                    this.partial('../templates/ideas/dashboard.hbs')            
                })

            })
        },
        create(context){
            extend(context).then(function(){
                this.partial('../templates/ideas/create.hbs')            
            })
        },
        details(context){
            const {ideaId} = context.params;

            models.idea.get(ideaId).then((res)=>{
                const idea = docModifier(res)
                
                Object.keys(idea).forEach((key)=>{
                    context[key] = idea[key];
                })
                context.canComment = idea.uid !== localStorage.getItem('userId');
                extend(context).then(function(){
                    this.partial('../templates/ideas/details.hbs')
                })
            })
        }
    },
    post:{
        create(context){
            const data = { 
                ...context.params,
                uid: localStorage.getItem('userId'),
                comments:[],
                likes: 0
            }
            models.idea.create(data).then((res)=>{
                context.redirect('#/idea/dashboard')
            });
        }
    },
    del:{
        delete(context){
            const {ideaId} = context.params;
            models.idea.delete(ideaId).then((res) =>{
                context.redirect('#/idea/dashboard');
            })
        }
    },
    put:{
        comment(context){
            const {newComment, ideaId}  = context.params;
            
            models.idea.get(ideaId).then((res)=>{
                const idea = docModifier(res);
                idea.comments.push(localStorage.getItem('userEmail') + `: ` +  newComment); //
                return models.idea.comment(ideaId, idea);
            })
            .then(()=>{
                context.redirect(`#/idea/details/${ideaId}`)
            })
        },
        like(context){
             const {ideaId}  = context.params;
            
            models.idea.get(ideaId).then((res)=>{
                const idea = docModifier(res);
                idea.likes += 1; //localStorage.getItem('userEmail')
                
                return models.idea.like(ideaId, idea);
            }).then(()=>{
                context.redirect(`#/idea/details/${ideaId}`)
            })
        }
    }
}