let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

//-----------//

function handleSignUpFunc() {
    //   const SignUpBtn = document.getElementById("signUpBtn");
    const userName = document.getElementById("userNameInput").value;
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    const confirmPass = document.getElementById("confirmPassInput").value;

    const userLoginLogger = JSON.parse(
        localStorage.getItem("userLoginLogger") || "[]"
    );

    const newUser = {
        userName: userName,
        email: email,
        password: password,
        confirmPass: confirmPass,
    };

    userLoginLogger.push(newUser);

    localStorage.setItem("userLoginLogger", JSON.stringify(userLoginLogger));
}


function authorizeUser() {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;

    const foundUser = savedUsers.find(user => user.email === email && user.password === password);

    if (foundUser !== null && foundUser !== undefined) {
        window.location.href = 'homepage.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

