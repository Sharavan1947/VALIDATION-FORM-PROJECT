function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }
    function validateEmail(email) {
        // Regular expression to check if the email contains "@" character
        var emailPattern = /@/;
        
        // Test if the email matches the pattern
        if (emailPattern.test(email)) {
          return true; // Email is valid
        } else {
          return false; // Email is not valid
        }
      }

    // var email = document.forms['myForm']["femail"].value;
    // if (email.length>15){
    //     seterror("email", "*Email length is too long");
    //     returnval = false;
    // }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should not be 123456789 and must be a 10-digits numbers");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length <8){

        // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
        seterror("pass", "*Password should be atleast 8 characters long!");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    return returnval;
}

