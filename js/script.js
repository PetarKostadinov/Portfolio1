
const contactForm = document.querySelector('#contact-form')
const currentYear = document.querySelector('#current-year')

if (currentYear) {
    currentYear.textContent = new Date().getFullYear()
}

contactForm?.addEventListener('submit', async event => {
    event.preventDefault()

    const submitButton = contactForm.querySelector('#submit__btn')
    const formStatus = contactForm.querySelector('#form-status')

    submitButton.disabled = true
    submitButton.innerHTML = 'Sending... <i class="bx bx-loader-alt bx-spin"></i>'
    formStatus.className = ''
    formStatus.textContent = 'Sending your message...'

    try {
        const response = await fetch(contactForm.action, {
            method: contactForm.method,
            body: new FormData(contactForm),
            headers: { Accept: 'application/json' }
        })

        if (!response.ok) {
            throw new Error('Form submission failed')
        }

        contactForm.reset()
        formStatus.className = 'form-status--success'
        formStatus.textContent = 'Thank you! Your message has been sent.'
    } catch {
        formStatus.className = 'form-status--error'
        formStatus.textContent = 'The message could not be sent. Please try again.'
    } finally {
        submitButton.disabled = false
        submitButton.innerHTML = 'Send message <i class="bx bx-send"></i>'
    }
})

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(navLink => navLink.classList.remove('active'))
        link.classList.add('active')
    })
})

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 100
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })

            sec.classList.add('show-animate')
        } else {
            sec.classList.remove('show-animate')
        }
    })
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 10)

    let footer = document.querySelector('footer')

    function animateFooter() {
        let rect = footer.getBoundingClientRect()
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            footer.classList.add('show-animate')
        } else {
            footer.classList.remove('show-animate')
        }
    }

    window.addEventListener('scroll', animateFooter)

}




