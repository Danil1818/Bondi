window.onload = function () {

  // Все переменные
  let emailTitle = document.querySelector('.email__subtitle');
  let passTitle = document.querySelector('.pass__title');
  // Инпуты
  let inputName = document.querySelector('.name');
  let inputSurName = document.querySelector('.surname');
  let inputEmail = document.querySelector('.email');
  let inputPass1 = document.querySelector('.input__pass-1');
  let inputPass2 = document.querySelector('.input__pass-2');
  let gender = document.querySelector('.gender');
  // Кнопки
  let btnNextLink = document.querySelector('.next__link');
  let btnNext = document.querySelector('.next');
  let showPass = document.querySelector('.show__pass');
  // Object
  const users = {
    name: '',
    surName: '',
    email: '',
    pass: '',
  };
  // События клика на кнопку
  btnNext.addEventListener('click', () => {
    if ((inputName.value || inputSurName.value || inputEmail.value || inputPass1.value || inputPass2.value) == '') {
      inputName.classList.add('error');
      inputSurName.classList.add('error');
      inputEmail.classList.add('error');
      inputPass1.classList.add('error');
      inputPass2.classList.add('error');
      emailTitle.classList.add('text__error');
      passTitle.classList.add('text__error');
      btnNextLink.setAttribute('href', '#');
    } else if (((inputName.value && inputSurName.value && inputEmail.value && inputPass1.value && inputPass2.value) != '') && (inputPass1.value == inputPass2.value)) {
      // Добавляем в обэкт Имя ползователя
      users.name = inputName.value;
      users.surName = inputSurName.value;
      // Добавляем в обэкт почту пользователя
      users.email = inputEmail.value + '@gmail.com';
      // Добавляем в обэкт пол пользователя
      users.gender = gender.value;
      // Добавляем в обэкт пароль пользователя
      users.pass = inputPass1.value;
      users.pass = inputPass2.value;
      btnNextLink.setAttribute('href', 'index.html');
    } else {
      inputName.classList.add('error');
      inputSurName.classList.add('error');
      inputEmail.classList.add('error');
      inputPass1.classList.add('error');
      inputPass2.classList.add('error');
      emailTitle.classList.add('text__error');
      passTitle.classList.add('text__error');
      inputPass1.value = '';
      inputPass2.value = '';
    }
  });

  // Скрыт/Показать пароль
  showPass.addEventListener('click', () => {
    if ((inputPass1.type && inputPass1.type) == 'password') {
      inputPass1.setAttribute('type', 'text');
      inputPass2.setAttribute('type', 'text');
    } else {
      inputPass1.setAttribute('type', 'password');
      inputPass2.setAttribute('type', 'password');
    }
  });

}