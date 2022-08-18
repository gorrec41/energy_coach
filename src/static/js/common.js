
//burger menu
const burgline=document.querySelector('.linemob')
const burger = document.querySelector('.burger')
function hideBurg(){
    burgline.classList.remove('linemobactive')
    burger.classList.remove('burgershow')
}
function showBurg(){
    burgline.classList.add('linemobactive')
    burger.classList.add('burgershow')
}
burgline.addEventListener('click',()=>{
    const burgshow=document.querySelector('.linemobactive')
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
burger.addEventListener('click',(e)=> hideBurg())
//program mobil module
const showmob=document.querySelector('.mobil_list_show')
const mobilModul=document.querySelectorAll('.mobil_module')
const mobilList=document.querySelectorAll('.mobil_list')
function hideList(){
    mobilList.forEach((f)=>{
        f.classList.remove('mobil_list_show')
    })
}
function showList(show){
    hideList()
    mobilList[show].classList.add('mobil_list_show')
}
hideList()
mobilModul.forEach((f)=>{
    f.addEventListener('click',(e)=>{
        const showtab=f.id
        switch (showtab){
            case "m1":
                showList(0)
                break;
            case "m2":
                showList(1)
                break;
            case "m3":
                showList(2)
                break;
            case "m4":
                showList(3)
                break;
            case "m5":
                showList(4)
                break;
            case "m6":
                showList(5)
                break;
            case "m7":
                showList(6)
                break;
            case "m8":
                showList(7)
                break;
        }
    })
})