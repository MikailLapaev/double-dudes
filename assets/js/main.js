// Для блока услуг поворот стрелки при наведении на ссылку
let btnTitle = document.querySelector('.usluga-type-title')
let btnArrow = document.querySelector('.uslugi-arrow svg')

btnTitle.addEventListener('mouseover', function(){
    btnArrow.style.transform = 'rotate(46deg)'
    btnArrow.style.transition = '0.4s'
    btnArrow.style.fill = '#fff'
})

btnTitle.addEventListener('mouseout', function(){
    btnArrow.style.transform = 'rotate(0deg)'
    btnArrow.style.transition = '0.4s'
    btnArrow.style.fill = '#C8C8C8'
})