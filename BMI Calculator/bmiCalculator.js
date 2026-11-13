const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const bmi = document.querySelector('#bmi-value')
    
    if (height=='' || height<1 || height == NaN ||weight=='' || weight<1 || weight == NaN) {
        bmi.innerHTML = `<span>Enter valid height and weight values </span>`
    }
    else{
        bmi.innerHTML = (weight/((height*height)/10000)).toFixed(2)
    }

}
)