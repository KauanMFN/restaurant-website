document.getElementById('btnMobile').addEventListener('click', () => {
    const btn = document.getElementById('btnMobile')
    btn.classList.toggle('active')
    const linksMobile = document.getElementById('menuMobile')
    linksMobile.classList.toggle('activeLinks')
})