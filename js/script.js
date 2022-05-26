const elementSelect = document.querySelector('.select');
const choices = new Choices(elementSelect, {
  itemSelectText: '',
  placeholder: false,
  choices: [

    {
      value: 'Дмитрий Гутенберг',
      label: 'Дмитрий Гутенберг',
      selected: true,
      disabled: false,
    },
    {
      value: 'Татьяна Флеганова',
      label: 'Татьяна Флеганова',
      selected: false,
      disabled: false,
    },
    {
      value: 'Анна Васильева',
      label: 'Анна Васильева',
      selected: false,
      disabled: false,
    },
    {
      value: 'Пётр Дмитриевский',
      label: 'Пётр Дмитриевский',
      selected: false,
      disabled: false,
    },
  ],
  searchEnabled: false,
  shouldSort: false,
  placeholder: false,
});


const playButtons = document.querySelectorAll('.header__btn--play')
playButtons.forEach(item => {
  item.addEventListener('click', e => {
    item.classList.toggle('header__btn--paused')
  })
})