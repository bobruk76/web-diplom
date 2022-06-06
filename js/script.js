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

const accordion = new Accordion('.guests__accordion', {
    duration: 300,
    elementClass: 'guests__accordion-item',
    panelClass: 'guests__items',
    triggerClass: 'guests__accordion-item-title',
    openOnInit: [0],
    beforeOpen: (currentElement) => {
        const plusButton = currentElement.querySelector('.arrow-in-circle')
        plusButton.classList.add('arrow-in-circle--active')
    },
    beforeClose: (currentElement) => {
        const plusButton = currentElement.querySelector('.arrow-in-circle')
        plusButton.classList.remove('arrow-in-circle--active')
    }
})


const validation = new JustValidate(
        '.about-us__form',
        {
            errorLabelStyle: null,
        },
    )
;

validation
    .addField('#name', [
        {
            rule: 'required',
            errorMessage: 'Вы не ввели имя',
        },

        {
            rule: 'customRegexp',
            value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
            errorMessage: 'Ошибка',
        },
    ])
    .addField('#email', [
        {
            rule: 'required',
            errorMessage: 'Вы не ввели e-mail',
        },
        {
            rule: 'email',
            errorMessage: 'Ошибка',
        },
    ]);

const burgerButton = document.querySelector('.burger')
const headerMenu = document.querySelector('.header__items')

burgerButton.addEventListener('click', () => {
    if (!burgerButton.classList.contains('burger--active')) {
        console.log('active')
        burgerButton.classList.add('burger--active')
        headerMenu.classList.add('header__items--active')
    } else {
        console.log('inactive')
        burgerButton.classList.remove('burger--active')
        headerMenu.classList.remove('header__items--active')
    }
})