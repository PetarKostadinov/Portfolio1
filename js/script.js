
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')
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

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')

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




