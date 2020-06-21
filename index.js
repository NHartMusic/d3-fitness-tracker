//DOM elements 

const btns = document.querySelectorAll('button')
const form = document.querySelector('form')
const formActivity = document.querySelector('form span')
const input = document.querySelector('input')
const error = document.querySelector('error')

let activity = 'hiking'

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        activity = e.target.dataset.activity

        //switch active class to clicked button
        btns.forEach(btn => btn.classList.remove('active'))
        e.target.classList.add('active')

        input.setAttribute('id', activity)

        formActivity.textContent = activity

        update(data)

    })
})

//form submit 
form.addEventListener('submit', e => {
    e.preventDefault()

    const distance = parseInt(input.value)
    if (distance) {
        db.collection('activities').add({
            distance,
            activity,
            date: new Date().toString()
        }).then((error) => {
            error.textContent = ''
            input.value = ''
        })
    } else {
        // error.textContent = 'Please enter a valid distance amount'
    }
})

