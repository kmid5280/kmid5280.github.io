function renderIconsTop() {
    $('.top-icons-wrapper').append(`
    <i class="fas fa-envelope"></i>
    <a href="https://www.linkedin.com/in/kyle-middleton-b9a258165/"><i class="fab fa-linkedin-in"></i></a>
    <a href="https://github.com/kmid5280"><i class="fab fa-github"></i></a>
    `)
}

function renderIconsBottom() {
    $('.bottom-icon-wrapper').append(`
    <i class="fas fa-envelope"></i>
    <a href="https://www.linkedin.com/in/kyle-middleton-b9a258165/"><i class="fab fa-linkedin-in"></i></a>
    <a href="https://github.com/kmid5280"><i class="fab fa-github"></i></a>
    `)
}


function emailClick() {
    const mail1 = 'mail'
    const to = 'to:'
    const email1 = 'email'
    const email2 = '@'
    const email3 = 'email.com'
    
    $('.fa-envelope').on('click', event => {
        window.location = mail1+to+email1+email2+email3
    })
}
renderIconsTop()
renderIconsBottom()
emailClick()