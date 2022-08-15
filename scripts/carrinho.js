const menuOpen = document.querySelector('.menu-opener')

menuOpen.addEventListener('click',()=>{
    let navbar = document.querySelector('nav')
    if(navbar.style.display === "none"){
        navbar.style.display = "flex"
    }else{
        navbar.style.display = "none"
    }
})


//Meio de obter o data-key de cada item (Pelo botão PEDIR)
const itemByButton = document.querySelectorAll('.order')

itemByButton.forEach(item => {
    item.addEventListener('click',()=>{

    console.log(item.parentNode.parentNode.dataset)

    let itemClicked = console.log(item.parentNode.parentNode.dataset)
    })

});

