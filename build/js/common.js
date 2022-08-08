
//burger menu
const burgline=document.querySelector('.line')
const burger = document.querySelector('.burger')
function hideBurg(){
    burgline.classList.remove('lineactive')
    burger.classList.remove('burgershow')
}
function showBurg(){
    burgline.classList.add('lineactive')
    burger.classList.add('burgershow')
}
burgline.addEventListener('click',()=>{
    const burgshow=document.querySelector('.lineactive')
    burgshow?hideBurg(): showBurg()
})
//program module
const wrapmodule=document.querySelector('.wrap_number_module')
const numbermodule=document.querySelectorAll('.number_module')
const blockmodule=document.querySelectorAll('.module')
function hidenmodule(){
    blockmodule.forEach((d)=>{
        d.classList.remove('module_show')
    })
    numbermodule.forEach((e)=>{
        e.classList.remove('number_module_show')
    })
}
function showmodule(mod=0){
    blockmodule[mod].classList.add('module_show')
    numbermodule[mod].classList.add('number_module_show')
}
hidenmodule()
showmodule(0)
wrapmodule.addEventListener('click',(e)=>{
    numbermodule.forEach((f,i)=> {
        if (e.target==f){
            hidenmodule()
            showmodule(i)
        }
    })
})