    function checkpassword() {
    var password1 = document.getElementById("deep1");
    var password2 = document.getElementById("deep2");
    var a = password1.value
    var b = password2.value
    

    if (a == b) {
        alert("registration done");  
    }
    else {        
        alert("password not matched:enter again");        
    }
  }
  

