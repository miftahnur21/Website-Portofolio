// Inisialisasi EmailJS dengan public key (dari dashboard)
(function () {
    emailjs.init({
        publicKey: "yaXdudQ0xjeWUp_iI", // ganti dengan public key dari EmailJS
    });
})();

// Tangani submit form
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // cegah reload default

    emailjs.sendForm("service_axex9be", "template_qimma0l", this)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Thank you for contacting me. I will reply as soon as possible.',
                showConfirmButton: false,
                timer: 3000
            });
            this.reset();
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to send message. Please try again later!',
            });
        });
});
