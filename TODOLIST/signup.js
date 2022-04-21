function store(){

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('pwd').value;
    /*let lists={
            "lst":[]
        }
        lists.lst.push({
            "fnames":fname,
            "lnames":lname,
            "emails":email,
            "pwds":pwd,
            "list":[]});

    localStorage.setItem("lists",JSON.stringify(lists));*/
    if(lists.value.length == 0){
        alert('Please fill in details');

    }
    else{
        localStorage.setItem('fname', fname.value);
        localStorage.setItem('lname', lname.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('pwd', pwd.value);
        alert('Your account has been successfully created');
    }
//return false;
}