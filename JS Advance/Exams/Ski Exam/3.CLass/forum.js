class Forum{
    constructor(){
        this._users = [];
        this._questions = [];
        this._id = Number(1);
        this._loggedUsers = [];
    }

    register(username, password, repeatPassword, email){
        if ((username == "" || password == ""|| repeatPassword == ""|| email =="")) {
             throw new Error("Input can not be empty");
        }
        if (password !== repeatPassword) {
            throw new Error("Passwords do not match");
        }

        let userFound = this._users.find(x => x.username === username || x.email === email) ;


        if (userFound) {
            throw new Error("This user already exists!");
        }

        this._users.push({
            username,
            password,
            email
        });

        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password){

        let userFound = this._users.find(x => x.username === username) ;

        if (!userFound) {
            throw new Error("There is no such user");
        }

        
        if (userFound.password === password) {
            this._loggedUsers.push(userFound);
            return "Hello! You have logged in successfully";
        }
    }

    logout(username, password){
        let userFound = this._users.find(x => x.username === username) ;

        if (!userFound) {
            throw new Error("There is no such user");
        }

        if (userFound.password === password) {
           let indexForRemove =  this._loggedUsers.indexOf(userFound);
           this._loggedUsers.splice(indexForRemove, 1);
            return "You have logged out successfully";
        }
    }

    postQuestion(username, question){
        let userFound = this._users.find(x => x.username === username);
        let userLogged = this._loggedUsers.includes(userFound);

        if (!(userFound) || !(userLogged)) {
            throw new Error("You should be logged in to post questions");
        }
        if (question === "") {
            throw new Error("Invalid question");
        }

        this._questions.push({
            question,
            id: this._id,
            username: userFound.username,
            answers: []
        });

        this._id++;
        return "Your question has been posted successfully";
    }

    postAnswer(username, questionId, answer){

        let userFound = this._users.find(x => x.username === username);
        let userLogged = this._loggedUsers.includes(userFound);

        if (!(userFound) || !(userLogged)) {
            throw new Error("You should be logged in to post answers");
        }
        if (answer === "") {
            throw new Error("Invalid answer");
        }

        let questionFOund = this._questions.find(q => q.id === questionId);

        if (!questionFOund) {
            
            throw new Error("There is no such question");
        }

        let resultAnswer = {
            username,
            answer
        }
        questionFOund["answers"].push(resultAnswer);

        return "Your answer has been posted successfully";
    }

    showQuestions(){

        let result = "";

        for (const question of this._questions) {
            result += `Question ${question.id} by ${question.username}: ${question.question}\n`;
            for (const line of question.answers) {
                //let result = question.answers[answer];
               result += `---${line.username}: ${line.answer}\n`;
            }
        }

        return result.trim();
    }
}

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan',1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael',2, "How old is she?");
forum.postAnswer('Michael',2, "Tell us how tall she is.");


console.log(forum.showQuestions());
