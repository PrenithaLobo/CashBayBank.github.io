function modal()
{
    document.getElementById("bg-modal").style.display="flex"
}
function display(){
    document.getElementById("bg-modal").style.display="none"
}
function valuser()
{
    var username="user"
    var password="12345"

    var u=document.getElementById("user").value 
    var p=document.getElementById("pass").value
    if(username!=u)
    {
        document.getElementById("err").innerHTML="Incorrect Username"
        document.getElementById("user").style.borderBottom="1px solid red"
        return false
    }
    else if(password!=p)
    {
        document.getElementById("err").innerHTML="Incorrect Email Id"
        document.getElementById("pass").style.borderBottom="1px solid red"
        return false
    }
}

