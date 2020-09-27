document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    document.getElementById('contact-form').reset();
    if (name.length > 3 && email.length > 3 && message.length > 3) {
        sendEmail(name, email, message);
    } else {
        show("danger", "Enter details correctly");
    }
}

// send email
function sendEmail(name, email, message) {
    Email.send({
        Host: 'smtp.gmail.com',
        Username: 'abhijitapd231@gmail.com',
        Password: 'nxbihnjdsogiobjw',
        To: "abhijitapd231@gmail.com",
        From: 'abhijitapd231@gmail.com',
        Subject: `${name} sent you a message`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,

    }).then((message) => show("success", "Mail sent successfully !"))
}

//alert  

function show(alerttype, message) {
    let msg = document.getElementById('messageAlert');
    let boldtext;
    if (alerttype == 'success') {
        boldtext = 'Success ';
    } else {
        boldtext = 'Error! ';
    }

    msg.innerHTML = `
                    <div class="alert alert-${alerttype} alert-dismissible fade show" role="alert">
                        <strong>${boldtext}</strong>${message}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div> `;
    setTimeout(() => {
        msg.innerHTML = '';
    }, 2000);


}