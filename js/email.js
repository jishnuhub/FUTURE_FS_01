emailjs.init({
    publicKey: "OniK7qDGvZXD0exgN"
});

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formStatus.className = "text-primary";
    formStatus.textContent = "Sending message...";

    emailjs.sendForm(
        "service_kcn9o0v",
        "template_si928pc",
        this
    )
    .then(() => {
        formStatus.className = "text-success";
        formStatus.textContent = "Thank you! Your message has been sent successfully.";
        contactForm.reset();
    })
    .catch(() => {
        formStatus.className = "text-danger";
        formStatus.textContent = "Message could not be sent. Please try again later.";
    });
});