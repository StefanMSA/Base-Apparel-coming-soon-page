function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
console.log(mailfomat);
}
else
{
document.getElementById('para').innerHTML = "Please provide a valid email";
document.getElementById('mailInput').style.borderColor = 'red';
document.getElementById('para').style.color = 'red';
document.getElementById('errorImg').innerHTML = "<img src='images/icon-error.svg' >";
}
}

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);
