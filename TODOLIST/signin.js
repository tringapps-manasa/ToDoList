function check(){
    var storedemail = localStorage.getItem('email');
    var storedPwd = localStorage.getItem('pwd');

    var email = document.getElementById('email');
    var pwd = document.getElementById('pwd');
    

    if(email == storedemail && pwd == storedPwd){
        alert('Successfully logged .');
    }else{
        alert('heloo..');
    }


 /*var Email= document.getElementById('email').value;
        console.log(Email);
         if(localStorage.getItem("email")==Email){
             console.log("emails");
         }
         else{
             alert("hello");
             document.write(lst.emails);
         }
         return false;*/
}