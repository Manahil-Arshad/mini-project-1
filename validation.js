function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username";
        return false;
    }
    // else if(document.Formfill.Username.value.lenght=6)
    // {
    //     document.getElementById("result").innerHTML="Atleast six letters"
    //     return false;
    // }
    else if (document.Formfill.Email.value=="")
    {
        document.getElementById("result").innerHTML="Enter your email"
        return false;
    }
    else if (document.Formfill.Password.value=="")
    {
        document.getElementById("result").innerHTML="Enter your password"
        return false;
    }
    // else if(document.Formfill.cpassword.value="")
    // {
    //     document.getElementById("result").innerHTML="Enter confirmed password"
    //     return false;
    // }
    // // else if(document.Formfill.Password.value!==document.Formfill.cpassword.value)
    // // {
    // //     document.getElementById("result").innerHTML="Password doesn't match"
    // //     return false;
    // // }
    // else if(document.Formfill.cpassword.value.lenght<6)
    // {
    //     document.getElementById("result").innerHTML="Password must be 6-digits "
    //     return false;
    // }
}