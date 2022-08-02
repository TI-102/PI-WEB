const c = (el) => document.querySelector(el)
const cs = (el) => document.querySelectorAll(el)


cakeJson.map((item,index) =>{

    let cakeItem = document.querySelector('.models .cake-item').cloneNode(true)

    cakeItem.setAttribute('data-key',index) 

    //adicionando o nome do bolo
    cakeItem.querySelector('.cake-item--name').innerHTML = item.name
    
    //descrição
    cakeItem.querySelector('.cake-item--desc').innerHTML = item.description

    //preço
    cakeItem.querySelector('.cake-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`

    //imagem
    cakeItem.querySelector('.cake-item--img img').src = item.img

    //colocando evento para abrir a janela
    cakeItem.querySelector('a').addEventListener('click',(e) =>{

        e.preventDefault()


        let key = e.target.closest('.cake-item').getAttribute('data-key')

        
        //pegando o nome do bolo
        c('.cakeInfo h1').innerHTML = cakeJson[key].name

        //colocando imagem, descrição e preço
        c('.cakeInfo--desc').innerHTML = cakeJson[key].description
        c('.cakeBig img').src = cakeJson[key].img
        c('.cakeInfo--actualPrice').innerHTML = `R$ ${cakeJson[key].price.toFixed(2)}`


        cs('.cakeInfo--size').forEach((size, sizeIndex)=>{ 
        
            size.querySelector('span').innerHTML = cakeJson[key].sizes[sizeIndex]
        })



       c('.cakeWindowArea').style.opacity = 0
       c('.cakeWindowArea').style.display = 'flex'

       setTimeout(()=>{
        c('.cakeWindowArea').style.opacity = 1
       },200)
    })


   c('.cake-area').append(cakeItem)

})

//eventos do Modal
function closeModal(){
    c('.cakeWindowArea').style.opacity = 0;// ficar invisível
    setTimeout(() =>{
        c('.cakeWindowArea').style.display = 'none'
    },500);
}

cs('.cakeInfo--cancelButton, .cakeInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal)
})



