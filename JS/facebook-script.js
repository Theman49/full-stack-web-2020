var database = [
    {
        username: "andrei",
        password: "supersecret",
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
]

var newsFeed = [
    {
        username: "Bob",
        timeline: "I so tired learning this!"
    },
    {
        username: "Sally",
        timeline: "Javascript is so coll!"
    },
    {
        username: "Mitch",
        timeline: "Who am I ???!"
    }
]

var usernamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password){
    for(var i=0; i < database.length; i++){
        if(database[i].username === username && 
            database[i].password === password){
                return true;
        }
    }
    return false;
}


function signIn(user, pass) {
    if(isUserValid(user, pass)){
            console.log(newsFeed);
    } else {
        alert("Wrong username and password");
    }
}

signIn(usernamePrompt, passwordPrompt);

