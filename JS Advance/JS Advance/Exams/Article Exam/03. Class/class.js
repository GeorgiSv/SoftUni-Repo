class Article{

    constructor(title, creator){
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
        this.idCOunt = 0;
    }

     get likes(){
         let result = "";
        if (this._likes.length === 0) {
            result = `${this.title} has 0 likes`;
             //console.log(`${this.title} has 0 likes`);
        }
        else if (this._likes.length === 1) {
            //console.log(`${this._likes[0].username} likes this article!`);
            result = `${this._likes[0].username} likes this article!`
        }
        else{
             //console.log(`${this._likes[0].username} and ${this._likes.length -1} others like this article!`);
             result = `${this._likes[0].username} and ${this._likes.length -1} others like this article!`
        }
        return result;
    }

    like(username){
        let userFound = this._likes.find(u => u.username === username);
        if (userFound) {
            throw new Error(`You can't like the same article twice!`);
        }
        if (username == this.creator) {
            throw new Error("You can't like your own articles!");
        }
        
        this._likes.push({
            username,
        })
        return `${username} liked ${this.title}!`;
    }
    dislike (username){
        let userFound = this._likes.find(u => u.username === username);

        if (!userFound) {
            throw new Error( "You can't dislike this article!");
        }

        let index = this._likes.indexOf(userFound);
        this._likes.splice(index, 1)
        return `${userFound.username} disliked ${this.title}`;
    }

    comment (username, content, id){

        id = Number(id);
        let commentFound = this._comments.find(c => c.id === id);

        if (!id || !commentFound) {
            this.idCOunt++;
            this._comments.push({
                id: Number(this.idCOunt),
                username,
                content,
                replies: []
            })

            return `${username} commented on ${this.title}`;
        }

        if (commentFound) {
            commentFound.replies.push({
                id: (Number(commentFound.id) + 0.1 + commentFound.replies.length / 10).toFixed(1),
                username ,
                content,
            });
            return "You replied successfully";
        }
    }

    toString(sortingType){
        let result = "";

        result += `Title: ${this.title}\n`;
        result += `Creator: ${this.creator}\n`;
        result += `Likes: ${this._likes.length}\n`;
        result += `Comments: \n`;

        if (sortingType == "asc") {
            this._comments.sort((a, b) => a.id - b.id).map(x =>{
                result += `-- ${x.id}. ${x.username}: ${x.content}\n`;
                x.replies.sort((a, b) => a.id - b.id).map(r =>{
                    result += `--- ${r.id}. ${r.username}: ${r.content}\n`;
                })
            })
        }
        else if (sortingType == "desc") {
            this._comments.sort((a, b) => b.id - a.id).map(x =>{
                result += `-- ${x.id}. ${x.username}: ${x.content}\n`;
                x.replies.sort((a, b) => b.id - a.id).map(r =>{
                    result += `--- ${r.id}. ${r.username}: ${r.content}\n`;
                })
            })
        }
        else if (sortingType == "username") {

            this._comments.sort((a , b) =>  a.username.localeCompare(b.username)).map(x =>{
                result += `-- ${x.id}. ${x.username}: ${x.content}\n`;
                x.replies.sort((a , b) =>  a.username.localeCompare(b.username)).map(r =>{
                    result += `--- ${r.id}. ${r.username}: ${r.content}\n`;
                })
            })
        }
        return result.trim();
    }
}


let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
console.log();

console.log(art.toString("asc"));
