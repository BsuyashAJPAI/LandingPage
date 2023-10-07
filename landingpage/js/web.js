burger=document.querySelector('.burger');
rightnav=document.querySelector('.rightnav');
nav=document.querySelector('nav')
ul=document.querySelector('ul')


burger.addEventListener('click',()=>{
    rightnav.classList.toggle('nav-v')
    ul.classList.toggle('nav-v')
    nav.classList.toggle('nav-h')

})