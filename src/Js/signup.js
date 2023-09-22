let user;

document.getElementById("button").onclick = function () {
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    userName = document.getElementById("userName").value;
    dateOfBirth = document.getElementById("dateOfBirth").value;
    gender = document.getElementById("gender").value;
    email = document.getElementById("email").value;
    phoneNumber = document.getElementById("phoneNumber").value;
    createPassword = document.getElementById("createPassword").value;
    confirmPassword = document.getElementById("confirmPassword").value;
    terms = document.getElementById("terms").value;

    fullName = firstName +" " + lastName
    console.log(`Full name : ${fullName}`);
    if (userName.length <= 6){
        alert( "User Name must be greater than 6 letter")
    }
    else {
        console.log(`User name : ${userName}`);
    }
    console.log(`Date of birth: ${dateOfBirth}`);
    console.log(`Gender: ${gender}`);
    console.log(`Email: ${email}`);
    if (phoneNumber.toString().length !== 11){
        alert( "Your phone number is more or less than 11 digits")
    }
    else {
        console.log(`Phone number : ${phoneNumber}`);
    }
    if (createPassword !== confirmPassword){
        alert( "Something is wrong! \n Ensure your passwords are the same.")
    }
    else {
        console.log(`Password : ${confirmPassword}`);
    }   
    console.log(`Agreement : ${terms}`);
};

