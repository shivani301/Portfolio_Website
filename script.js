const Header = document.querySelector('.header');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
Header.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    console.log(entries)
    Header.classList.toggle('sticking', !entries[0].isIntersecting)
});

navObserver.observe(scrollWatcher)