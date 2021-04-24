const ratings = document.querySelectorAll('.rating')
const btnSend = document.querySelector('.send')
const feedbackContainer = document.querySelector('.feedback-container')
const ratingsBox = document.querySelector('.ratings-box')

let selectedRating = 'Satisfied'

// EVENT ON WHOLE RATING BOX
ratingsBox.addEventListener('click', (e) => {
    // if parent contains class "rating", trigger the click
    if (e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        // get value of text under image
        selectedRating = e.target.nextElementSibling.innerText
    }
})

// REMOVE ANY ELEMENT WITH CLASS ACTIVE
function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}

// WHEN BUTTON IS PRESSED, CHANGED HTML TO ANOTHER MESSAGE
btnSend.addEventListener('click', (e) => {
    feedbackContainer.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `
})