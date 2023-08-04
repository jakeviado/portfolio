const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>
    {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.section-contents')
hiddenElements.forEach((el) => observer.observe(el));


window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);