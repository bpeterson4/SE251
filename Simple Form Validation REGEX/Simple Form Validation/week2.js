window.addEventListener('load', init)

function init(e)
{

    var firstName = document.querySelector('#first-name');
    var lastName = document.querySelector('#last-name');
    var email = document.querySelector('#email');
    var emailConfirm = document.querySelector('#email-confirm');
    var phoneNumber = document.querySelector('#phone');
    var submit = document.querySelector('#submit');
    var input = document.querySelectorAll('input');
    var span = document.querySelectorAll('span');
    var label = document.querySelectorAll('label');
    var fields = document.querySelectorAll("#form input[type=text]");
    var form = document.querySelector('#form');
    var confirm = document.querySelector('#confirmation');
    var info = document.querySelector('#info');


    submit.addEventListener('click', Edit);
    submit.addEventListener('click', Validate);
    submit.addEventListener('click', EmailValidation);
    submit.addEventListener('click', Results);

    function Edit(e)
    {
        isValid = true;
        for (let i = 0; i < fields.length; i++)
        {
            if (fields[i].value=="")
            {
                span[i].innerHTML = "*";
                span[i].style.color = "red"
                label[i].style.color = "red";
                isValid =  false;
            }
            else
            {
                span[i].innerHTML="";
                label[i].style.color = "black";
               
            }
        }
        if (email.value !== emailConfirm.value)
            {
                span[2].innerHTML = "Emails do not match";
                span[3].innerHTML = "Emails do not match"
                isValid = false;
            }
            else
            {
                span[2].innerHTML = "";
                span[3].innerHTML = "";
               
            }

            return isValid;
    }


    function Validate(e)
    {
        isValid = true;
        var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
        var phoneResult = phoneRGEX.test(phoneNumber.value);
        var nameRGEX = /^[A-Za-z ,.'-]+$/;
        var fnameResult = nameRGEX.test(firstName.value);
        var lnameResult = nameRGEX.test(lastName.value);
       
    

        if (phoneResult == false)
        {
            span[4].innerHTML = "Please enter a valid phone number";
            isValid = false;
        }
        else
        {
            span[4].innerHTML = "";
        }

        if(fnameResult == false)
        {
            span[0].innerHTML = "Please enter valid first name"
            isValid = false;
        }
        else
        {
            span[0].innerHTML = "";
        }

        if(lnameResult == false)
        {
            span[1].innerHTML = "Please enter valid last name"
            isValid = false;
        }
        else
        {
            span[1].innerHTML = "";
        }

        var emailRGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var emailResult = emailRGEX.test(email.value);
        var emailConfirmResult = emailRGEX.test(emailConfirm.value);

        if(emailResult == false)
        {
            span[2].innerHTML = "Please enter valid email address"
            isValid = false;
            
        }
        else
        {
            span[2].innerHTML = "";
        }
        if(emailConfirmResult == false)
        {
            span[3].innerHTML = "Please enter valid email address"
            isValid = false;
        }
        else
        {
            span[3].innerHTML = "";
        }

        return isValid;

    }

    function Results(e)
    {
        var person = {
            firstName:fnameResult.value,
            lastName:lnameResult.value,
            email:emailResult.value,
            emailConfirm:emailConfirmResult.value,
            phoneNumber:phoneResult.value
        }
        if(Edit() && Validate())
        {
            form.style.display = 'none';
            confirm.style.display = 'block';
            info.innerHTML = firstName.value + " " + lastName.value + "<br> " +email.value + "<br> " + phoneNumber.value;
           
        }
        else
        {
            form.style.display = 'block';
           
        }
    }
}