function validateForm(){
var name=document.form1.name.value;
if(name.length<1){
alert("not null");
 
return=false;
}
else{
document.getElementById("nameloc").innerHTML="<img src='checked.gif'/>";
return=true;
}

var phone=document.form1.phone.value;
if(phone==10){
document.getElementById("ph").innerHTML="<img src='checked.gif'/>";
return=true;
}
else{
document.getElementById("ph").innerHTML="<img src='unchecked.gif'/> phone no contain must 10 numbers";
return=true;
}

var inp=/^[a-zA-Z0-9.!#$%&`*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:[a-zA-Z0-9-]+)*$/;
if(input.value.match(inp)){
alert("valid email address!");
return=true;
}else{
alert("invalid email address!");
document.form.email.focus();
return=false;
}
}
