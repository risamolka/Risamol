let name=document.getElementById("exampleInputName1");
let phone=document.getElementById("exampleInputPhone1");
let email=document.getElementById("exampleInputEmail1");
let fname=document.getElementById("exampleInputName");
let city=document.getElementById("exampleInputCity");
let country=document.getElementById("exampleInputCountry");
let msg=document.getElementById("msg");
let progress=document.getElementById("progress-bar");
let pwd=document.getElementById("exampleInputPassword1");
 function validate(){
    let rename = /^([A-Za-z\.\s]+)$/ 
    let regexph = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    let regemail= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/ 
    let refname = /^([A-Za-z]+)$/ 
    let recity = /^([A-Za-z\.,-\s]+)$/ 
    let recountry = /^([A-Za-z\.,-\s]+)$/ 
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
            else  if(!refname.test(fname.value)){
        alert("Invalid first name");
        return false;
     }
     else if(!recity.test(city.value)){
        alert("Invalid city name");
        return false;
     }
     else if(!recountry.test(country.value)){
        alert("Invalid country name");
        return false;
     }
    else {
    return true;
     }
}

function passval(){
   var x=pwd.value;
      let regExWeak=/^([a-z]+){4,}$/
    let regExMedium=/^([A-Za-z]+){6,}$/
    let regExGood=/^([A-Za-z0-9]+){8,}$/
    let regExStrong=/^([A-Za-z0-9\!@#$%^&*()]+){10,}$/
   
   if(x!="")
   {
      if(!regExWeak.test(x))
      {
         if(!regExMedium.test(x))
         {
            if(!regExGood.test(x))
            {
            if(!regExStrong.test(x))
            {
               msg.innerHTML= "";
            }
               else{ msg.innerHTML= "Strong Password ";
                progress.style.width="100%";
              progress.style.backgroundColor="green";}
       }   else { msg.innerHTML= "Good Password "; 
       progress.style.width="80%";
      progress.style.backgroundColor="lightgreen";}
    }
       
        else { msg.innerHTML= "Medium Password "; 
         progress.style.width="60%";
        progress.style.backgroundColor="blue";}
      }
            else{  msg.innerHTML= "Weak Password ";
            progress.style.width="40%";
            progress.style.backgroundColor="orange"; }
    }
      else
      { 
          msg.innerHTML= "Password is empty";
          progress.style.width="10%";
          progress.style.backgroundColor="red";
      }

}  
      
   
     
           
              
                                 
                              
               
     

