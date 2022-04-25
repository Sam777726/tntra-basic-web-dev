

function validateForm() {
    let name = document.forms["form"]["name"].value;
    let email = document.forms["form"]["email"].value;
    let pno = document.forms["form"]["pno"].value;
    let msg = document.forms["form"]["msg"].value;
    let gender = document.forms["form"]["gender"].value;
    

    let alrt = "";

    if (name == "" || /^[a-zA-Z]+$/.test(name)==false) {
        alrt+="name must be valid\n"
    }

    if (email.indexOf('@') == -1 || email.indexOf(".") == -1){
        alrt+="email must be valid\n"
    }

    if(pno.length>0){
        if (pno.length!=10){
            alrt+="phone number should have 10 digits.\n"
        }
    }

    if(msg == ""){
        alrt+="Message is required\n"
    }
    if(gender == "" ){
        alrt+="gender must be chosen\n"
    }    

    if(alrt!=""){
        alert(alrt);
        return false;
    }
  }

