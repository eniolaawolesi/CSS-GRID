const form = document.getElementById('form')
const firstName = document.getElementById('fname')
const lastName = document.getElementById('lname')
const email = document.getElementById('email')
const password = document.getElementById('password')

let isValid;

form.addEventListener("submit", (e) => {
    isValid = true
    checkInputs()
    
    if (!isValid) {
        e.preventDefault()
    //preventDefault vai cancelar o evento padrão do browser
    }
})

function checkInputs() {
    const firstNameValue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const emailValue = email.value.trim()
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordValue = password.value.trim()


    if(firstNameValue === '') {
        //mostrar o erro
        //adicionar a classe erro
        setErrorFor(firstName)
    }else {
        successValidation(firstName)
    }

    if(lastNameValue === '') {
        setErrorFor(lastName)
    }else {
        successValidation(lastName)
    }

    if(emailValue === '') {
        setErrorFor(email)
    }else if (!emailValue.match(emailFormat)) {
        setErrorFor(email)
    }else {
        successValidation(email)
    }

    if(passwordValue === '') {
        setErrorFor(password)
    }else if (passwordValue.length < 8) {
        setErrorFor(password)
    }else {
        successValidation(password)
    }
}

function setErrorFor(input) {
    const trialControl = input.parentElement;
    //parentElement vai retornar uma referência direta do pai
    isValid = false
    trialControl.className = "trial__control error";
}

function successValidation(input) {
    const trialControl = input.parentElement;

    trialControl.className = "trial__control success";
}
