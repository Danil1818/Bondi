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
  // Массивы 
  const users = {
    name: '',
    surName: '',
    email: '',
    pass: '',
  };

  btnNext.addEventListener('click', myFucn(inputName.value, inputSurName.value, inputEmail.value, inputPass1.value, inputPass2.value));
  function myFucn(name, surname, email, pass1, pass2) {
    if ((name || surname || email || pass1 || pass2) == '') {
      inputName.classList.add('error');
      inputSurName.classList.add('error');
      inputEmail.classList.add('error');
      inputPass1.classList.add('error');
      inputPass2.classList.add('error');
      emailTitle.classList.add('text__error');
      passTitle.classList.add('text__error');
      btnNextLink.setAttribute('href', '#');
    } else if (((name || surname || email || pass1 || pass2) != '') && (pass1 == pass2)) {
      // Добавляем в обэкт Имя ползователя
      users.name = name;
      users.surName = surname;
      // Добавляем в обэкт почту пользователя
      users.email = email + '@gmail.com';
      // Добавляем в обэкт пол пользователя
      users.gender = gender.value;
      // Добавляем в обэкт пароль пользователя
      users.pass = pass1.value;
      users.pass = pass2.value;
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
  }

  // Скрыт/Показать пароль
  showPass.addEventListener('click', function showpass(a, b) {
    if ((a.type && b.type) == 'password') {
      a.setAttribute('type', 'text');
      b.setAttribute('type', 'text');
    } else {
      a.setAttribute('type', 'password');
      b.setAttribute('type', 'password');
    }
    showpass(inputPass1.value, inputPass2.value);
  });
};