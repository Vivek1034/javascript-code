const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.5) {
      results.innerHTML = `<span class="underweight">Your BMI is ${bmi} (Underweight)</span>`;
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
      results.innerHTML = `<span class="normal">Your BMI is ${bmi} (Normal weight)</span>`;
    } else if (bmi >= 25 && bmi < 29.9) {
      results.innerHTML = `<span class="overweight">Your BMI is ${bmi} (Overweight)</span>`;
    } else {
      results.innerHTML = `<span class="obese">Your BMI is ${bmi} (Obese)</span>`;
    }
    
  }
});