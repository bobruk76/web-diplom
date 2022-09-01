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
})


const validation = new JustValidate(
        '.about-us__form',
        {
            errorLabelStyle: null,
        },
    )
;

validation
    .addField('#agree', [
        {
            rule: 'required',
            errorMessage: 'Вы не дали согласие',
        },
    ])
    .addField('#message', [
        {
            rule: 'required',
            errorMessage: 'Вы не ввели сообщение',
        },
    ])
    .addField('#name', [
        {
            rule: 'required',
            errorMessage: 'Вы не ввели имя',
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

const burgerButtons = document.querySelectorAll('.burger')

burgerButtons.forEach(burgerButton =>
    burgerButton.addEventListener('click', () => {
        let menuSelector = burgerButton.dataset.items
        let headerMenu = document.querySelector(`.${menuSelector}`)
        if (!burgerButton.classList.contains('burger--active')) {
            burgerButton.classList.add('burger--active')
            headerMenu.classList.add(`${menuSelector}--active`)
        } else {
            burgerButton.classList.remove('burger--active')
            headerMenu.classList.remove(`${menuSelector}--active`)
        }
    }))

const searchButton = document.querySelector('.header__btn-search')
const headerForm = document.querySelector('.header__form')

searchButton.addEventListener('click', () => {
    if (!headerForm.classList.contains('header__form--active')) {
        headerForm.classList.add('header__form--active')
    } else {
        headerForm.classList.remove('header__form--active')
    }

})

// guests__item
const guestsSocialPhoto = document.querySelector('.guests__social-photo').firstElementChild
const guestsContentDescr = document.querySelector('.guests__content-descr')
const guestsContentTitle = document.querySelector('.guests__content-title')
const guestsItems = document.querySelectorAll('.guests__item')
let guestsItemsActive = document.querySelectorAll('.guests__item--active')
guestsItems.forEach(guestsItem =>
    guestsItem.addEventListener('click', (e) => {
        if (!guestsItem.classList.contains('guests__item--active')) {
            guestsItemsActive.forEach(item =>
                item.classList.remove('guests__item--active'))
            guestsItem.classList.add('guests__item--active')
            guestsContentTitle.textContent = guestsItem.firstElementChild.textContent
            guestsContentDescr.textContent = guestsItem.firstElementChild.textContent
            let children=[...guestsSocialPhoto.children]
            children.forEach(photo => {
                if(photo.hasAttribute("src")) {
                    photo.src = "img/guests-none.svg"

                } else {
                    photo.srcset = "img/guests-none.svg"
                }

            })
        }
        guestsItemsActive = [guestsItem]
    }))

// podcasts__item-btn
const podcastsItemsBtn = document.querySelectorAll('.podcasts__item-btn')
let podcastsItemPlay = document.querySelector('.podcasts__item-btn--play')
podcastsItemsBtn.forEach(podcastsItem =>
    podcastsItem.addEventListener('click', () => {
        if (podcastsItem.classList.contains('podcasts__item-btn--paused')) {
            podcastsItem.classList.remove('podcasts__item-btn--paused')
        } else {
            if (podcastsItemPlay !== podcastsItem) {
                if (podcastsItemPlay) {
                    podcastsItemPlay.classList.remove('podcasts__item-btn--play')
                    if (podcastsItemPlay.classList.contains('podcasts__item-btn--paused')) {
                        podcastsItemPlay.classList.remove('podcasts__item-btn--paused')
                    }
                }
                podcastsItem.classList.add('podcasts__item-btn--play')
                podcastsItemPlay = podcastsItem
            } else {
                podcastsItem.classList.add('podcasts__item-btn--paused')
            }
        }
    }))

// podcasts__btn
const podcastsBtn = document.querySelector('.podcasts__btn')
const podcastsItems = document.querySelectorAll('.podcasts__item')
let podcastsItemsHide = [...document.querySelectorAll('.podcasts__item--hide')]

const podcastsItemsHideInit = () => {
    if (!podcastsBtn.classList.contains('visually-hidden')) {
        if (podcastsItemPlay) {
            podcastsItemPlay.classList.remove('podcasts__item-btn--paused')
        }
        const count = (+window.innerWidth < 577) ? -8 : -4
        podcastsItemsHide = [...podcastsItems].slice(count)
        podcastsItemsHide.forEach(item => {
            item.classList.add('podcasts__item--hide')
        })
        podcastsBtn.classList.remove('visually-hidden')
    }
}

window.addEventListener("load", podcastsItemsHideInit)
window.addEventListener("resize", podcastsItemsHideInit)

podcastsBtn.addEventListener('click', (event) => {
    event.preventDefault()
    podcastsItemsHide.forEach(item => {
        item.classList.toggle('podcasts__item--hide')
    })
    podcastsBtn.classList.add('visually-hidden')
})
