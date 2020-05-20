function onconfirm()
{
    var currentbal=document.getElementById("cb").value
    var choice=document.getElementById("drop").value
    var amt=document.getElementById("amt").value
    if(choice=="Deposit")
    {

        document.getElementById("cb").value=Number(currentbal)+Number(amt)
        currentbal=document.getElementById("cb").value
        var desc=document.getElementById("desc").value

        var tabledep=document.getElementById("table1")
        var rowd=tabledep.insertRow(-1)
        var cell1=rowd.insertCell(0)
        var cell2=rowd.insertCell(1)
        cell1.innerHTML=amt
        cell2.innerHTML=desc
    }
    else if(choice=="Withdraw")
    {
        currentbal=Number(document.getElementById("cb").value)
        var amt=Number(document.getElementById("amt").value)    

        if(amt>currentbal)
        {
            alert("You have insufficient balance in your account!!!")
        }
        else
        {

            currentbal=Number(currentbal)-Number(amt)
            document.getElementById("cb").value=currentbal

            var desc=document.getElementById("desc").value
    
            var tablew=document.getElementById("table2")
            var roww=tablew.insertRow(-1)
            var cell3=roww.insertCell(0)
            var cell4=roww.insertCell(1)
            cell3.innerHTML=amt
            cell4.innerHTML=desc
       
        }
    
          
    }
   
}
function reset()
{
    document.getElementById("amt").value=""
    document.getElementById("desc").value=""
    document.getElementById("drop").value=""
    
}

