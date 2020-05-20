function cap()
{
    var alpha=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9]
    var a=alpha[Math.floor(Math.random()*62)]
    var b=alpha[Math.floor(Math.random()*62)]
    var c=alpha[Math.floor(Math.random()*62)]
    var d=alpha[Math.floor(Math.random()*62)]
    var e=alpha[Math.floor(Math.random()*62)]
    var f=alpha[Math.floor(Math.random()*62)]
    var captcha=a + b + c + d + e + f
    document.getElementById("capt").value=captcha
}
window.onload=cap

function validate(){
    var fn=document.getElementById("first").value
    var ln=document.getElementById("ln").value
    var phonenum=document.getElementById("phone").value
    var pass=document.getElementById("psw").value
    var confpass=document.getElementById("cpsw").value
    //firstname validation
    if(fn.length==0)
    {
        document.getElementById("fnmsg").innerHTML="**Please fill the First Name"
        return false
    }
    else if(fn.length<3)
    {
        document.getElementById("fnmsg").innerHTML="**First Name should have min 3 letters"
        return false
    }
    else if(fn.length>15)
    {
        document.getElementById("fnmsg").innerHTML="**First Name can have max 15 letters"
        return false
    }
    //phonenum validation
    if(phonenum.length==0)
    {
        document.getElementById("phonemsg").innerHTML="Phone number cannot be empty"
        return false
    }
    else if(isNaN(phonenum))
    {
        document.getElementById("phonemsg").innerHTML="Phone number should contain only digits"
        return false
    }
    else if(phonenum.length<10)
    {
        document.getElementById("phonemsg").innerHTML="Phone number is less than 10 digits"
        return false
    }
    else if(phonenum.length>10)
    {
        document.getElementById("phonemsg").innerHTML="Phone number is more than 10 digits"
        return false
    }
    else if(phonenum.charAt(0)<6)
    {
        document.getElementById("phonemsg").innerHTML="Phone number should start from 6 or 7 or 8"
        return false
    }
 //email validation
var e=document.getElementById("email").value
var emailres=/^[a-z](@yahoo.com)$|(@gmail.com)$|(@rediffmail.com)$|(@hotmail.com)$/.test(e)
if(emailres==false)
{
    document.getElementById("emailmsg").innerHTML="**Incorrect Email-ID"
    return false
}
//password validation
    if(pass.length==0)
    {
        document.getElementById("pswmsg").innerHTML="**Please fill the password"
        return false
    }
    else if(pass.length<6)
    {
        document.getElementById("pswmsg").innerHTML="**Password should have min 6 characters"
        return false
    }
    if(confpass!=pass)
    {
        document.getElementById("cpswmsg").innerHTML="**Password and Confirm Password do not match"
        return false
    }
    //date of birth
    var dateofbirth=document.getElementById("dob").value
    if(dateofbirth.length==0)
    {
        document.getElementById("dobmsg").innerHTML="**Date of Birth cannot be empty"
        return false
    }

    // gender validation
    var gen=document.formname.gender
    for(let i=0;i<gen.length;i++)
    {
        if(gen[i].checked)
        {
            return true
        }
        else{
            document.getElementById("gendermsg")="**Please select the gender"
            return false
        }
    }
  //Captcha validation
    var enteredcaptcha=document.getElementById("entercapt").value
    if(enteredcaptcha.length==0)
    {
        document.getElementById("capmsg").innerHTML="**Enter the captcha value"
        return false
    }
    else if(enteredcaptcha!=document.getElementById("capt").value)
    {
        document.getElementById("capmsg").innerHTML="**Incorrect Captcha"
        return false
    }

}
