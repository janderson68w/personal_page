const form = document.getElementById("contact-form");
const submitButton = document.querySelector(".submit");
const successMessage = document.getElementById("form-submitted-msg");
const formElements = [...form.elements];
//check for validity
const allInputValid = () => {
    const valid = formElements.every((element) => {
        if (element.nodeName === 'SELECT') {
            return element.value !== "Please select an option"
        } else {
            return element.checkValidity()
        };
    });

    return valid
};
//function for handle changes
const handleChange = () => {
    formElements.forEach((element) => {
        if (!element.checkValidity()
            && element.nodeName !== 'BUTTON'
        ) {
            element.style.borderColor = "red";
            element.nextElementSibling.style.color = "red";
            element.nextElementSibling.style.display = "block";
            element.previousElementSibling.style.color = "red";
        };
        if (element.checkValidity()
            && element.nodeName !== 'BUTTON'
        ) {
            element.style.borderColor = "#CED4DA";
            element.nextElementSibling.style.color = "#CED4DA";
            element.nextElementSibling.style.display = "none";
            element.previousElementSibling.style.color = "#212529";
        };
    });
    if (allInputValid()) {
        submitButton.removeAttribute("disabled", "")
    } else {
        submitButton.setAttribute("disabled", "")
    };
};

//function for form submission
const handleSubmit = (e) => {
    e.preventDefault()

    if (allInputValid()) {
        successMessage.style.display = "block"
        form.reset()
        submitButton.setAttribute("disabled", "")
        setTimeout(() => {
            successMessage.style.display = "none"
        }, 5000)
    };
};

formElements.forEach((element) => {
    element.addEventListener("change", handleChange)
})

form.addEventListener("submit", (e) => handleSubmit(e))