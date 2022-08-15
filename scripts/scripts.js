const menuOpen = document.querySelector('.menu-opener')

menuOpen.addEventListener('click',()=>{
    let navbar = document.querySelector('nav')
    if(navbar.style.display === "none"){
        navbar.style.display = "flex"
    }else{
        navbar.style.display = "none"
    }
})