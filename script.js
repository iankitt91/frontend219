alert("open on desktop");
function fun(){
var a=document.getElementById('email').value;
var b=document.getElementById('password').value;
var c=document.getElementById('c_password').value;
if(a==""||b==""||c==""){
    alert("all fields are mandatory");
    return false;
}
else if(b.length<6){
    alert("passoword should be minimum of 6 characters");
    return false;
}
else if(b!=c){
    alert("enter same password");
    return false;
}
else{
    return true;
}
}