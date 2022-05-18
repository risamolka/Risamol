let name=document.getElementById("exampleInputName1");
let email=document.getElementById("exampleInputEmail1");
let error=document.getElementById("emailHelp");
let pwd=document.getElementById("exampleInputPassword1");
let phone=document.getElementById("exampleInputPhone1");
function validate(){
  
    if(name.value.trim()=="" ){
        alert("Username cannot be empty");
        return false;
    }
    else{
    let re = /(^[A-Za-z\.\s]+)$/ ;
    if(!re.test(name.value)) {
      alert("Error: Name must contain only letters,dot and blank space");
      return false;
       }
    else{
        return true;
    }
  }
    if(email.value.trim()==""){
        alert("Email cannot be empty");
        return false;
    }
    else{
    let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/ ;
    if(regexp.test(email.value)){
        error.innerHTML="valid";
        error.style.color= "green";
        return true;
    }
    else{
    alert("Invalid email Id");
        return false;
    }
    }
    if(phone.value.trim()==""){
        alert("Phone number cannot be empty");
        return false;
    }
    else{
     let regexph = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/ ;
    if(regexph.test(phone.value)){
        return true;
    }
    else{
    alert("Invalid phone number");
        return false;
    }
}
}
