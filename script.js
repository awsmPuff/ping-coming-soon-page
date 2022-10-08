const submit = document.querySelector(".submit");
const email = document.querySelector(".email");
const errorMessage = document.querySelector(".error-message");
const emptyMessage = document.querySelector(".empty-message");
const successMessage = document.querySelector(".success-message");

submit.addEventListener("click", (e) => {
    if(email.value) {
        const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
        if(regexMatch) {
            e.preventDefault();
            successMessage.style.display = "block";
            errorMessage.style.display = "none";
            emptyMessage.style.display = "none";
            email.style.outline = "transparent";
        } else {
            successMessage.style.display = "none";
            errorMessage.style.display = "block";
            emptyMessage.style.display = "none";
            email.style.outline = "solid 1px hsl(354, 100%, 66%)";
        }
    } else {
        e.preventDefault();
        successMessage.style.display = "none";
        errorMessage.style.display = "none";
        emptyMessage.style.display = "block";
        email.style.outline = "solid 1px hsl(354, 100%, 66%)";
    }
})