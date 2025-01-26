function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const resultDiv = document.getElementById('result');
  
    if (!height || !weight || height <= 0 || weight <= 0) {
      resultDiv.innerHTML = '<span>Please enter valid height and weight values.</span>';
      resultDiv.style.color = 'red';
      return;
    }
  
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  
    let category = '';
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }
  
    resultDiv.innerHTML = `Your BMI is <span>${bmi}</span> (${category}).`;
    resultDiv.style.color = '#444';
  }