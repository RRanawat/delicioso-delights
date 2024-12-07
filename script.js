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
    for(const number of [1,2,3,4,5,6]) {
        const elem = document.getElementById(`review-step-${number}`);
        elem.innerText = localStorageOrderDetails[`step-${number}`].replaceAll("-", " ");
    }
}
