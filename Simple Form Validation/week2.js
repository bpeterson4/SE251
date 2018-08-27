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

    function Results(e)
    {
        if(Edit())
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
