var emailArray=[];
var passwordArray=[];

var loggedIn = false;

function register(){
    event.preventDefault()
    var email = document.getElementById("registerName").value;
    var password = document.getElementById("registerPassword").value;
    var passwordRetype = document.getElementById("registerPassword2").value
    if (email == ""){
        alert("Email required.");
        return ;
    }
    else if (password == ""){
        alert("Password required.");
        return ;
    }
    else if (passwordRetype == ""){
        alert("Password required.");
        return ;
    }
    else if ( password != passwordRetype ){
        alert("Check your passwords");
        return;
    }
    else if(emailArray.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password)
        alert(email + ", welcome to our webpage!")
        document.getElementById("registerName").value ="";
        document.getElementById("registerPassword").value="";
        document.getElementById("registerPassword2").value="";
    }
    else{
        alert(email + " has already been registered");
        return ;
    }
}
function login(){
    event.preventDefault()
    var email = document.getElementById("loginName").value;
    var password = document.getElementById("loginPassword").value
    var i = emailArray.indexOf(email)
    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Password required.");
            return ;
        }
        alert("Password does not match.");
        return ;
    }
    else {
        alert("Welcome back!");
        window.location.href = "../postLogin/index.html";
        loggedIn = true;
        document.getElementById("loginName").value ="";
        document.getElementById("loginPassword").value="";
        return ;
    
    }
}


localStorage.booksRead = JSON.stringify(0);
var newbook = 0;




function bookAdd() {
    newbook = parseInt(localStorage.booksRead) + 1;
    localStorage.booksRead = JSON.stringify(newbook);
}

function booksRead() {
    var newString = "Stories read: " + localStorage.booksRead;
    document.getElementById("read").innerText = newString;
}