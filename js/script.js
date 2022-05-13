const elementSelect = document.querySelector('.select');
const choices = new Choices(elementSelect, {
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
