const form = document.querySelector('form');
const fullName = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const subject = document.getElementById("subject")
const mess = document.getElementById("message")


function sendEmail() {
    const bodyMessage =`Full Name:  ${fullName.value}<br> Email: ${email.value}<br> phone Number: ${phone.value}<br> Message: ${mess.value}`;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "username",
        Password: "password",
        To: "them@website.com",
        From: "yougisp.com",
        Subject: "This is the subject",
        Body: "And this is the body",
    }).then(
        
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});