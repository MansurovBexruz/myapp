// Подборка пожеланий хранится в массиве: при желании сюда легко добавить новые.
const wishes = [
  'Пусть любознательность учеников вдохновляет вас так же, как вы вдохновляете их!',
  'Желаем больше поводов для гордости, радостных открытий и тёплых слов в ответ.',
  'Пусть каждый ваш урок зажигает искру, из которой вырастают большие мечты.',
  'Пусть терпение возвращается благодарностью, а забота — улыбками учеников.',
  'Желаем, чтобы в расписании всегда находилось место для радости, отдыха и вдохновения.',
  'Пусть ваши знания прорастают в добрые дела и счастливые истории учеников.'
];

// querySelector находит нужные элементы страницы по CSS-селекторам.
const wishButton = document.querySelector('#wish-button');
const wishText = document.querySelector('#wish-text');
const ecardForm = document.querySelector('#ecard-form');
const teacherNameInput = document.querySelector('#teacher-name');
const formHint = document.querySelector('#form-hint');
const createdCard = document.querySelector('#created-card');
const createdCardTitle = document.querySelector('#created-card-title');
let previousWishIndex = -1;

// addEventListener запускает этот обработчик при нажатии на кнопку.
wishButton.addEventListener('click', () => {
  let wishIndex;

  // Выбираем случайное пожелание и стараемся не повторять предыдущее подряд.
  do {
    wishIndex = Math.floor(Math.random() * wishes.length);
  } while (wishes.length > 1 && wishIndex === previousWishIndex);

  previousWishIndex = wishIndex;
  wishText.textContent = wishes[wishIndex];
});

// Обрабатываем отправку формы без перезагрузки страницы.
ecardForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const teacherName = teacherNameInput.value.trim();

  if (!teacherName) {
    formHint.textContent = 'Пожалуйста, введите имя учителя.';
    formHint.classList.add('is-error');
    teacherNameInput.focus();
    return;
  }

  // textContent показывает введённое имя как обычный текст, а не как HTML-разметку.
  createdCardTitle.textContent = `Дорогой(ая) ${teacherName}!`;
  createdCard.hidden = false;
  formHint.textContent = 'Ваша открытка готова — поделитесь тёплыми словами!';
  formHint.classList.remove('is-error');
  createdCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

teacherNameInput.addEventListener('input', () => {
  if (teacherNameInput.value.trim()) {
    formHint.textContent = 'Мы бережно добавим имя в поздравление.';
    formHint.classList.remove('is-error');
  }
});