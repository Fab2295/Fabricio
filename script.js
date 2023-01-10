const menu = document.querySelectorAll('.menu ul li a');
const sections = document.querySelectorAll('section');
const modalVideo = document.querySelector('.modal');
const video = document.querySelector('.modal-video video')
const buttonModalVideo = document.getElementById('button-video');
const buttonCloseModal = document.getElementById('close_modal');
const pageOff = document.querySelector('.pageOff');


menuList = Array.from(menu);
menuList.map((link) => {
    link.addEventListener('click', () => {
        let sectionTarget = document.querySelector(link.attributes.href.value)

        sections.forEach((section) => {
            section.classList.remove('ativo');
        })

        sectionTarget.classList.add('ativo')
    })
})

buttonModalVideo.addEventListener('click', () => {
    modalVideo.classList.add('ativo')
    video.setAttribute("autoplay", "true");
    video.setAttribute("loop", "true");
})

buttonCloseModal.addEventListener('click', () => {
    modalVideo.classList.remove('ativo')
    video.removeAttribute("autoplay");
    video.removeAttribute("loop");
})

window.addEventListener('offline', function() {
    pageOff.classList.add('ativo');
});

window.addEventListener('online', function() {
    pageOff.classList.remove('ativo');
});