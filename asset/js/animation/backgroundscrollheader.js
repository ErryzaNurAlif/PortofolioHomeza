window.addEventListener('scroll', () => {
    //change background color
    const topHeader = document.getElementById('header-top');
    topHeader.classList.toggle('add-style', window.scrollY > 0);
});