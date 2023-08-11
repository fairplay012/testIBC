const serviceTag = document.getElementById('service-scroll');
const targetService = document.getElementsByClassName('service')[0];

serviceTag.addEventListener('click', () => {
    targetService.scrollIntoView({ behavior: 'smooth' });
});

