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
    console.log(orderDetails);
}
