let scrollTop = document.getElementById('scroll-top')

window.onscroll = function (){
    if(this.scrollY >= 465 )
        {
            scrollTop.classList.add("showscrollTop")
        } 
        else{
            scrollTop.classList.remove("showscrollTop")
        }
}
scrollTop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
})

// end

const menuapp = document.getElementById('menu-app')
const listmenuapp = document.querySelector('.list-menu-app')

menuapp.addEventListener("click",()=>{
    listmenuapp.classList.toggle('active-menu-app')
})
