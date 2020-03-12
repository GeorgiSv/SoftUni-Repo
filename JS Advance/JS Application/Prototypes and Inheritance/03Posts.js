function solve(){
    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }
    
        toString(){
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }
    
    class SocialMediaPost extends Post {
    
        constructor(title, content, likes, dislikes){
            super(title,content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
    
            this.comments = [];
        }
    
        addComment(comment){
            this.comments.push(comment);
        }
    
        toString(){
            let result = `Post: ${this.title}\nContent: ${this.content}\n`;
            result += `Rating: ${this.likes - this.dislikes}\nComments:\n`;
           
            for (let comm of this.comments) {
                result += ` * ${comm}\n`;
            }
    
            return result;
        }
    }
    
    class BlogPost extends Post {
    
        constructor(title, content){
            super(title,content);
            this.views = 0;
        }
    
        view(){
            this.views++;
            return this;
        }
    
        toString(){
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }
    
    return {Post, SocialMediaPost, BlogPost}
}



let post = new Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
