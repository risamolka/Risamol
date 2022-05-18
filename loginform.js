let name=document.getElementById("exampleInputName1");
let email=document.getElementById("exampleInputEmail1");
let phone=document.getElementById("exampleInputPhone1");
let pwd=document.getElementById("exampleInputPassword1");
// let error=document.getElementById("emailHelp");
function validate(){
    let rename = /^([A-Za-z\.\s]+)$/ 
    let regemail= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/ 
    let regexph = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
          if(!rename.test(name.value))
     {
        alert("Error: Name must contain only letters,dot and blank space");
        return false;       
      }
    else if(!regemail.test(email.value))
    {
       alert("Invalid email Id");
       return false;
     }
    else if(!regexph.test(phone.value)){
        alert("Invalid phone no");
        return false;
     }
    else{
    return true;
    } 
}
  

