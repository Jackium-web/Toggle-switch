document.querySelector('.inside_toggle').onclick = () =>
{
    document.querySelector('body').classList.toggle('body-change-bg');
    document.querySelector('.inside_toggle').classList.toggle('animate-back');
}