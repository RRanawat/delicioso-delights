let currentStep = 1;
const orderDetails = {};

function nextStep() {
    const currentStepElement = document.getElementById(`step-${currentStep}`);

    const inputElement = currentStepElement.querySelector('select, textarea, input');

    if (inputElement && inputElement.value.trim() === '') {
        alert('This is required information!');
        return;
    }

    orderDetails[`step-${currentStep}`] = inputElement.value.trim();

    currentStepElement.classList.remove('active');
    currentStep++;
    const nextStepElement = document.getElementById(`step-${currentStep}`);
    if (nextStepElement) {
        nextStepElement.classList.add('active');
    }
    localStorage.setItem("order-details", JSON.stringify(orderDetails));
}

window.onload = function () {
    const localStorageOrderDetails = JSON.parse(localStorage.getItem("order-details"));
    console.log(window.location);
    if (!(localStorageOrderDetails || (window.location.pathname == "/order.html" && window.location.pathname == "/order"))) {
        window.location = "/";
        return;
    }
    for (const number of [1, 2, 3, 4, 5, 6]) {
        const elem = document.getElementById(`review-step-${number}`);
        elem.innerText = localStorageOrderDetails[`step-${number}`].replaceAll("-", " ");
        if (number == 2) {
            const cakeName = localStorageOrderDetails[`step-2`];
            const img = document.getElementById("review-cake-image");
            if (cakeName == 'carrot-cake') {
                img.src = "/assets/images/carrot.png";
            } else if (cakeName == 'red-velvet') {
                img.src = "/assets/images/red.png";
            } else if (cakeName == 'chocolate') {
                img.src = "/assets/images/chocolate.png";
            } else if (cakeName == 'vanilla') {
                img.src = "/assets/images/vanilla.png";
            }
        }
    }
}

function placeOrder() {
    if (!localStorage.getItem("order-details")) {
        window.location = "/";
        return;
    }
    localStorage.removeItem("order-details");
    alert("Your order was placed!");
    window.location = '/';
}
