export function calcForm() {
    const form    = document.getElementById('calc-form');
    const results = document.getElementById('results');
    const errors  = document.getElementById('form-error');
    
    function errorMessage(msg) {
        errors.innerHTML = msg;
        errors.classList.add('show');
        errors.classList.remove('hide');
        return false;
    }
    
    // <a href="#" id="rs">revise</a>`
    function showResults(calories) {
        results.innerHTML = `Your basal metabolic rate (BMR) is: <strong>${(calories).toFixed(2)} </strong> calories a day. <a href="#" id="rs">revise</a>`;
        results.classList.add('show')
        results.classList.remove('hide')
        errors.classList.add('hide')
        errors.classList.remove('show')
    }
    
    function resetForm(e) {
        if(e.target.id = 'rs') {
            e.preventDefault();
            results.classList.add('hide')
            results.classList.remove('show')
            form.reset()
        }
    }
    
    function submitHandler(e) {
        e.preventDefault();
    
        // Age
        let age = parseFloat(form.age.value);
        if(isNaN(age) || age < 0) {
            return errorMessage('Please enter a valid age');
        }
       
        // Height
        let height = parseFloat(form.height_cm.value);
        if(isNaN(height) || height < 0) {
            return errorMessage('Please enter a valid Height in centimeters');
        }        
        // Weight
        let weight = parseFloat(form.weight.value);
        if(isNaN(weight) || weight < 0) {
            return errorMessage('Please enter a valid weight in kilograms');
        }   
          
        let calories = 0;
        if(form.gender.value == 'Female') {
            calories = 655.09 + (9.56 * weight) + (1.84 * height) - (4.67 * age);
        }  else {
            calories = 66.47 + (13.75 * weight) + (5 * height) - (6.75 * age);
        }
     
        showResults(calories);
    }
    
    form.addEventListener('submit', submitHandler);
    results.addEventListener('click', resetForm, true);
}

calcForm()