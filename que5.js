// window.addEventListener("DOMContentLoaded", () => {
//     validate_date();
// })
// function validate_date()
// {
//     var date = new Date(), today = date.getFullYear()+"-"+(date.getMonth() + 1)+"-"+date.getDate();
//     document.getElementById("ddate").setAttribute("min", today);
// }

function validation(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phno = document.getElementById('phno').value;
    var airline = document.getElementById('airline').value;
    var ddate = document.getElementById('ddate').value;
    var adate = document.getElementById('adate').value;
    var dtime = document.getElementById('dtime').value;
    var atime = document.getElementById('atime').value;
    var idproof = document.getElementById('idproof').value;
    var adno = document.getElementById('adno').value;
    var nop = document.getElementById('nop').value;
    var city = document.getElementById('city').value;

    if(name==""){
        alert("Please fill in the details");
        return false;
    }
    if(name.length < 3){
        alert("Name must contain minimum of 3 characters");
        return false;
    }

    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if(atpos < 1 || ( dotpos - atpos < 2 ))
    {
        alert("Enter valid email ID");
        return false;
    }

    if(isNaN(phno) || phno.length != 10){
        alert("Enter valid Phone Number");
        return false;
    }

    if(airline==""){
        alert("Please choose an option");
        return false;
    }

    if(city==""){
        alert("Please type your destination");
        return false;
    }

    if(ddate==""){
        alert("Choose date");
        return false;
    }

    if(dtime==""){
        alert("Choose time");
        return false;
    }

    if(adate==""){
        alert("Choose date");
        return false;
    }

    if(atime==""){
        alert("Choose time");
        return false;
    }

    adno.value = new Array(adno.value.length-3).join('x') +
    adno.value.substr(ssn.value.length-4, 4);
    if(isNaN(adno) || adno.length != 12){
        alert("Please enter 12-digit aadhaar number");
        return false;
    }

    if(idproof==""){
        alert("Please attach ID proof");
        return false;
    }

    if(nop=""){
        alert("Enter number of passengers");
        return false;
    }

    return alertbox();
}

function alertbox(){
    let name = document.getElementById('name').value;
    alert("Application for "+name+" is successful!");
}