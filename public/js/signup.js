// Sign up form handler
async function signupFormHandler(event) {
    event.preventDefault();
    // get the information from the sign up form
    const userName = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // if all three fields have content
    if (userName && email && password) {
      //  console.log(userName, email, password);
        // POST the new user to the user table in the database
        const response = await fetch('/api/user', {
            method: 'post',
            body: JSON.stringify({
                userName,
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
            
        });
        // when the fetch promise is fufilled, check the response status and convey the results
        if (response.ok) {
            alert('Account created! Logging you in now.');
            document.location.replace('/');
        } else {
            alert(response.statusText, "user not created" )
        }
    }
}

document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);