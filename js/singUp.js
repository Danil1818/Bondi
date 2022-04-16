window.onload = function () {

  // Variable
  let inputEmail = document.querySelector('.userName');
  let inputPass = document.querySelector('.userPass');
  let pText = document.querySelector('p');
  let btnShowPass = document.querySelector('.showPass');
  let btnNext = document.querySelector('.next');
  let btnNextLink = document.querySelector('.next a');
  // Event
  btnNext.addEventListener('click', () => {
    if ((inputEmail.value || inputPass.value) == '' || inputPass.value.length < 8) {       // If all bad
      inputEmail.classList.add('error');
      inputPass.classList.add('error');
      pText.classList.add('error__text');
      btnNextLink.setAttribute('href', '#');
    } else if ((inputEmail.value && inputPass.value) != '') {// If all good
      btnNextLink.setAttribute('href', 'index.html');
    } else {                                                 // Else fifti-fifti
      if (inputEmail.value == '') {
        inputEmail.classList.add('error');
        btnNextLink.setAttribute('href', '#');
      } else if (inputPass.value == '') {
        inputPass.classList.add('error');
        btnNextLink.setAttribute('href', '#');
      }
    }
  });
  btnShowPass.addEventListener('click', () => {
    if (inputPass.type == "password") {
      inputPass.setAttribute('type', 'text');
    } else {
      inputPass.setAttribute('type', 'password');
    }
  });

}