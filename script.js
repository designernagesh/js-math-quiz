let numberOne = document.getElementById("numberOne"),
    numberTwo = document.getElementById("numberTwo"),
    answerInput = document.getElementById("answerInput"),

    btnSkip = document.querySelector('.btnSkip'),
    btnSubmit = document.querySelector('.btnSubmit'),

    error = document.querySelector(".error"),
    result = document.querySelector(".result");    

    error.style.display = 'none';
    result.style.display = 'none';

    function firstFunction(){
      return (Math.floor(Math.random() * 20));
    }
    function secondFunction(){
      return (Math.floor(Math.random() * 50));
    }

    numberOne.value = firstFunction();  
    numberTwo.value = secondFunction();

submitQuiz = () => {
  if ( answerInput.value == "" ){
    result.style.display = 'none';
    error.style.display = 'block';
    error.innerHTML = 'Please, add the two numbers and answer it.'
  }
  else{
    if( parseInt(answerInput.value) !== ( parseInt(numberOne.value) + parseInt(numberTwo.value)) ){      
      result.style.display = 'none';
      error.style.display = 'block';
      error.innerHTML = 'Your answer is wrong. Please, try again.';
    }
    else{
      error.style.display = 'none';
      result.style.display = 'block';
      result.innerHTML = `Your Answer is:  <strong>${answerInput.value}</strong>`;
  
      let element =  document.createElement('div');
      element.setAttribute('class', 'text-success');
      element.textContent = 'Congratulations!';
      result.appendChild(element);
    }
  }
  
}
btnSubmit.addEventListener('click', submitQuiz);

skipQuiz = () => {  
  numberOne.value = firstFunction();
  numberTwo.value = secondFunction();
  answerInput.value = '';

  console.log(numberOne.value);
  console.log(numberTwo.value);

  error.style.display = 'none';
  result.style.display = 'none';
}

btnSkip.addEventListener('click', skipQuiz);