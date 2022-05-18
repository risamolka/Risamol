let name=document.getElementById("exampleInputName1");
let email=document.getElementById("exampleInputEmail1");
function validate(){
    let rename = /^([A-Za-z\.\s]+)$/ 
    let regemail= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/ 
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
    else{
        return true;
        } 
}