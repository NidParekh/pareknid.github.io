/* Nidhi Parekh 
This is my portfolio including my special interests, resume, and contact form */


function contact()
{
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var feedback = document.getElementById("msg").value;

    var output = document.getElementById("output");
    output.innerHTML="Thank you "+fname+" "+lname+" for your feedback!!";
    output.style.color = "green";
}