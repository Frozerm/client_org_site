const spinner = document.querySelector('.spinner');

document.body.style.overflow = 'hidden';
window.onload = () => {
    document.body.style.overflow = '';
    spinner.classList.add('hide-preload');
    setTimeout(() => {
        spinner.style.display = 'none';
    }, 500)
}


